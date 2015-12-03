Package.describe({
  summary: "The last carousel you'll ever need.",
  name:    "timbrandin:slick",
  version: "1.5.9",
  git:     "https://github.com/timbrandin/meteor-slick"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use('jquery', 'client');

  api.use('fourseven:scss@3.4.1', 'client');

  api.addFiles([
    "vendor/slick/slick/ajax-loader.gif",
    "vendor/slick/slick/fonts/slick.eot",
    "vendor/slick/slick/fonts/slick.svg",
    "vendor/slick/slick/fonts/slick.ttf",
    "vendor/slick/slick/fonts/slick.woff"
  ], "client", { isAsset: true });

  api.addFiles([
    "vendor/slick/slick/slick.scss",
    "vendor/slick/slick/slick-theme.scss",
    "vendor/slick/slick/slick.js",
    "lib/overrides.css"
  ], "client");

});
