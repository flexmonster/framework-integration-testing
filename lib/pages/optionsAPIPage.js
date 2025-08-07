module.exports = {
  url: "/options-api-demo",
  sections: {
    pivotContainer: {
      selector: "div.wrap > div.pivot-example-container",
      sections: {
        description: {
          selector: "div.first-description-block",
          elements: {
            toOptionsAPIVueLink: "p:nth-child(1) > a.title-link",
            toOptionsAPIGuideLink: "p:nth-child(2) > a.title-link",
          },
        },
      },
      elements: {
        mainTitle: "div > h1.page-title",
      },
    },
  },
};
