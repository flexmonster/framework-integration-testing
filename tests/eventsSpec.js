xdescribe('testing events page', () => {
    before((client) => {
        this.eventsPage = client.page.eventsPage();
        this.pivotContainer = this.eventsPage.section.pivotContainer;
        this.eventsPage.navigate();
    });

    it('Check link to docs', (browser) => {
        this.pivotContainer.section.description
            .expect
            .element('@toFMEventsLink').to.be.visible;
        this.pivotContainer.section.description
            .expect
            .element('@toFMEventsLink').text.to.be.equal('Flexmonster event')
        this.pivotContainer.section.description
            .expect
            .element('@toFMEventsLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/events');
    });


    it('Check toggle(enabled)', (browser) => {

        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        this.pivotContainer.section.toggle.expect.element('@checkboxLabel').text.to.be.equal("Events are tracked");
        browser.assert.cssProperty("#eventsToggle label", "background-color", "rgba(0, 164, 90, 1)");
    });
    it('Check toggle(disable)', (browser) => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        browser
            .waitForElementVisible('#eventsToggle')
            .click('#eventsToggle label');
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.not.be.selected;

        this.pivotContainer.section.toggle.expect.element('@checkboxLabel').text.to.be.equal("Events are not tracked")
        browser.assert.cssProperty("#eventsToggle label", "background-color", "rgba(193, 193, 193, 1)");
    });

    it('Check event outputs', (browser) => {
        this.pivotContainer.expect
            .section('@eventsOutput').to.be.visible;

    });

    xit('Check clear output button', (browser) => {
        this.pivotContainer.section.clearOutput.expect
            .element('@clearOutputButton').to.be.visible;
    });

    after(client => client.end());
});
