export const environment = {
  production: true,
  services: {
    wiki: window["env"]["wikiUrl"] || "http://localhost:5003",
    pdf: window["env"]["pdfUrl"] || "http://localhost:5001",
    sklearn: window["env"]["sklearnUrl"] || "http://localhost:5101",
    transformers: window["env"]["transformersUrl"] || "http://localhost:5102",
    session: window["env"]["sessionUrl"] || "http://localhost:5103"
  }
};
