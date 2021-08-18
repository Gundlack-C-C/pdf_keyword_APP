(function(window) {
    window["env"] = window["env"] || {};
  
    // Environment variables
    window["env"]["wikiUrl"] = "${WIKI_SERVICE_URL}";
    window["env"]["pdfUrl"] = "${PDF_SERVICE_URL}";
    window["env"]["sessionUrl"] = "${SESSION_SERVICE_URL}";
  })(this);