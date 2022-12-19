xdescribe('testing Update data page', () => {
    before((client) => {
        this.updateDataPage = client.page.updateDataPage();
        this.pivotContainer = this.updateDataPage.section.pivotContainer;
        this.updateDataPage.navigate();
    });

    it('Check link to docs', (browser) => {
        this.pivotContainer.section.description
            .expect
            .element('@toUpdateDataLink').to.be.visible;
        this.pivotContainer.section.description
            .expect
            .element('@toUpdateDataLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/updatedata');
    });
    it('Check update data button', (browser) => {
        //browser.useXpath().click("//*[contains(text(),'Update data')]")
        this.pivotContainer.expect.element('@updateDataButton').to.be.visible;
        this.pivotContainer.click('@updateDataButton').pause(4000)

    });


    after(client => client.end());
});
