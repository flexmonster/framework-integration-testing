let testSuit = {

    runTestSuit: function (currentPage) {

        describe("Check the grid", () => {
            it('Refresh page to remove changes on the grid',(client)=>{
                if(currentPage == client.page.customizingGridPage()){
                    //deselect element from FieldList
                }
            })
            it('Refresh page to remove changes on the grid',(client)=>{
                client.refresh();
            })
        });
    }
}

module.exports = {
    commands: [testSuit],
    sections: {

    }
}
