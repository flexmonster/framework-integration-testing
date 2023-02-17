module.exports = {
    url: "/with-highcharts",
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
                    }, sections: {
                        contextMenu: {
                            selector: "div.fm-context-menu", elements: {
                                contextMenuRow1: "ul > li:nth-child(1) > span",
                                contextMenuRow2: "ul > li:nth-child(2) > span",
                                contextMenuRow3: "ul > li:nth-child(3) > span",
                                contextMenuRow4: "ul > li:nth-child(4) > span"
                            }
                        }, headers: {
                            selector: "div.fm-rows-filter", elements: {
                                countryFilter: "div.fm-level-0"
                            }
                        }, rowMembers: {
                            selector: "div.fm-rows-sheet div.fm-scroll-content", elements: {
                                countryAustralia: "div:nth-child(1) > div.fm-header-r",
                                countryAustraliaSortingArrow: "div:nth-child(1) > div.fm-header-r i.fm-sort-icon",
                                countryAustraliaExpandArrow: "div:nth-child(1) > div.fm-header-r i:nth-child(1)",
                                specialityBikeShop: "div:nth-child(2) > div.fm-header-r"
                            }
                        }, filterPopup: {
                            selector: 'div.fm-filter-view', elements: {
                                applyFilterButton: "div.fm-popup-header div.fm-ui-btns-row button:nth-child(1)",
                                cancelFilterButton: "div.fm-popup-header div.fm-ui-btns-row button:nth-child(2)",
                                selectAllMembersCheckbox: "div.fm-filters-table a.fm-select-all-label",
                                australiaMemberCheckbox: "div.fm-filters-table ul.fm-ui-list li:nth-child(1) a.fm-ui-checkbox"
                            }
                        },
                        drillThroughPopup: {
                            selector: "div.fm-drillthrough-view",
                            elements: {
                                drillThroughTitle: "span.fm-popup-title",
                                drillThroughCloseButton: "button.fm-ui-btn-close"
                            }
                        },
                        licensePopup: {
                            selector: "div.fm-alert-view",
                            elements: {
                                licenseText: "div.fm-content span:nth-child(2)",
                                licenseCloseButton: "div.fm-ui-btns-row button"
                            }
                        }
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
                                        discountFieldCaption: "li:nth-child(6) > span:nth-child(2)"
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
                },
                numberFormattingPopup: {
                    selector: 'div#fm-toolbar-wrapper div.fm-popup-format-cells',
                    elements: {
                        numberFormattingApplyButton: '#fm-btn-apply',
                        numberFormattingCancelButton: '#fm-btn-cancel',
                        thousandsSeparatorLabel: "div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > label",
                        thousandsSeparatorDropdownButton: "div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div.fm-ui-dropdown > a",
                        thousandsSeparatorComma: "div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div.fm-ui-dropdown ul > li:nth-child(3)",
                        currencySymbolInput: 'div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(5) > input'
                    }
                },
                conditionalFormattingPopup: {
                    selector: 'div#fm-toolbar-wrapper  div.fm-popup-conditional',
                    elements: {
                        conditionalFormattingApplyButton: '#fm-btn-apply',
                        conditionalFormattingCancelButton: '#fm-btn-cancel',
                        deleteFirstConditionButton: 'div.fm-popup-content > div:nth-child(2) a.fm-cr-delete'
                    }
                }
            }
        }
    }
};
