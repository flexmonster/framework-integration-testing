describe('testing page With amCharts', () => {

    before((client) => {
        this.currentPage = client.page.amchartsPage();
        client.windowMaximize()
        //client.resizeWindow(1700, 1200);
        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.fieldList = client.page.commons.fieldList();

        //selectors
        this.pivotGrid = client.page.commons.pivotGrid();
        this.pivotContainer = this.currentPage.section.pivotContainer;

        this.currentPage.navigate();
    });

    it("Checks common sections", () => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.pivotGrid.runTestSuit();
        this.toolbar.runTestSuit();
        this.fieldList.runTestSuit();
    });

    xit("Check 'Integration with amCharts' link to docs", (client) => {
        client.execute(function () {
                 window.scrollTo({top: 300});
             }, []);
        this.pivotContainer.expect.section('@description').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').text.to.be.equal('Integration with amCharts');
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/integration-with-amcharts');
    });

    xit('Check the amCharts container', () => {
        this.pivotContainer.expect.section('@chart').to.be.visible;
        this.pivotContainer.section.chart.expect.element('@amCharts').to.be.visible;
    });

    after(client => client.end());
});
