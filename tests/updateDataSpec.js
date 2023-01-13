xdescribe('testing Update data page', () => {
    before((client) => {
        this.currentPage = client.page.updateDataPage();
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.currentPage.navigate();
    });

    it('Check link to docs', () => {
        this.pivotContainer.section.description.expect.element('@toUpdateDataLink').to.be.visible;
        this.pivotContainer.section.description
            .expect.element('@toUpdateDataLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/updatedata');
    });
    it('Check update data button', () => {
        this.pivotContainer.expect.element('@updateDataButton').to.be.visible;
        this.pivotContainer.click('@updateDataButton');
        //cannot get to the grid values from UI
    });


    after(client => client.end());
});
