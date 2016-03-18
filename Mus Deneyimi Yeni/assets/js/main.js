$(document).ready(function () {


    window.JR = {}

    JR.chartOne = function () {

        var data = {
            labels: ["2011", "2012", "2013", "2014", "2023"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(41,42,100,1)",
                    highlightFill: "rgba(76,149,194,1)",
                    data: [37, 44, 52, 64, 82]
                }
            ]
        };

        var ctx1 = document.getElementById("mychart1").getContext("2d");
        var myBarChart1 = new Chart(ctx1).Bar(data, {
            scaleOverride: true,
            scaleSteps: 4,
            scaleStepWidth: 25,
            scaleStartValue: 0,
            scaleLabel: "<%='%'+value%>",
            tooltipTemplate: "<%if (label){%><%}%><%= '%'+value %>",
        });


        var data2 = {
            labels: ["ALITALIA","ETIHAD AIRWAYS","THAI AIRWAYS","DELTA AIRLINES","UNITED AIRLINES","KLM","SWISS AIR","SINGAPORE AIRLINES","QATAR AIRWAYS","LUFTHANSA", "TURKISH AIRLINES", "AIR FRANCE", "BRITISH AIRWAYS", "EMIRATES"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(233,126,69,1)",
                    highlightFill: "rgba(213,37,56,1)",
                    data: [39, 39, 39, 41, 47, 48, 48, 50, 60, 63, 64, 68, 70, 73]
                }
            ]
        };

        var ctx2 = document.getElementById("mychart2").getContext("2d");
        var myBarChart2 = new Chart(ctx2).HorizontalBar(data2, {
            scaleOverride: true,
            scaleSteps: 4,
            scaleStepWidth: 25,
            scaleStartValue: 0,
            scaleLabel: "<%='%'+value%>",
            tooltipTemplate: "<%if (label){%><%}%><%=value %>",
        });


    }


    JR.chartTwo = function () {


        var data3 = {
            labels: ["2015", "Ocak 2015", "Şubat 2015", "Mart 2015", "Nisan 2015"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(41,42,100,1)",
                    highlightFill: "rgba(41,42,100,0.5)",
                    data: [62.2, 58.8, 63.7, 62.4, 63.9]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(233,126,69,1)",
                    highlightFill: "rgba(233,126,69,0.5)",
                    data: [81.8, 81.2, 85.2, 80.4, 80.3]
                },
                {
                    label: "My Thirth dataset",
                    fillColor: "rgba(213,37,56,1)",
                    highlightFill: "rgba(213,37,56,0.5)",
                    data: [44.3, 38.6, 44.0, 45.9, 48.6]
                }
            ]
        };

        var ctx3 = document.getElementById("mychart3").getContext("2d");
        var myBarChart3 = new Chart(ctx3).Bar(data3, {
            scaleOverride: true,
            scaleSteps: 4,
            scaleStepWidth: 25,
            scaleStartValue: 0,
            scaleLabel: "<%='%'+value%>",
            tooltipTemplate: "<%if (label){%><%}%><%= '%'+value %>",
        });


    }


    JR.chartThree = function () {


        var data4 = {
            labels: ["SQ", "NZ", "CA", "TP", "BR", "SK", "A3", "OU", "OS", "LX", "LH", "ZH", "AC", "TK", "LO", "OZ", "TG", "SN", "AV", "MS", "JP", "UA", "NH", "CM", "SA", "ET", "AI"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(41,42,100,1)",
                    highlightFill: "rgba(76,149,194,1)",
                    data: [79.68, 79.47, 79.41, 78.57, 78.47, 77.89, 77.29, 77.16, 76.79, 76.62, 76.38, 76.34, 75.75, 73.43, 73.18, 72.99, 72.78, 72.43, 71.74, 71.63, 71.40, 71.09, 70.18, 70.08, 66.90, 65.19, 64.56]
                }
            ]
        };

        var ctx4 = document.getElementById("mychart4").getContext("2d");
        var myBarChart4 = new Chart(ctx4).Bar(data4, {
            scaleOverride: true,
            scaleSteps: 4,
            scaleStepWidth: 25,
            scaleStartValue: 0,
            scaleLabel: "<%='%'+value%>",
            tooltipTemplate: "<%if (label){%><%}%><%= '%'+value %>"
        });

        myBarChart4.datasets[0].bars[13].fillColor = "rgba(213,37,57,1)";
        myBarChart4.update();


    }


    JR.chartFour = function () {


        var data5 = {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(41,42,100,1)",
                    highlightFill: "rgba(76,149,194,1)",
                    data: [466, 304, 689, 809, 2094, 813, 2379, 1895]
                }
            ]
        };

        var ctx5 = document.getElementById("mychart5").getContext("2d");
        var myBarChart5 = new Chart(ctx5).Bar(data5, {
            scaleOverride: true,
            scaleSteps: 4,
            scaleStepWidth: 750,
            scaleStartValue: 0,
            scaleLabel: "<%=value%>",
            tooltipTemplate: "<%if (label){%><%}%><%=value %>"
        });


        var data6 = {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(41,173,98,1)",
                    highlightFill: "rgba(124,224,167,1)",
                    data: [33, 39, 36, 40, 58, 28, 19, 226]
                }
            ]
        };

        var ctx6 = document.getElementById("mychart6").getContext("2d");
        var myBarChart6 = new Chart(ctx6).Bar(data6, {
            scaleOverride: true,
            scaleSteps: 4,
            scaleStepWidth: 75,
            scaleStartValue: 0,
            scaleLabel: "<%=value%>",
            tooltipTemplate: "<%if (label){%><%}%><%=value %>"
        });


        var data7 = {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(233,126,69,1)",
                    highlightFill: "rgba(213,37,56,1)",
                    data: [56, 83, 94, 93, 127, 90, 111, 148]
                }
            ]
        };

        var ctx7 = document.getElementById("mychart7").getContext("2d");
        var myBarChart7 = new Chart(ctx7).Bar(data7, {
            scaleOverride: true,
            scaleSteps: 4,
            scaleStepWidth: 37.5,
            scaleStartValue: 0,
            scaleLabel: "<%=value%>",
            tooltipTemplate: "<%if (label){%><%}%><%=value %>"
        });

        var data8 = [
            {
                value: 71.13,
                color:"#29ad62",
                highlight: "#e97e45",
                label: "Red"
            },
            {
                value: 5.56,
                color: "#4d95c3",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 8.48,
                color: "#ea7f45",
                highlight: "#FFC870",
                label: "Yellow"
            },
            {
                value: 8.45,
                color: "#d52539",
                highlight: "#FFC870",
                label: "Yellow"
            },
            {
                value: 6.38,
                color: "#5f3d83",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ]

        var ctx8 = document.getElementById("mychart8").getContext("2d");
        var myBarChart8 = new Chart(ctx8).Doughnut(data8);
        //var myBarChart8 = new Chart(ctx8).Bar(data8, {
        //    scaleOverride: true,
        //    scaleSteps: 4,
        //    scaleStepWidth: 37.5,
        //    scaleStartValue: 0,
        //    scaleLabel: "<%=value%>",
        //    tooltipTemplate: "<%if (label){%><%}%><%=value %>"
        //});


    }


    $(".js-points a").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var targetChartTab =  $this.attr("href");
        $(".chart").hide();
        $(targetChartTab).show();
        $(".js-points a").removeClass("active");
        $this.addClass("active");
    });


    $("#tab1").on("click", function () {
        JR.chartOne();
    });

    $("#tab2").on("click", function () {
        JR.chartTwo();
    });

    $("#tab3").on("click", function () {
        JR.chartThree();
    });

    $("#tab4").on("click", function () {
        JR.chartFour();
    });




    //var horizontalBarChart = new Chart(ctx).HorizontalBar(data, options);


});