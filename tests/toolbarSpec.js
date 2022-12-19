describe('check Flexmonster Toolbar', () => {
    before((client) => {
        this.homepage = client.page.homepage();
        this.pivotExample = this.homepage.section.mainContainer.section.pivotExample;
        this.toolbar = this.pivotExample.section.toolbar;
        this.leftGroup = this.toolbar.section.leftGroup;
        this.rightGroup = this.toolbar.section.rightGroup;
        this.homepage.navigate();
    });

    it('Check connect', () => {
        this.leftGroup.expect.element('@connectTab').to.be.visible;
        this.leftGroup.click('@connectTab').pause(3000)


    });

    it('Check save tab', () => {
        this.leftGroup.expect.element('@saveTab').to.be.visible;
        this.leftGroup.click('@saveTab')
      //      .pause(2000)
        this.pivotExample.expect.section('@popup').to.be.visible;
        this.pivotExample.section.popup.expect.element("@popupTitle").text.to.be.equal('Confirmation');
        this.pivotExample.section.popup.expect.element("@popupActionButton").text.to.be.equal('SAVE');
        this.pivotExample.section.popup.expect.element("@popupCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.popup.click("@popupCancelButton");
    });

    it('Check share tab', () => {
        this.leftGroup.expect.element('@shareTab').to.be.visible;
        this.leftGroup.click('@shareTab')
            // .pause(2000)
        this.pivotExample.expect.section('@popup').to.be.visible;
        this.pivotExample.section.popup.expect.element("@popupTitle").text.to.be.equal('Confirmation');
        this.pivotExample.section.popup.expect.element("@popupActionButton").text.to.be.equal('COPY');
        this.pivotExample.section.popup.expect.element("@popupCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.popup.click("@popupCancelButton");
    });

    it('Check options tab', () => {
        this.rightGroup.expect.element('@optionsTab').to.be.visible;
        this.rightGroup.click('@optionsTab');
        this.pivotExample.expect.section('@toolbarOptionsPopup').to.be.visible;

        this.pivotExample.section.toolbarOptionsPopup.expect.element("@optionsTitle").text.to.be.equal('Layout options');
        this.pivotExample.section.toolbarOptionsPopup.expect.element("@optionsApplyButton").text.to.be.equal('APPLY');
        this.pivotExample.section.toolbarOptionsPopup.expect.element("@optionsCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.toolbarOptionsPopup.click("@optionsApplyButton");
    });

    it('Check fields tab', () => {
        this.rightGroup.expect.element('@fieldsTab').to.be.visible;
        this.rightGroup.click('@fieldsTab')
            //.pause(5000);
        this.pivotExample.expect.section('@toolbarFieldsPopup').to.be.visible;

        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsTitle").text.to.be.equal('Fields');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsCalculatedValueButton").text.to.be.equal('Add calculated value');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsApplyButton").text.to.be.equal('APPLY');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.toolbarFieldsPopup.click('@fieldsCancelButton')

    });

    after(client => client.end());
});

