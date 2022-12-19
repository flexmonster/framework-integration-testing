module.exports = {
    url: "/#/with-highcharts",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                description: {
                    selector:"div.first-description-block",
                    elements:{
                        toHighchartsIntegrationLink:"p > a.title-link"
                    }
                },
                chart:{
                    selector:"div.chart-container",
                    elements:{
                        highcharts:"div.highcharts-container",
                    }
                },
            },

        }
    }
};
