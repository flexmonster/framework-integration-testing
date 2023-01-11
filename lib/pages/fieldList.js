module.exports = {
    url: "/",
    sections: {
        pivotExample: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                calculatedValuesPopup: {
                    selector: "div.fm-calculated-view",
                    elements:{
                        applyCalcValPopupButton:"div.fm-popup-header > div.fm-ui-btns-row > button:nth-child(2)",
                        closeCalcValPopupButton:"div.fm-popup-header > div.fm-ui-btns-row > button:nth-child(3)",
                        formulaTextarea:"div.fm-popup-content > div.fm-formula-wrap > textarea",
                        calcValCityField:"ul.fm-lst-measures > li:nth-child(1)"
                    }
                },
                alertPopup:{
                  selector:"div.fm-ui-popup.fm-alert-view",
                    elements:{
                      alertMessage:"div.fm-content span:nth-child(2)",
                        alertOkButton:"div.fm-content button.fm-ui-btn-dark"
                    }
                },
                FieldList: {
                    selector: "div.fm-fields-opened > div.fm-pivot-fields",
                    sections: {
                        FieldListHeader: {
                            selector: "div.fm-popup-header",
                            elements: {
                                fieldsCalculatedValueButton: "div.fm-ui-btns-row button:nth-child(1)",
                                fieldsApplyButton: "div.fm-ui-btns-row button:nth-child(2)",
                                fieldsCancelButton: "div.fm-ui-btns-row button:nth-child(3)"
                            }
                        },
                        FieldListContent: {
                            selector: "div.fm-popup-content",
                            sections: {
                                hierarchiesList: {
                                    selector: "ul.fm-lst-hierarchies",
                                    elements: {
                                        locationField: "li:nth-child(2) > span:nth-child(1)",
                                        locationFieldCaption: "li:nth-child(2) > span:nth-child(2)",
                                        cityFieldCaption: "li:nth-child(3) > span:nth-child(2)",
                                        countryFieldCaption: "li:nth-child(4) > span:nth-child(2)",
                                        phoneField: "li:nth-child(7) > span:nth-child(1)",
                                        phoneFieldCaption: "li:nth-child(7) > span:nth-child(2)",
                                        quantityField: "li:nth-child(10) > span:nth-child(1)",
                                        quantityFieldCaption: "li:nth-child(10) > span:nth-child(2)",
                                    }
                                },
                                rowsList: {
                                    selector: "ul.fm-lst-rows",
                                    elements: {
                                        phoneInRows: "li:nth-child(3) > span:nth-child(1)"
                                    }
                                },
                                measuresList: {
                                    selector: "div.fm-list-wrap-measures",
                                    elements: {
                                        valuesCalculatedValueButton:"div.fm-list-header > button.fm-icon-act_calc",
                                        priceMeasureCaption: "ul.fm-lst-measures > li:nth-child(1) > span:nth-child(1)",
                                        priceMeasureAggregation: "ul.fm-lst-measures > li:nth-child(1) > span:nth-child(2)",
                                        quantityMeasure: "ul.fm-lst-measures > li:nth-child(3) > span:nth-child(1)"
                                    }
                                }
                            }
                        }

                    }
                },
                pivotGrid: {
                    selector: "div#fm-pivot-view",
                    elements: {
                        configuratorButton: "div.fm-fields-view-wrap button",
                        phoneHierarchy:"div.fm-grid-view > div.fm-compact-view > div.fm-rows-filter > div:nth-child(4) > div"
                    }
                }
            }
        }
    }

};
