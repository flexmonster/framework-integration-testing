module.exports = {
    url: "/#/updating-data",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            elements: {
                updateDataButton: "div > button.button-red"
            },
            sections: {
                description: {
                    selector: "div.first-description-block",
                    elements: {
                        toUpdateDataLink: "p > a.title-link"
                    }
                },
                pivot: {
                    selector: "div > div#fm-pivot-view",
                    sections: {
                        gridContainer: {
                            selector: "div.fm-grid-view",
                            elements: {
                               row1col1:'div[data-r="1"][data-c="1"]'
                            }
                        }
                    }
                },
            },

        }
    }
};
