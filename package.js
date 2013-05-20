Package.describe({
  summary: "Processing visualization library"
});

Package.on_use(function (api) {
  api.add_files('processing.min.js', 'client');
});
