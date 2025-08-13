module.exports = {
  url: "/using-api-calls",
  sections: {
    pivotContainer: {
      selector: "div.pivot-example-container",
      sections: {
        description: {
          selector: "div.first-description-block",
          elements: {
            linkToAPICalls: "p > a.title-link",
          },
        },
        viewToggle: {
          selector: "#viewToggle",
          elements: {
            viewCheckbox: "input.button-checkbox",
            viewCheckboxLabel: "label",
          },
        },
        modeToggle: {
          selector: "#modeToggle",
          elements: {
            modeCheckbox: "input.button-checkbox",
            modeCheckboxLabel: "label",
          },
        },
        grid: {
          selector: "div#fm-pivot-view div.fm-grid-view",
        },
        configuratorButton: {
          selector: "div#fm-pivot-view div.fm-fields-view-wrap > button",
        },
        chartsFilter: {
          selector: "div#fm-pivot-view div.fm-charts-filter",
          elements: {
            applyFilterButton: "div.fm-popup-header > div.fm-ui-btns-row > button.fm-ui-btn-dark",
            selectAllMembersCheckbox: "div.fm-filters-table-header a.fm-select-all-label",
            memberAustralia: "div.fm-members-filter-list > ul > li:nth-child(1)",
          },
        },
        contextMenu: {
          selector: "div#fm-pivot-view div.fm-context-menu",
          elements: {
            contextMenuAggregation: "ul > li:nth-child(2)",
            contextSubmenuCount: "div.fm-ui-context-submenu > ul > li:nth-child(2)",
            contextSubmenuSum: "div.fm-ui-context-submenu > ul > li:nth-child(1)",
          },
        },
        drillThroughPopup: {
          selector: "div.fm-drillthrough-view",
          elements: {
            drillThroughCloseButton: "button.fm-ui-btn-close",
            drillThroughRowMember: "div.fm-details-container > span:nth-child(1)",
          },
        },
        charts: {
          selector: "div#fm-pivot-view div.fm-charts-view",
          sections: {
            chartMeasures: {
              selector: "div.fm-chart-measures-dropdown",
              elements: {
                measuresDropdownButton: "a.fm-ui-dropdown-btn",
                measuresDropdownList: "div.fm-ui-dropdown-list",
                measureSumOfPrice: "div.fm-ui-dropdown-list ul > li:nth-child(1)",
                measureSumOfSales: "div.fm-ui-dropdown-list ul > li:nth-child(2)",
              },
            },
            chartFilterControl: {
              selector: "div.fm-charts-filters-btn",
              elements: {
                chartFiltersButton: "a",
                chartFiltersDropdown: "div.fm-ui-dropdown-list",
                chartFilterCountry: "div.fm-ui-dropdown-list ul > li:nth-child(1)",
                chartFilterStatus: "div.fm-ui-dropdown-list ul > li:nth-child(2)",
                chartFilterOrderDate: "div.fm-ui-dropdown-list ul > li:nth-child(3)",
              },
            },
            columnChart: {
              selector: "div.fm-chart svg > g",
              elements: {
                countryAustralia: "g.fm-x > g.fm-level",
                chartRowsLabel: "g.fm-x > text",
                yAxisLabel: "g.fm-y > text",
              },
            },
            chartLegend: {
              selector: "div.fm-chart-legend table",
              elements: {
                year2018: "td:nth-child(1) > ul > li.fm-level-0",
                year2018quarter3: "td:nth-child(1) > ul > li:nth-child(2)",
              },
            },
          },
        },
      },
    },
  },
};
