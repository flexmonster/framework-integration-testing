module.exports = {
    url: "/#/using-api-calls",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                description: {
                    selector: "div.first-description-block",
                    elements: {
                        linkToAPICalls: "p > a.title-link"
                    }
                },
                viewToggle: {
                    selector: "#viewToggle",
                    elements: {
                        viewCheckbox: "input.button-checkbox",
                        viewCheckboxLabel: "label > span"
                    }
                },
                modeToggle: {
                    selector: "#modeToggle",
                    elements: {
                        modeCheckbox: "input.button-checkbox",
                        modeCheckboxLabel: "label > span"
                    }
                },
                pivot:{
                    selector:"div > div#fm-pivot-view",
                    elements:{
                        gridContainer:"div.fm-grid-view",
                        chartsContainer:"div.fm-charts-view",
                        configuratorButton:"div.fm-fields-view-wrap > button"
                    }
                }
            }
        }
    }

};
