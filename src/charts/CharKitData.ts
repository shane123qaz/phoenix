export const chartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2
    },
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ["Rainy Days", "Sunny Days"]
};

export const progressChartData = {
  labels: ["Swim", "Bike", "Run"],
  data: [0.4, 0.6, 0.8]
}

export const pieChartData = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  }
];

export const stackedBarData = {
  labels: ["Test1", "Test2", "Test3"],
  legend: ["L1", "L2", "L3"],
  data: [[60, 20, 60], [30, 30, 60], [40, 45, 50]],
  barColors: ["#919ec9", "#6074b4", "#384fa3"]
};
