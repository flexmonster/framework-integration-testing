module.exports = {
    url: "/#/customizing-toolbar",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                description: {
                    selector:"div.first-description-block",
                    elements:{
                        toCustomizingToolbarLink:"p > a.title-link"
                    }
                },
                toolbar:{
                    selector:"div > div#fm-toolbar-wrapper > div.fm-list-wrapper > ul#fm-toolbar",
                    sections:{
                        leftGroup:{
                            selector:"div.fm-toolbar-group-left",
                            elements:{
                                newTab:"li#fm-tab-newtab > a",
                            }
                        }
                    }
                },
                popup:{
                   selector:"div > div > div#fm-pivot-view > div.fm-ui-popup.fm-alert-view",
                    elements:{
                       popupTitle:"div.fm-content > span.fm-popup-title",
                        popupLink:"div.fm-content > span:nth-child(2) > a"
                    }
                }
            },

        }
    }
};
