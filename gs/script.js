function doGet() {
  return HtmlService.createTemplateFromFile('siunten')
        .evaluate()
      .setTitle("index")
      .addMetaTag("viewport", "width=device-width,initial-scale=1");
}
