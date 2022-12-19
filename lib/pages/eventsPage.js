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
                        pivot:{
                            selector:"div > div#fm-pivot-view",
                            elements:{
                                gridContainer:"div.fm-grid-view",
                                configuratorButton:"div.fm-fields-view-wrap > button"
                            }
                        },
                        eventsOutput:{
                            selector:"div > div.event-logs-wrapper",
                            elements:{
                                content:"div.content"
                            }
                        },
                        clearOutput:{
                            selector:"div > div.section--button",
                            elements:{
                                clearOutputButton:"button"
                            }
                        }
                    },

                }
            }
};
