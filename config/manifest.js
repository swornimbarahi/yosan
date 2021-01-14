'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: "yosan",
    short_name: "yosan",
    description: "",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/assets/favicon.webp",
        sizes: "50x50",
        type: "image/webp"
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
