module.exports = {
    url: "/updating-data",
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
                pivotGrid: {
                    selector: "div#fm-pivot-view",
                    elements: {
                        row1col1: 'div[data-r="1"][data-c="1"]',
                        configuratorButton: "div.fm-fields-view-wrap > button.fm-btn-open-fields"
                    }
                },
                fieldList: {
                    selector: "div.fm-fields-opened > div.fm-pivot-fields",
                    sections: {
                        fieldListHeader: {
                            selector: "div.fm-popup-header",
                            elements: {
                                fieldsCalculatedValueButton: "div.fm-ui-btns-row button:nth-child(1)",
                                fieldsCancelButton: "div.fm-ui-btns-row button:nth-child(3)"
                            }
                        },
                        fieldListContent: {
                            selector: "div.fm-popup-content",
                            sections: {
                                hierarchiesList: {
                                    selector: "ul.fm-lst-hierarchies",
                                    elements: {
                                        colorField: "li:nth-child(3) > span:nth-child(1)",
                                        colorFieldCaption: "li:nth-child(3) > span:nth-child(2)",
                                        discountField: "li:nth-child(6) > span:nth-child(1)",
                                        discountFieldCaption: "li:nth-child(6) > span:nth-child(2)"
                                    }
                                },
                                rowsList: {
                                    selector: "ul.fm-lst-rows",
                                    elements: {
                                        colorInRows: "li:nth-child(2) > span:nth-child(1)"
                                    }
                                },
                                measuresList: {
                                    selector: "div.fm-list-wrap-measures",
                                    elements: {
                                        discountMeasure: "ul.fm-lst-measures > li:nth-child(2)",
                                        discountMeasureCaption: "ul.fm-lst-measures > li:nth-child(2) > span:nth-child(1)",
                                        formulaMeasure: "ul.fm-lst-measures > li:nth-child(3)",
                                        formulaMeasureCaption: "ul.fm-lst-measures > li:nth-child(3) > span:nth-child(1)"
                                    }
                                }
                            }
                        }
                    }
                },
                calculatedValuesPopup: {
                    selector: "div.fm-calculated-view",
                    elements: {
                        applyCalcValPopupButton: "div.fm-popup-header > div.fm-ui-btns-row > button.fm-ui-btn-dark",
                        formulaTextarea: "div.fm-popup-content > div.fm-formula-wrap > textarea",
                        calcValBTField: "ul.fm-lst-measures > li:nth-child(1)",
                        calculatedValueTitle: "div.fm-popup-header span.fm-popup-title"
                    }
                }
            }
        }
    }
};
