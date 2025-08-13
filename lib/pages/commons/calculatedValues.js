let testSuit = {
  runTestSuit: function () {
    const calculatedValuesPopup = this.section.calculatedValuesPopup;
    const fieldList = this.section.fieldList;
    const alertPopup = this.section.alertPopup;
    const fieldListContent = this.section.fieldList.section.fieldListContent;

    it("Opening the FieldList", () => {
      this.section.grid.expect.element("@configuratorButton").to.be.visible;
      this.section.grid.click("@configuratorButton");
      this.expect.section("@fieldList").to.be.visible;
    });

    it("Changing aggregation", () => {
      fieldListContent.click("@priceMeasureAggregation");
      fieldList.expect.section("@aggregationView").to.be.visible;
      fieldList.section.aggregationView.expect.element("@sumAggregation").text.to.be.equal("Sum");
      fieldList.section.aggregationView.expect.element("@countAggregation").text.to.be.equal("Count");
      fieldList.section.aggregationView.assert.hasClass("@sumAggregation", "fm-selected");
      fieldList.section.aggregationView.assert.hasClass("@countAggregation", "fm-not-selected");
      fieldList.section.aggregationView.click("@countAggregation");
      fieldList.expect.section("@aggregationView").to.not.be.visible;
      fieldListContent.expect.element("@priceMeasureCaption").text.to.be.equal("Count of Price");
    });

    it("Opening calculated value editor from the Field List", () => {
      fieldList.section.fieldListHeader.click("@fieldsCalculatedValueButton");
      this.expect.section("@calculatedValuesPopup").to.be.visible;
      calculatedValuesPopup.expect.element("@closeCalcValPopupButton").text.to.be.equal("CANCEL");
      calculatedValuesPopup.click("@closeCalcValPopupButton");
    });

    it("Opening calculated value editor from the Values", () => {
      fieldListContent.click("@valuesCalculatedValueButton");
      this.expect.section("@calculatedValuesPopup").to.be.visible;
      calculatedValuesPopup.click("@closeCalcValPopupButton");
    });

    it("Adding empty calculated value", () => {
      fieldList.section.fieldListHeader.click("@fieldsCalculatedValueButton");
      this.expect.section("@calculatedValuesPopup").to.be.visible;
      calculatedValuesPopup.click("@applyCalcValPopupButton");
      this.expect.section("@alertPopup").to.be.visible;
      alertPopup.expect.element("@alertMessage").text.to.be.equal("The formula can't be empty.");
      alertPopup.click("@alertOkButton");
      calculatedValuesPopup.click("@closeCalcValPopupButton");
    });

    it("Closing the FieldList", () => {
      fieldList.section.fieldListHeader.click("@fieldsCancelButton");
      this.expect.section("@fieldList").to.not.be.present;
    });
  },
};

module.exports = {
  commands: [testSuit],
  sections: {
    grid: {
      selector: "div#fm-pivot-view",
      elements: {
        configuratorButton: "div.fm-fields-view-wrap button",
      },
    },
    calculatedValuesPopup: {
      selector: "div.fm-calculated-view",
      elements: {
        applyCalcValPopupButton: "div.fm-popup-header > div.fm-ui-btns-row > button.fm-ui-btn-dark",
        closeCalcValPopupButton: "div.fm-popup-header > div.fm-ui-btns-row > button:not(.fm-remove-btn):not(.fm-ui-btn-dark)",
      },
    },
    alertPopup: {
      selector: "div.fm-ui-popup.fm-alert-view",
      elements: {
        alertMessage: "div.fm-content span:nth-child(2)",
        alertOkButton: "div.fm-content button.fm-ui-btn-dark",
      },
    },
    fieldList: {
      selector: "div.fm-fields-opened > div.fm-pivot-fields",
      sections: {
        aggregationView: {
          selector: "div.fm-aggregations-view",
          elements: {
            sumAggregation: "ul > li:nth-child(1)",
            countAggregation: "ul > li:nth-child(2)",
          },
        },
        fieldListHeader: {
          selector: "div.fm-popup-header",
          elements: {
            fieldsCalculatedValueButton: "div.fm-ui-btns-row button.fm-btn-add-measure",
            fieldsCancelButton: "div.fm-ui-btns-row button:not(.fm-btn-add-measure):not(.fm-ui-btn-dark)",
          },
        },
        fieldListContent: {
          selector: "div.fm-popup-content div.fm-list-wrap-measures",
          elements: {
            valuesCalculatedValueButton: "div.fm-list-header > button.fm-icon-act_calc",
            priceMeasureCaption: "ul.fm-lst-measures > li:nth-child(1) > span:nth-child(1)",
            priceMeasureAggregation: "ul.fm-lst-measures > li:nth-child(1) > span:nth-child(2)",
          },
        },
      },
    },
  },
};
