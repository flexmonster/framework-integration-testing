module.exports = {
    url: "/",
    sections: {
        navbar: {
            selector: "header > div.container-xl",
            sections: {
                logo: {
                    selector: 'a.logo',
                    elements: {
                        logoImg: 'img',
                    }
                },
                links: {
                    selector: "ul.mainnav",
                    elements: {
                        toVue2IntegrationLink: 'li:nth-child(1) > a',
                        toDocsLink: 'li:nth-child(2) > a',
                        toHelpCenterLink: 'li:nth-child(3) > a',
                        toContactLink: 'li:nth-child(4) > a',
                    }
                }
            }
        },
        mainContainer: {
            selector: "div.wrap",
            sections: {
                sidebar: {
                    selector: "div > div.side-menu",
                    elements: {
                        toFMDemoLink: 'ol:nth-child(1) > li:nth-child(1) > a',
                        toHandlingEventsLink: 'ol:nth-child(3) > li:nth-child(1) > a',
                        toUsingAPICallsLink: 'ol:nth-child(3) > li:nth-child(2) > a',
                        toUpdatingDataLink: 'ol:nth-child(3) > li:nth-child(3) > a',
                        toCustomizingToolbarLink: 'ol:nth-child(5) > li:nth-child(1) > a',
                        toCustomizingGridLink: 'ol:nth-child(5) > li:nth-child(2) > a',
                        toHighchartsLink: 'ol:nth-child(7) > li:nth-child(1) > a',
                        toAmChartsLink: 'ol:nth-child(7) > li:nth-child(2) > a',
                    }
                },
                pivotExample: {
                    selector: "div.pivot-example-container",
                    elements: {
                        mainTitle: "h1.page-title"
                    }
                }
            }
        }
    }
};
