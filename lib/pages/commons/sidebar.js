let testSuit = {

    runTestSuit: function () {

        const sidebar = this.section.sidebar;


            it("Check 'Pivot Table Demo' sidebar link", () => {
                sidebar.expect.element('@toFMDemoLink').to.have.attribute('href').which.contains('/pivot-table-demo');
                sidebar.expect.element('@toFMDemoLink').text.to.be.equal('PIVOT TABLE DEMO');
            });

            it("Check 'Handling events' sidebar link", () => {
                sidebar.expect.element('@toHandlingEventsLink')
                    .to.have.attribute('href').which.contains('/handling-events');
                sidebar.expect.element('@toHandlingEventsLink').text.to.be.equal('HANDLING EVENTS');
            //    sidebar.click('@toHandlingEventsLink');
            });

            it("Check 'Using API calls' sidebar link", () => {
                sidebar.expect.element('@toUsingAPICallsLink')
                    .to.have.attribute('href').which.contains('/using-api-calls');
                sidebar.expect.element('@toUsingAPICallsLink').text.to.be.equal('USING API CALLS');
            //    sidebar.click('@toUsingAPICallsLink');
            });

            it("Check 'Updating data' sidebar link", () => {
                sidebar.expect.element('@toUpdatingDataLink')
                    .to.have.attribute('href').which.contains('/updating-data');
                sidebar.expect.element('@toUpdatingDataLink').text.to.be.equal('UPDATING DATA');
            //    sidebar.click('@toUpdatingDataLink');
            });

            it("Check 'Customizing the Toolbar' sidebar link", () => {
                sidebar.expect.element('@toCustomizingToolbarLink')
                    .to.have.attribute('href').which.contains('/customizing-toolbar');
                sidebar.expect.element('@toCustomizingToolbarLink').text.to.be.equal('CUSTOMIZING THE TOOLBAR');
            //    sidebar.click('@toCustomizingToolbarLink');
            });

            it("Check 'Customizing the grid' sidebar link", () => {
                sidebar.expect.element('@toCustomizingGridLink')
                    .to.have.attribute('href').which.contains('/customizing-grid');
                sidebar.expect.element('@toCustomizingGridLink').text.to.be.equal('CUSTOMIZING THE GRID');
            //    sidebar.click('@toCustomizingGridLink');
            });

            it("Check 'With Highcharts' sidebar link", () => {
                sidebar.expect.element('@toHighchartsLink')
                    .to.have.attribute('href').which.contains('/with-highcharts');
                sidebar.expect.element('@toHighchartsLink').text.to.be.equal('WITH HIGHCHARTS');
             //   sidebar.click('@toHighchartsLink');
            });

            it("Check 'With amCharts' sidebar link", (client) => {
                sidebar.expect.element('@toAmChartsLink')
                    .to.have.attribute('href').which.contains('/with-amcharts');
                sidebar.expect.element('@toAmChartsLink').text.to.be.equal('WITH AMCHARTS');
            //    sidebar.click('@toAmChartsLink');
            });
    }
}

module.exports = {
    commands: [testSuit],
    sections: {
        sidebar: {
            selector: 'div.side-menu',
            elements: {
                toFMDemoLink: 'ol:nth-child(1) > li:nth-child(1) > a',
                toHandlingEventsLink: 'ol:nth-child(3) > li:nth-child(1) > a',
                toUsingAPICallsLink: 'ol:nth-child(3) > li:nth-child(2) > a',
                toUpdatingDataLink: 'ol:nth-child(3) > li:nth-child(3) > a',
                toCustomizingToolbarLink: 'ol:nth-child(5) > li:nth-child(1) > a',
                toCustomizingGridLink: 'ol:nth-child(5) > li:nth-child(2) > a',
                toHighchartsLink: 'ol:nth-child(7) > li:nth-child(1) > a',
                toAmChartsLink: 'ol:nth-child(7) > li:nth-child(2) > a'
            }
        }
    }
}
