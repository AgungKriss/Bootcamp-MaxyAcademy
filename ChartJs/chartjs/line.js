const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
    type: "line",
    data: {
        labels:xValues,
        datasets:[{
            backgroundColor: "rgba(0, 0, 225, 1)",
            data: yValues,
            fill: false,
            lineTension: 0,
            borderColor: "rgba(0, 0, 255, 0.1"
        }]
    },
    options: {
        legend: {display:false},
        title: {
            display:true,
            text: "Contoh tampilan line"
        },
        scales: {
            yAxes:[{ticks:{min: 6, max: 16}}]
        }
    }
});