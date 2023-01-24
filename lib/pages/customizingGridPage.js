module.exports = {
    url: "/#/customizing-grid", sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container", sections: {
                description: {
                    selector: "div.first-description-block", elements: {
                        toCustomizingGridLink: "p > a.title-link"
                    }
                }, toggle: {
                    selector: "#customizationToggle", elements: {
                        checkbox: "input.button-checkbox", checkboxLabel: "label"

                    }
                }, pivotGrid: {
                    selector: "div#fm-pivot-view", elements: {
                        configuratorButton: "div.fm-fields-view-wrap > button.fm-btn-open-fields"
                    }, sections: {
                        contextMenu: {
                            selector: "div.fm-context-menu", elements: {
                                contextMenuRow1: "ul > li:nth-child(1) > span",
                                contextMenuRow2: "ul > li:nth-child(2) > span",
                                contextMenuRow3: "ul > li:nth-child(3) > span",
                                contextMenuRow4: "ul > li:nth-child(4) > span",
                                contextMenuRow5: "ul > li:nth-child(5) > span",
                                contextMenuRow6: "ul > li:nth-child(6) > span"
                            }
                        }, headers: {
                            selector: "div.fm-rows-filter", elements: {
                                categoryFilter: "div.fm-level-0"
                            }
                        }, rowMembers: {
                            selector: "div.fm-rows-sheet div.fm-scroll-content", elements: {
                                categoryAccessories: "div:nth-child(1) > div.fm-header-r",
                                sumOfPriceSortingArrow: 'div[data-r="3"][data-c="0"] > i',
                                sumOfPriceLabel: 'div[data-r="3"][data-c="0"]'
                            }
                        }, filterPopup: {
                            selector: 'div.fm-filter-view', elements: {
                                applyFilterButton: "div.fm-popup-header div.fm-ui-btns-row button:nth-child(1)",
                                cancelFilterButton: "div.fm-popup-header div.fm-ui-btns-row button:nth-child(2)",
                                selectAllMembersCheckbox: "div.fm-filters-table a.fm-select-all-label",
                                bikesMemberCheckbox: "div.fm-filters-table ul.fm-ui-list li:nth-child(2) a.fm-ui-checkbox",
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
                                licenseCloseButton:"div.fm-ui-btns-row button"
                            }
                        }
                    }
                },
                numberFormattingPopup: {
                    selector: 'div#fm-toolbar-wrapper div.fm-popup-format-cells',
                    elements: {
                        numberFormattingApplyButton: '#fm-btn-apply',
                        numberFormattingCancelButton: '#fm-btn-cancel',
                        thousandsSeparatorLabel:"div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > label",
                        thousandsSeparatorDropdownButton:"div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div.fm-ui-dropdown > a",
                        thousandsSeparatorComma:"div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div.fm-ui-dropdown ul > li:nth-child(3)",
                        currencySymbolInput: 'div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(5) > input'
                    }
                },
                conditionalFormattingPopup: {
                    selector: 'div#fm-toolbar-wrapper  div.fm-popup-conditional',
                    elements: {
                        conditionalFormattingAddButton: 'div.fm-toolbox button.fm-button-add',
                        conditionalFormattingApplyButton: '#fm-btn-apply',
                        conditionalFormattingCancelButton: '#fm-btn-cancel',
                        conditionalFormattingPlaceholder: 'div.fm-popup-placeholder',
                    },
                    sections: {
                        measuresDropdown: {
                            selector: 'div.fm-condition-row div.fm-values',
                            elements: {
                                measuresDropdownButton: "a",
                                measuresDropdownList: "div.fm-ui-dropdown-list",
                                measuresDropdownListAll: "div.fm-ui-dropdown-list ul > li:nth-child(1)",
                                measuresDropdownListDiscount: "div.fm-ui-dropdown-list ul > li:nth-child(3)",
                            }
                        },
                        conditionsDropdown: {
                            selector: "div.fm-condition-row div.fm-conditions",
                            elements: {
                                conditionsDropdownButton: "a",
                                conditionsDropdownList: "div.fm-ui-dropdown-list",
                                conditionsDropdownListLessThan: "div.fm-ui-dropdown-list ul > li:nth-child(1)",
                                conditionsDropdownListGreaterThan: "div.fm-ui-dropdown-list ul > li:nth-child(3)",
                            }
                        },
                        colorPick: {
                            selector: "div.fm-condition-row",
                            elements: {
                                colorPickButton: "div.fm-colorpick-wrap div.fm-colorpick-btn",
                                colorPickPopup:"div.fm-colorpick-popup",
                                highlightButton:"div.fm-colorpick-popup div.fm-color-targ-switch > button:nth-child(2)",
                                whiteColorButton:"div.fm-colorpick-popup div.fm-row-10colors > div:nth-child(2)",
                                orangeColorButton:"div.fm-colorpick-popup div.fm-row-10colors > div:nth-child(4)",
                                applyColorsButton:"div.fm-colorpick-popup div.fm-cp-btns-row button:nth-child(1)"
                            }
                        }
                    }

                }, fieldList: {
                    selector: "div.fm-fields-opened > div.fm-pivot-fields", sections: {
                        fieldListHeader: {
                            selector: "div.fm-popup-header", elements: {
                                fieldsCalculatedValueButton: "div.fm-ui-btns-row button:nth-child(1)",
                                fieldsCancelButton: "div.fm-ui-btns-row button:nth-child(3)"
                            }
                        }, fieldListContent: {
                            selector: "div.fm-popup-content", sections: {
                                hierarchiesList: {
                                    selector: "ul.fm-lst-hierarchies", elements: {
                                        businessTypeField: "li:nth-child(1) > span:nth-child(1)",
                                        businessTypeFieldCaption: "li:nth-child(1) > span:nth-child(2)",
                                        quantityField: "li:nth-child(8) > span:nth-child(1)",
                                        quantityFieldCaption: "li:nth-child(8) > span:nth-child(2)",
                                    }
                                }, rowsList: {
                                    selector: "ul.fm-lst-rows", elements: {
                                        businessTypeInRows: "li:nth-child(3) > span:nth-child(1)"
                                    }
                                }, measuresList: {
                                    selector: "div.fm-list-wrap-measures", elements: {
                                        quantityMeasure: "ul.fm-lst-measures > li:nth-child(3)",
                                        quantityMeasureCaption: "ul.fm-lst-measures > li:nth-child(3) > span:nth-child(1)",
                                        formulaMeasure: "ul.fm-lst-measures > li:nth-child(3)",
                                        formulaMeasureCaption: "ul.fm-lst-measures > li:nth-child(3) > span:nth-child(1)"
                                    }
                                }
                            }
                        }

                    }
                }, calculatedValuesPopup: {
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
}
;
