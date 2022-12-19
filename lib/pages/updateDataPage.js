module.exports = {
    url: "/#/updating-data",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            elements:{
              updateDataButton:"div > button.button-red"
            },
            sections: {
                description: {
                    selector:"div.first-description-block",
                    elements:{
                        toUpdateDataLink:"p > a.title-link"
                    }
                },
                pivot:{
                    selector:"div > div#fm-pivot-view",
                    elements:{
                        gridContainer:"div.fm-grid-view",
                        configuratorButton:"div.fm-fields-view-wrap > button"
                    }
                },
            },

        }
    }
};
