let mix = require("laravel-mix");

class TheVuetifyPlugin {
  webpackRules() {
    return {
      test: /\.s(c|a)ss$/,
      use: [
        "vue-style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require("sass"),
            sassOptions: {
              indentedSyntax: true, // optional
            },
          },
        },
      ],
    };
  }
}

mix.extend("thevuetifyplugin", new TheVuetifyPlugin());
