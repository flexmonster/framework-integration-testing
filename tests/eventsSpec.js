describe('testing events page', () => {

    before((client) => {
        //client.resizeWindow(1700, 1200);
        client.windowMaximize();
        this.currentPage = client.page.eventsPage();
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.currentPage.navigate();

        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.fieldList = client.page.commons.fieldList();
        this.calculatedValuesPopup = client.page.commons.calculatedValues();
        this.pivotGrid = client.page.commons.pivotGrid();
    });

    it("Checks common sections", () => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
      //  this.toolbar.runTestSuit();
      //  this.fieldList.runTestSuit();
      //  this.calculatedValuesPopup.runTestSuit();
        this.pivotGrid.runTestSuit();
    });

    it('Check link to docs', (browser) => {
        this.pivotContainer.section.description
            .expect.element('@toFMEventsLink').to.be.visible;
        this.pivotContainer.section.description
            .expect.element('@toFMEventsLink').text.to.be.equal('Flexmonster event')
        this.pivotContainer.section.description
            .expect.element('@toFMEventsLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/events');
    });


    it('Check toggle(enabled)', (client) => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        this.pivotContainer.section.toggle.expect.element('@checkboxLabel').text.to.be.equal("Events are tracked");
        client.assert.cssProperty("#eventsToggle label", "background-color", "rgba(0, 164, 90, 1)");
    });

    it('Check toggle(disable)', (client) => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        client
            .waitForElementVisible('#eventsToggle')
            .click('#eventsToggle label');
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.not.be.selected;
        this.pivotContainer.section.toggle.expect.element('@checkboxLabel').text.to.be.equal("Events are not tracked")
        client.assert.cssProperty("#eventsToggle label", "background-color", "rgba(193, 193, 193, 1)");
        client
            .waitForElementVisible('#eventsToggle')
            .click('#eventsToggle label');
    });

    it('Check events output', (client) => {
        client.execute(function () {
            window.scrollTo({top: 600});
        })
        this.pivotContainer
            .expect.section('@eventsOutput').to.be.visible;
        this.pivotContainer.section.eventsOutput
            .expect.element('@firstLine').to.be.visible;
        this.pivotContainer.section.clearOutput
            .expect.element('@clearOutputButton').to.be.visible;
        //this.pivotContainer.section.clearOutput.click('@clearOutputButton');
        //this.pivotContainer.section.eventsOutput.expect.element('@firstLine').to.not.be.present;
    });


    after(client => client.end());
});
