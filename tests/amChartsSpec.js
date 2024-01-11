describe('testing page With amCharts', () => {
    const gridVisibilityTimeout = 10000;

    before((client) => {
        this.currentPage = client.page.amchartsPage();
        this.currentPage.navigate();
        client.window.maximize()
        
        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.fieldList = client.page.commons.fieldList();

        //selectors
        this.pivotGrid = client.page.commons.pivotGrid();
        this.pivotContainer = this.currentPage.section.pivotContainer;



        browser.waitUntil(async () => {
            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, gridVisibilityTimeout / 2);
            });
            return result;
        }, gridVisibilityTimeout);
    });

    it("Checks common / navbar", () => {
        this.navbar.runTestSuit();
    });

    it("Checks common / sidebar", () => {
        this.sidebar.runTestSuit();
    });

    it("Checks common / toolbar", () => {
        this.toolbar.runTestSuit();
    });

    it("Checks common / fieldList", () => {
        this.fieldList.runTestSuit();
    });

    it("Checks common / pivotGrid", () => {
        this.pivotGrid.runTestSuit();
    });

    it("Check 'Integration with amCharts' link to docs", (client) => {
        this.pivotContainer.expect.section('@description').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').text.to.be.equal('Integration with amCharts');
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/integration-with-amcharts');
    });

    it('Check the amCharts container', () => {
        this.pivotContainer.expect.section('@chart').to.be.visible;
        this.pivotContainer.section.chart.expect.element('@amCharts').to.be.visible;
    });

    after(client => client.end());
});
