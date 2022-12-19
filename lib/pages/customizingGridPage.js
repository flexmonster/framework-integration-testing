module.exports = {
    url: "/#/customizing-grid",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                description: {
                    selector:"div.first-description-block",
                    elements:{
                        toCustomizingGridLink:"p > a.title-link"
                    }
                },
                toggle:{
                    selector:"#customizationToggle",
                    elements:{
                        checkbox:"input.button-checkbox",
                        checkboxLabel:"label > span"
                    }
                },
            },

        }
    }
};
