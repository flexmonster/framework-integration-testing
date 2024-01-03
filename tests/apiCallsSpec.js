describe('testing using API calls page', () => {

    before((client) => {
        this.currentPage = client.page.apiCallsPage();
        client.window.maximize()
        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.fieldList = client.page.commons.fieldList();
        this.pivotGrid = client.page.commons.pivotGrid();

        //selectors
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.charts = this.pivotContainer.section.charts;
        this.chartsFilter = this.pivotContainer.section.chartsFilter;
        this.chartMeasures = this.charts.section.chartMeasures;
        this.contextMenu = this.pivotContainer.section.contextMenu;
        this.drillThroughPopup = this.pivotContainer.section.drillThroughPopup;

        this.currentPage.navigate();
    });

    it("Checks common sections", () => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.pivotGrid.runTestSuit();
        this.toolbar.runTestSuit(); //configurator button hidden when read-only
        this.fieldList.runTestSuit();
    });

    it('Check Using API calls link to docs', () => {
        this.pivotContainer.section.description.expect
            .element('@linkToAPICalls').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@linkToAPICalls').text.to.be.equal('API calls');
        this.pivotContainer.section.description.expect
            .element('@linkToAPICalls').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/methods');
    });

    it('Check Using API calls view toggle(column chart)', () => {
        this.pivotContainer.section.viewToggle
            .expect.element('@viewCheckbox').to.be.selected;
        this.pivotContainer.section.viewToggle.click('@viewCheckboxLabel');
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckbox').to.not.be.selected;
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckboxLabel').text.to.be.equal("Column chart")
        this.pivotContainer.section.viewToggle
            .assert.cssProperty("@viewCheckboxLabel", "background-color", "rgba(223, 56, 0, 1)");
        this.pivotContainer.expect.section('@grid').to.not.be.visible;
        this.pivotContainer.expect.section('@charts').to.be.visible;
    });


    it('Check Using API calls view toggle(grid)', () => {
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckbox').to.not.be.selected;
        this.pivotContainer.section.viewToggle.click('@viewCheckboxLabel');
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckbox').to.be.selected;
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckboxLabel').text.to.be.equal("Grid");
        this.pivotContainer.section.viewToggle
            .assert.cssProperty("@viewCheckboxLabel", "background-color", "rgba(0, 164, 90, 1)");
        this.pivotContainer.expect.section('@grid').to.be.visible;
    });

    it('Check Using API calls mode toggle(read-only)', (client) => {
        this.pivotContainer.section.modeToggle.expect.element('@modeCheckbox').to.be.selected;
        this.pivotContainer.section.modeToggle.click('@modeCheckboxLabel');
        this.pivotContainer.section.modeToggle.expect
            .element('@modeCheckbox').to.not.be.selected;
        this.pivotContainer.section.modeToggle.expect
            .element('@modeCheckboxLabel').text.to.be.equal("Read-only");
        this.pivotContainer.section.modeToggle
            .assert.cssProperty("@modeCheckboxLabel", "background-color", "rgba(223, 56, 0, 1)");
        this.pivotContainer.expect.section('@configuratorButton').to.not.be.visible;
    });

    it('Check Using API calls mode toggle(interactive)', (client) => {
        this.pivotContainer.section.modeToggle.expect.element('@modeCheckbox').to.not.be.selected;
        this.pivotContainer.section.modeToggle.click('@modeCheckboxLabel');
        this.pivotContainer.section.modeToggle.expect
            .element('@modeCheckbox').to.be.selected;
        this.pivotContainer.section.modeToggle.expect
            .element('@modeCheckboxLabel').text.to.be.equal("Interactive");
        this.pivotContainer.section.modeToggle.
        assert.cssProperty('@modeCheckboxLabel', "background-color", "rgba(0, 164, 90, 1)");
        this.pivotContainer.expect.section('@configuratorButton').to.be.visible;
    });

    it("Switch to column chart", () => {
        this.pivotContainer.section.viewToggle.click('@viewCheckboxLabel');
        this.pivotContainer.expect.section('@charts').to.be.visible;
    })

    it("Check measures drop-down", () => {
        this.pivotContainer.expect.section('@charts').to.be.visible;
        this.chartMeasures.expect.element('@measuresDropdownButton').text.to.be.equal("Sum of Price");
        this.chartMeasures.click('@measuresDropdownButton');
        this.chartMeasures.waitForElementVisible('@measuresDropdownList');
        this.chartMeasures.expect.element('@measureSumOfPrice').text.to.be.equal("Sum of Price");
        this.chartMeasures.assert.hasClass('@measureSumOfPrice', 'fm-selected');
        this.chartMeasures.expect.element('@measureSumOfSales').text.to.be.equal("Sum of Sales");
        this.chartMeasures.assert.hasClass('@measureSumOfSales', 'fm-not-selected');
        this.chartMeasures.click('@measureSumOfSales');
        this.chartMeasures.waitForElementNotVisible('@measuresDropdownList');
        this.chartMeasures.expect.element('@measuresDropdownButton').text.to.be.equal("Sum of Sales");
    })

    it("Check filters drop-down", () => {
        this.pivotContainer.expect.section('@charts').to.be.visible;
        this.charts.section.chartFilterControl.expect.element('@chartFiltersButton').to.be.visible;
        this.charts.section.chartFilterControl.click('@chartFiltersButton');
        this.charts.section.chartFilterControl.expect.element('@chartFiltersDropdown').to.be.visible;
        this.charts.section.chartFilterControl.expect.element('@chartFilterCountry').text.to.be.equal('Country');
        this.charts.section.chartFilterControl.expect.element('@chartFilterStatus').text.to.be.equal('Status');
        this.charts.section.chartFilterControl.expect.element('@chartFilterOrderDate').text.to.be.equal('Order Date');
        this.charts.section.chartFilterControl.click('@chartFiltersButton');
    })

    it("Check charts filter popup", () => {
        this.pivotContainer.expect.section('@charts').to.be.visible;
        this.charts.section.chartFilterControl.click('@chartFiltersButton');
        this.charts.section.chartFilterControl.expect.element('@chartFiltersDropdown').to.be.visible;
        this.charts.section.chartFilterControl.click('@chartFilterCountry');
        this.pivotContainer.expect.section('@chartsFilter').to.be.visible;
        this.chartsFilter.expect.element('@selectAllMembersCheckbox').to.be.visible;
        this.chartsFilter.click('@selectAllMembersCheckbox');
        this.chartsFilter.assert.hasClass('@selectAllMembersCheckbox', 'fm-selected');
        this.chartsFilter.click('@selectAllMembersCheckbox');
        this.chartsFilter.assert.not.hasClass('@selectAllMembersCheckbox', 'fm-selected');
        this.chartsFilter.click('@memberAustralia');
        this.chartsFilter.click('@applyFilterButton');
        this.pivotContainer.expect.section('@chartsFilter').to.not.be.visible;
    })

    it("Drill-up chart rows", (client) => {
        this.pivotContainer.expect.section('@charts').to.be.visible;
        this.charts.section.columnChart.expect.element('@countryAustralia').to.be.visible;
        this.charts.section.columnChart.expect.element('@countryAustralia').text.to.contain("- Australia");
        this.charts.section.columnChart.expect.element('@chartRowsLabel').to.be.visible;
        this.charts.section.columnChart.expect.element('@chartRowsLabel').text.to.be.equal('Country / Status');
        client.expect.element('svg > g > g:nth-child(4) rect.fm-bar:nth-child(3)').to.be.visible;
        this.charts.section.columnChart.click('@countryAustralia');
        client.expect.element('svg > g > g:nth-child(4) rect.fm-bar:nth-child(3)').to.not.be.present;
    })

    it("Drill-down chart legend", (client) => {
        this.pivotContainer.expect.section('@charts').to.be.visible;
        this.charts.expect.section('@chartLegend').to.be.visible;
        client.assert.cssProperty('rect.fm-bar:nth-child(4)', 'fill', 'rgb(110, 157, 196)');
        this.charts.section.chartLegend.expect.element('@year2018').text.to.be.equal('2018');
        this.charts.section.chartLegend.expect.element('@year2018quarter3').text.to.be.equal('Quarter 3');
        this.charts.section.chartLegend.click('@year2018quarter3');
        client.assert.cssProperty('rect.fm-bar:nth-child(4)', 'fill', 'rgb(230, 162, 165)');
    })

    it("Change chart aggregation", (client) => {
        this.pivotContainer.expect.section('@charts').to.be.visible;
        this.charts.expect.section('@chartLegend').to.be.visible;
        client.waitForElementVisible('css selector', 'div.fm-chart svg');
        this.charts.section.columnChart.expect.element('g.fm-y > text').text.to.be.equal("Sum of Sales");
        this.charts.section.columnChart.expect.element('rect.fm-bar:nth-child(1)').text.to.contain('Sum of Sales');
        this.charts.section.columnChart.rightClick('css selector', 'rect.fm-bar:nth-child(1)');
        this.pivotContainer.expect.section('@contextMenu').to.be.visible;
        this.contextMenu.expect.element("@contextMenuAggregation").text.to.be.equal("Aggregation");
        this.contextMenu.click("@contextMenuAggregation");
        this.contextMenu.expect.element("@contextSubmenuCount").to.be.visible;
        this.contextMenu.expect.element("@contextSubmenuCount").text.to.be.equal("Count");
        this.contextMenu.assert.hasClass("@contextSubmenuCount", 'fm-not-selected');
        this.contextMenu.expect.element("@contextSubmenuSum").text.to.be.equal("Sum");
        this.contextMenu.assert.hasClass("@contextSubmenuSum", 'fm-selected');
        this.contextMenu.click("@contextSubmenuCount");
        this.pivotContainer.expect.section('@contextMenu').to.not.be.visible;
        this.charts.section.columnChart.expect.element('g.fm-y > text').text.to.be.equal("Count of Sales");
        this.charts.section.columnChart.expect.element('rect.fm-bar:nth-child(1)').text.to.contain('Count of Sales');
    })

    it("Drill through chart", (client) => {
        this.charts.section.columnChart.doubleClick('rect.fm-bar:nth-child(1)');
        this.pivotContainer.expect.section('@drillThroughPopup').to.be.visible;
        this.drillThroughPopup.expect.element('@drillThroughRowMember').text.to.contain("Australia");
        this.drillThroughPopup.click('@drillThroughCloseButton');
        this.pivotContainer.expect.section('@drillThroughPopup').to.not.be.visible;
    });

    it("Return to initial page state", (client) => {
        client.refresh();
    });

    after(client => client.end());
});
