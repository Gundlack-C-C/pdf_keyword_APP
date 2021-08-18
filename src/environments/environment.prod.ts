export const environment = {
  production: true,
  services: {
    wiki: window["env"]["wikiUrl"] || "http://localhost:5003",
    pdf: window["env"]["pdfUrl"] || "http://localhost:5001",
    session: window["env"]["sessionUrl"] || "http://localhost:5103"
  }
};
