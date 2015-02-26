Package.describe({
  summary: "the last carousel you'll ever need",
  name:    "dcsan:slick",
  version: "1.4.1_2",
  git:     "https://github.com/dcsan/meteor-slick"
});

Package.onUse(function(api) {
  
  api.versionsFrom("METEOR@1.0");
  
  api.use('jquery', 'client');
  
  api.addFiles([
    "vendor/slick/slick/ajax-loader.gif",
    "vendor/slick/slick/fonts/slick.eot",
    "vendor/slick/slick/fonts/slick.svg",
    "vendor/slick/slick/fonts/slick.ttf",
    "vendor/slick/slick/fonts/slick.woff"
  ], "client", { isAsset: true });
  
  api.addFiles([
    "vendor/slick/slick/slick.css",
    "vendor/slick/slick/slick.js",
    "lib/overrides.css"
  ], "client");
  
});

