module.exports = {
    url: "/#/handling-events",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                description: {
                    selector: "div.first-description-block",
                    elements: {
                        toFMEventsLink: "a.title-link"
                    }
                },
                toggle: {
                    selector: "#eventsToggle",
                    elements: {
                        checkbox: "input.button-checkbox",
                        checkboxLabel: "label > span"
                    }
                },
                eventsOutput: {
                    selector: "div.event-logs-wrapper",
                    elements: {
                        content: "div.content",
                        firstLine: "div.content > div:nth-child(1)"
                    }
                },
                clearOutput: {
                    selector: "div.section--button",
                    elements: {
                        clearOutputButton: "button"
                    }
                }
            }
        }
    }
};
