module.exports = {
    url: "/#/customizing-grid",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                description: {
                    selector: "div.first-description-block",
                    elements: {
                        toCustomizingGridLink: "p > a.title-link"
                    }
                },
                toggle: {
                    selector: "#customizationToggle",
                    elements: {
                        checkbox: "input.button-checkbox",
                        checkboxLabel: "label"

                    }
                },
                pivotGrid: {
                    selector: "div#fm-pivot-view",
                    elements: {
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
                                        businessTypeField: "li:nth-child(1) > span:nth-child(1)",
                                        businessTypeFieldCaption: "li:nth-child(1) > span:nth-child(2)",
                                        quantityField: "li:nth-child(8) > span:nth-child(1)",
                                        quantityFieldCaption: "li:nth-child(8) > span:nth-child(2)",
                                    }
                                },
                                rowsList: {
                                    selector: "ul.fm-lst-rows",
                                    elements: {
                                        businessTypeInRows: "li:nth-child(3) > span:nth-child(1)"
                                    }
                                },
                                measuresList: {
                                    selector: "div.fm-list-wrap-measures",
                                    elements: {
                                        quantityMeasure: "ul.fm-lst-measures > li:nth-child(3)",
                                        quantityMeasureCaption: "ul.fm-lst-measures > li:nth-child(3) > span:nth-child(1)",
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
