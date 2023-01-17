module.exports = {
    url: "/#/handling-events",
    sections: {
                pivotContainer: {
                    selector: "div.wrap > div.pivot-example-container",
                    sections: {
                        description: {
                            selector:"div.first-description-block",
                            elements:{
                                toFMEventsLink:"a.title-link"
                            }
                        },
                        toggle:{
                            selector:"#eventsToggle",
                            elements:{
                                checkbox:"input.button-checkbox",
                                checkboxLabel:"label > span"
                            }
                        },
                        /*pivot:{
                            selector:"div > div#fm-pivot-view",
                            elements:{
                                gridContainer:"div.fm-grid-view",
                                configuratorButton:"div.fm-fields-view-wrap > button",
                                countryField:"div.fm-grid-view div.fm-cols-sheet div.fm-scroll-content > div:nth-child(2) > div"
                            }
                        },*/
                        eventsOutput:{
                            selector:"div.event-logs-wrapper",
                            elements:{
                                content:"div.content",
                                firstLine:"div.content > div:nth-child(1)"
                            }
                        },
                        clearOutput:{
                            selector:"div.section--button",
                            elements:{
                                clearOutputButton:"button"
                            }
                        }
                    },

                }
            }
};
