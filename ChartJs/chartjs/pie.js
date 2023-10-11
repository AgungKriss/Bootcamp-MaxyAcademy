var xValues = ["German", "Russia", "Jepang", "USA", "England"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["black", "red", "orange", "blue", "green"];

new Chart("myChart", {
    type: "pie", // If want to change to donut chart user type: "doughnut"
    data: {
        labels:xValues,
        datasets:[{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: {display:false},
        title: {
            display:true,
            text: "Contoh tampilan bar"
        }
    }
});