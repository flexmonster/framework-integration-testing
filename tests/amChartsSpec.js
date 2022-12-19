xdescribe('testing page With amCharts', () => {
    before((client) => {
        this.amchartsPage = client.page.amchartsPage();
        this.pivotContainer = this.amchartsPage.section.pivotContainer;
        this.amchartsPage.navigate();
    });

    it("Check 'Integration with amCharts' link to docs", (browser) => {
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').text.to.be.equal('Integration with amCharts');
        this.pivotContainer.section.description.expect
            .element('@toAMChartsIntegrationLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/integration-with-amcharts');
    });

    it('Check the amCharts container', (browser) => {

        this.pivotContainer.expect.section('@chart').to.be.visible;
        this.pivotContainer.section.chart.expect.element('@amCharts').to.be.visible;
    });

    after(client => client.end());
});
