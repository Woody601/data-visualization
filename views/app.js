// const jellyCanvas = document.querySelector("canvas#jelly")
// new Chart(jellyCanvas, {
//   type: "line",
//   data: {
//     labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
//     datasets: [{ label: "Dataset 1", data: [1, 2, 3, 4, 5] }],
//   },
// })
// Reference variable to canvas
const canvasRef = document.getElementById("chart")
// Create the Chart instance
let myChart = new Chart(canvasRef, {
  //
  type: "bar",

  // Data Configuration

  data: {
    //labels for the data points
    labels: ["Kit-Kat", "Hershey's", "Whoppers"],

    // datasets (you only need on)

    datasets: [
      {
        label: "Candy Sold",
        data: [5, 12, 1],
      },
    ],
  },
})

// Create an object for storing chart info

const allCharts = {
  bar: {
    name: "Bar",
    config: {
      type: "bar",
      data: {
        labels: ["Kit-Kat", "Hershey's", "Whoppers"],
        datasets: [
          {
            label: "Candy Sold",
            data: [5, 12, 1],
          },
        ],
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 12,
          },
        },
      },
    },
  },
  pie: {
    name: "Pie",
    config: {
      type: "pie",
      data: {
        labels: ["Kit-Kat", "Hershey's", "Whoppers"],
        datasets: [
          {
            label: "Candy Sold",
            data: [5, 12, 1],
          },
        ],
      },
    },
  },
  line: {
    name: "Line",
    config: {
      type: "line",
      data: {
        labels: ["Kit-Kat", "Hershey's", "Whoppers"],
        datasets: [
          {
            label: "Candy Sold",
            data: [5, 12, 1],
            tension: 0.5,
          },
        ],
      },
    },
  },
}
let currentChart = ""
Object.values(allCharts).forEach(function (chart) {
  // create a button element
  if (currentChart == "") {
    currentChart = chart.name
    console.log(currentChart)
  }

  const newButton = document.createElement("button")
  newButton.innerHTML = `Show ${chart.name} Chart`
  newButton.onclick = function () {
    currentChart = chart.name
    console.log(currentChart)
    myChart.destroy()
    myChart = new Chart(canvasRef, chart.config)
  }
  document.querySelector("#chartButtons").appendChild(newButton)
})
function removeDatapoint() {
  myChart.data.labels.pop()
  myChart.update()
}
function addDatapoint() {
  const numValue = parseFloat(document.getElementById("num").value)
  const labelValue = document.getElementById("label").value
  myChart.data.labels.push(labelValue)
  myChart.data.datasets[0].data.push(numValue)

  myChart.update()
}