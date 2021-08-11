(function(window) {
    window["env"] = window["env"] || {};
  
    // Environment variables
    window["env"]["wikiUrl"] = "${WIKI_SERVICE_URL}";
    window["env"]["pdfUrl"] = "${PDF_SERVICE_URL}";
    window["env"]["sklearnUrl"] = "${SKLEARN_SERVICE_URL}";
    window["env"]["transformersUrl"] = "${TRANSFORMERS_SERVICE_URL}";
    window["env"]["sessionUrl"] = "${SESSION_SERVICE_URL}";
  })(this);