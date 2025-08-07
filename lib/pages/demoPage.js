module.exports = {
  url: "/",
  sections: {
    mainContainer: {
      selector: "div.wrap",
      sections: {
        pivotExample: {
          selector: "div.pivot-example-container",
          elements: {
            mainTitle: "h1.page-title",
            linkToDocs: "div.description-blocks a.title-link",
          },
        },
      },
    },
  },
};
