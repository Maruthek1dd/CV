import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default {
  plugins: [postcssImport(), postcssNested(), autoprefixer(), tailwindcss()],
};
