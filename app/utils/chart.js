// Get context with jQuery - using jQuery's .get() method.
var ctx = document.getElementById("chart").getContext("2d"),
    legendHtml = '<ul><% for (var i=0; i<datasets.length; i++) { %><li style=\"background-color:<%=datasets[i].pointColor%>;\"><% if (datasets[i].label) { %><%= datasets[i].label %><% } %></li><% } %></ul>';

// This will get the first returned node in the jQuery collection.
var data = {
    labels: [
        "Jun 2013",
        "",
        "",
        "DBC starts",
        "",
        "DBC ends",
        "",
        "",
        "Vusay starts",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Jan 2015",
        "",
        "",
        "now"
    ],
    datasets: [
        {
            label: "JavaScript",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [
                0,
                0,
                0,
                2, // dbc starts
                10,
                15, // dbc ends
                17,
                20,
                25, // vusay stars jan
                30, // feb
                40, // march
                47, // april
                50, // may
                53, // june
                55, // july
                56, // august
                57, // september
                58, // october
                59, // november
                60, // december
                61, // january
                62, // feb
                63 // now
            ]
        },
        {
            label: "HTML + CSS",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [
                10,
                10,
                10,
                13, // dbc starts
                14,
                15, // dbc ends
                16,
                18,
                25, // vusay stars jan
                25, // feb
                32, // march
                33, // april
                35, // may
                40, // june
                40, // july
                40, // august
                40, // september
                40, // october
                45, // november
                53, // december
                55, // january
                58, // feb
                60 // now
            ]
        },
        {
            label: "Ruby on Rails",
            fillColor: "rgba(255,0,0,0.2)",
            strokeColor: "rgba(255,0,0,1)",
            pointColor: "rgba(255,0,0,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [
                0,
                0,
                5,
                7, // dbc starts
                30,
                35, // dbc ends
                35,
                33,
                32, // vusay stars jan
                31, // feb
                30, // march
                29, // april
                28, // may
                27, // june
                26, // july
                24, // august
                20, // september
                18, // october
                17, // november
                15, // december
                15, // january
                15, // feb
                15 // now
            ]
        }
    ]
};

// full stack: html + css, js, client side frameworks, node.js, ruby on rails
// client side
// server side
// design + frontend

// git, ruby

// client side frameworks (backbone, ampersand)
// node.js + express
// adobe creative suite
// sketch
// design
// git

// other: drawing, making, ping pong, biking

Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleShowLabels = false;
Chart.defaults.global.showTooltips = false;
var lineChart = new Chart(ctx).Line(data, {
    pointDot: false,
    scaleShowGridLines: false,
    legendTemplate: legendHtml
});

var legend = lineChart.generateLegend();
$('.skills-graph').append(legend);
