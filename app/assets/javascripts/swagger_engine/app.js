window.onload = function() {

  const ui = SwaggerUIBundle({
    url: "http://panel.dev:3000/v2/api.json",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    validatorUrl: null
  });

  window.ui = ui

  $(".topbar").remove();
}