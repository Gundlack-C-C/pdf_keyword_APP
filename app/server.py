from flask import Flask, render_template, flash, request, redirect, url_for, send_from_directory
from flask_cors import CORS
import requests
import logging
import argparse
import os, sys


app = Flask(__name__)
CORS(app)

environments = []
environments.append(('/sklear', 'NLP Service using sklearn'))
environments.append(('/pdf', 'Pdf Service'))
environments.append(('/wiki', 'Wiki API Service'))

app.add_url_rule("/playground", endpoint="playground", build_only=True)
app.add_url_rule("/set_text", endpoint="text_set", build_only=True)
app.add_url_rule("/analyze/", endpoint="text_analyse", build_only=True)
app.add_url_rule("/wiki/random", endpoint="wiki_random", build_only=True)
app.add_url_rule("/pdf/api/text", endpoint="pdf_upload", build_only=True)
app.add_url_rule("/pdf/download", endpoint="pdf_download", build_only=True)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html', environments=environments)

@app.route('/playground', methods=['GET', 'POST'])
def playground():
    settings = []
    text = request.form.get('input_text', '')
    return render_template('playground.html', settings=settings, text=text)

@app.route('/set_text', methods=['GET', 'POST'])
def set_text(mode = None):
    settings = []
    text = ''
    if mode=='random':
        text = requests.get('/wiki/random')
    elif mode=='pdf':
        text = requests.post('/pdf/api/text')

    return render_template('text_input.html', settings=settings, text=text)

if __name__ == '__main__':

    try:
        LOG = "./.log/app.log"

        # Setup Argument Parser
        parser = argparse.ArgumentParser(description='Argument Parser')
        parser.add_argument('-l', '--log', dest='LOGFILE', type=str, default=LOG,
                            help=f'path for logfile (default: {LOG})')
        parser.add_argument("--production", action='store_const', help="set to production mode", const=True, default=False)

        args = parser.parse_args()
        # Check if production is set
        PRODUCTION = args.production
        os.environ['PRODUCTION'] = str(PRODUCTION)

        if not os.path.exists(os.path.abspath(os.path.dirname(args.LOGFILE))):
                os.makedirs(os.path.abspath(os.path.dirname(args.LOGFILE)))

        
        # Setup Logging
        logging.basicConfig(filename=args.LOGFILE, level=logging.INFO if PRODUCTION else logging.DEBUG,
                        format='%(asctime)s %(levelname)-8s %(message)s')
        logging.getLogger().addHandler(logging.StreamHandler(sys.stdout))

        logging.info(f"Starting Server with [{args}]")
    
        # Start Server
        app.run(host="0.0.0.0", debug=False, port = 5001)

    except Exception as e:
        logging.error(e)
