module.exports = {
    url: "/",
    sections: {
        navbar: {
            selector: "header > div.container-xl",
            sections: {
                logo: {
                    selector: 'a.logo',
                    elements: {
                        logoImg: 'img',
                    }
                },
                links: {
                    selector: "ul.mainnav",
                    elements: {
                        toVue2IntegrationLink: 'li:nth-child(1) > a',
                        toDocsLink: 'li:nth-child(2) > a',
                        toHelpCenterLink: 'li:nth-child(3) > a',
                        toContactLink: 'li:nth-child(4) > a',
                    }
                }
            }
        },
        mainContainer: {
            selector: "div.wrap",
            sections: {
                sidebar: {
                    selector: "div > div.side-menu",
                    elements: {
                        toFMDemoLink: 'ol:nth-child(1) > li:nth-child(1) > a',
                        toHandlingEventsLink: 'ol:nth-child(3) > li:nth-child(1) > a',
                        toUsingAPICallsLink: 'ol:nth-child(3) > li:nth-child(2) > a',
                        toUpdatingDataLink: 'ol:nth-child(3) > li:nth-child(3) > a',
                        toCustomizingToolbarLink: 'ol:nth-child(5) > li:nth-child(1) > a',
                        toCustomizingGridLink: 'ol:nth-child(5) > li:nth-child(2) > a',
                        toHighchartsLink: 'ol:nth-child(7) > li:nth-child(1) > a',
                        toAmChartsLink: 'ol:nth-child(7) > li:nth-child(2) > a',
                    }
                },
                pivotExample: {
                    selector: "div.pivot-example-container",
                    elements: {
                        mainTitle: "h1.page-title"
                    },
                    sections: {
                        toolbar: {
                            selector: "div#fm-toolbar-wrapper > div.fm-list-wrapper > ul#fm-toolbar",
                            sections: {
                                leftGroup: {
                                    selector:"div.fm-toolbar-group-left",
                                    elements:{
                                        connectTab:"li#fm-tab-connect > a",
                                        connectTabText:"li#fm-tab-connect > a > span",
                                        openTab:"li#fm-tab-open > a",
                                        openTabText:"li#fm-tab-open > a > span",
                                        saveTab:"li#fm-tab-save > a",
                                        saveTabText:"li#fm-tab-save > a > span",
                                        exportTab:"li#fm-tab-export > a",
                                        exportTabText:"li#fm-tab-export > a > span",
                                        shareTab:"li#fm-tab-share > a",
                                        shareTabText:"li#fm-tab-share > a > span",
                                        gridTab:"li#fm-tab-grid > a",
                                        gridTabText:"li#fm-tab-grid > a> span",
                                        chartsTab:"li#fm-tab-charts > a",
                                        chartsTabText:"li#fm-tab-charts > a> span"
                                    }
                                },
                                rightGroup: {
                                    selector: "div.fm-toolbar-group-right",
                                    elements:{
                                        formatTab:"li#fm-tab-format > a",
                                        formatTabText:"li#fm-tab-format > a > span",
                                        optionsTab:"li#fm-tab-options > a",
                                        optionsTabText:"li#fm-tab-options > a > span",
                                        fieldsTab:"li#fm-tab-fields > a",
                                        fieldsTabText:"li#fm-tab-fields > a > span",
                                        fullscreenTab:"li#fm-tab-fullscreen > a",
                                        fullscreenTabText:"li#fm-tab-fullscreen > a > span"
                                    },
                                }
                            }
                        },
                        toolbarOptionsPopup:{
                            selector:"div#fm-toolbar-wrapper > div.fm-popup-options",
                            elements:{
                                optionsTitle:"div#fm-popup-title-text",
                                optionsApplyButton:"button#fm-btn-apply",
                                optionsCancelButton:"button#fm-btn-cancel",
                            }
                        },
                        toolbarFieldsPopup:{
                            selector:"div.fm-fields-opened > div.fm-pivot-fields",
                            elements:{
                                fieldsTitle:"span.fm-popup-title",
                                fieldsCalculatedValueButton:"div.fm-popup-header > div.fm-ui-btns-row button:nth-child(1)",
                                fieldsApplyButton:"div.fm-popup-header > div.fm-ui-btns-row button:nth-child(2)",
                                fieldsCancelButton:"div.fm-popup-header > div.fm-ui-btns-row button:nth-child(3)"
                            }
                        },
                        toolbarNumberFormattingPopup:{
                            selector:"div#fm-toolbar-wrapper > div.fm-popup-format-cells"
                        },
                        toolbarConditionalFormattingPopup:{
                            selector:"div#fm-toolbar-wrapper > div.fm-popup-conditional"
                        },
                        popup:{
                            selector:"div > div > div#fm-pivot-view > div.fm-ui-popup.fm-alert-view",
                            elements:{
                                popupTitle:"div.fm-content > span.fm-popup-title",
                                popupBody:"div.fm-content > span:nth-child(2)",
                                popupActionButton:"div.fm-content > div.fm-ui-btns-row > button:nth-child(1)",
                                popupCancelButton:"div.fm-content > div.fm-ui-btns-row > button:nth-child(2)"
                            }
                        },
                        pivotGrid:{
                            selector:"div#fm-pivot-view",
                            elements:{
                                configuratorButton:"div.fm-fields-view-wrap button"
                            }
                        }
                    }
                }
            }
        }
    }
};
