let testSuit = {

    runTestSuit: function () {

        const rowHeaders = this.section.headers;
        const rowMembers = this.section.rowMembers;

        describe("Check the grid", () => {

            xit('Check license pop-up CTRL+ALT+I ', (client) => {
                //client.click('div.fm-sheet-canvas:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)');
                this.pivotExample.expect.section("pivotGrid").to.be.visible;
                this.rowMembers.expect.element("@countryJapan").to.be.visible;
                this.rowMembers.click("@countryAustralia");
                client.keys([client.Keys.CONTROL, client.Keys.ALT, "i"]);
                client.pause(5000);
                //try to add --disable-web-security --user-data-dir under the chrome options so you will be able to access chrome://downloads
            });

        });
    }
}

module.exports = {
    commands: [testSuit],
    sections: {
        headers: {
            selector: "div#fm-pivot-view div.fm-sheet-headers"
        },
        rowMembers: {
            selector: "div#fm-pivot-view div.fm-rows-sheet div.fm-scroll-content",
            elements: {
                countryJapan: "div:nth-child(1) > div.fm-level-0",
                countryAustralia: "div:nth-child(2) > div.fm-level-0"
            }
        }
    }
}
