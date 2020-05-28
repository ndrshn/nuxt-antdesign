export default {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ]
  },
  css: ["ant-design-vue/dist/antd.css", "~/css/main.css"],
  plugins: [
    // ssr: false to only include it on client-side
    { src: "~/plugins/antdv.js", ssr: false }
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  }
};
