module.exports = {
    url: "/#/with-highcharts",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                description: {
                    selector: "div.first-description-block",
                    elements: {
                        toHighchartsIntegrationLink: "p > a.title-link"
                    }
                },
                chart: {
                    selector: "div.chart-container",
                    elements: {
                        highcharts: "div.highcharts-container"
                    }
                },
                pivotGrid: {
                    selector: "div#fm-pivot-view ",
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
                                        destinationField: "li:nth-child(5) > span:nth-child(1)",
                                        destinationFieldCaption: "li:nth-child(5) > span:nth-child(2)",
                                        discountField: "li:nth-child(6) > span:nth-child(1)",
                                        discountFieldCaption: "li:nth-child(6) > span:nth-child(2)",
                                    }
                                },
                                rowsList: {
                                    selector: "ul.fm-lst-rows",
                                    elements: {
                                        destinationInRows: "li:nth-child(4) > span:nth-child(1)"
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
                    selector: "div.fm-calculated-view", elements: {
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
