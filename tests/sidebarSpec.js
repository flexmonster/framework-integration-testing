xdescribe('Testing sidebar', () => {

    before((client) => {
        this.homepage = client.page.homepage();
        this.sidebar = this.homepage.section.mainContainer.section.sidebar;
        this.homepage.navigate();
    });

    it("Check 'Pivot Table Demo' sidebar link", () => {
        this.sidebar.expect.element('@toFMDemoLink').to.have.attribute('href').which.contains('/pivot-table-demo');
        this.sidebar.expect.element('@toFMDemoLink').text.to.be.equal('PIVOT TABLE DEMO');

    });

    it("Check 'Handling events' sidebar link", () => {
        this.sidebar.expect.element('@toHandlingEventsLink')
            .to.have.attribute('href').which.contains('/handling-events');
        this.sidebar.expect.element('@toHandlingEventsLink').text.to.be.equal('HANDLING EVENTS');
        this.sidebar.click('@toHandlingEventsLink');
        //TODO check if the page changes on the click
    });

    it("Check 'Using API calls' sidebar link", () => {
        this.sidebar.expect.element('@toUsingAPICallsLink')
            .to.have.attribute('href').which.contains('/using-api-calls');
        this.sidebar.expect.element('@toUsingAPICallsLink').text.to.be.equal('USING API CALLS');
        this.sidebar.click('@toUsingAPICallsLink');
        //TODO check if the page changes on the click
    });

    it("Check 'Updating data' sidebar link", () => {
        this.sidebar.expect.element('@toUpdatingDataLink')
            .to.have.attribute('href').which.contains('/updating-data');
        this.sidebar.expect.element('@toUpdatingDataLink').text.to.be.equal('UPDATING DATA');
        this.sidebar.click('@toUpdatingDataLink');
        //TODO check if the page changes on the click

    });

    it("Check 'Customizing the Toolbar' sidebar link", () => {
        this.sidebar.expect.element('@toCustomizingToolbarLink')
            .to.have.attribute('href').which.contains('/customizing-toolbar');
        this.sidebar.expect.element('@toCustomizingToolbarLink').text.to.be.equal('CUSTOMIZING THE TOOLBAR');
        this.sidebar.click('@toCustomizingToolbarLink');
        //TODO check if the page changes on the click
    });

    it("Check 'Customizing the grid' sidebar link", () => {
        this.sidebar.expect.element('@toCustomizingGridLink')
            .to.have.attribute('href').which.contains('/customizing-grid');
        this.sidebar.expect.element('@toCustomizingGridLink').text.to.be.equal('CUSTOMIZING THE GRID');
        this.sidebar.click('@toCustomizingGridLink');
        //TODO check if the page changes on the click
    });

    it("Check 'With Highcharts' sidebar link", () => {
        this.sidebar.expect.element('@toHighchartsLink')
            .to.have.attribute('href').which.contains('/with-highcharts');
        this.sidebar.expect.element('@toHighchartsLink').text.to.be.equal('WITH HIGHCHARTS');
        this.sidebar.click('@toHighchartsLink');
        //TODO check if the page changes on the click
    });

    it("Check 'With amCharts' sidebar link", () => {
        this.sidebar.expect.element('@toAmChartsLink')
            .to.have.attribute('href').which.contains('/with-amcharts');
        this.sidebar.expect.element('@toAmChartsLink').text.to.be.equal('WITH AMCHARTS');
        this.sidebar.click('@toAmChartsLink');
        //TODO check if the page changes on the click
    });

    after(client => client.end());
});
