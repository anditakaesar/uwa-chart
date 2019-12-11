export const initialState = {
  notifications: [],
    
  checklists: [
    {
      id: "a4f01fd2-9395-46d4-9d4c-1d01ace4004e",
      desc: "🚮 button to delete",
      checked: true
    },
    {
      id: "a4f01fd2-9395-46d4-9d4c-1d01ace4004f",
      desc: "📝 button to edit",
      checked: true
    },
    {
      id: "a4f01fd2-9395-46d4-9d4c-1d01ace40041",
      desc: "Click the list to mark it done",
      checked: false
    }
  ],

  mychart: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Example Data Set',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 45]
      }
    ]
  }
}