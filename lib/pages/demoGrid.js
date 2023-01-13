module.exports = {
    url: "/",
    sections: {
        pivotExample: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                pivotGrid: {
                    selector: "div#fm-pivot-view",
                    elements: {
                        configuratorButton: "div.fm-fields-view-wrap button",
                    }
                }
            }
        }
    }

};
