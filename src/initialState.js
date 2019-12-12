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
    ],
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 20
            }
          }
        ]
      }
    }
  },

  chart: {
    meta: {
      information: "Daily Prices (open, high, low, close) and Volumes",
      symbol: "PTBA.JK",
      lastRefresh: "2019-12-12",
      outputSize: "Compact",
      timeZone: "US/Eastern"
    },
    prices: [
      {
        date: '2019-12-12T00:00:00.000Z',
        open: 6185,
        high: 6201,
        low: 6182,
        close: 6185,
        volume: 0
      },
      {
        date: '2019-12-11T00:00:00.000Z',
        open: 6190,
        high: 6204,
        low: 6171,
        close: 6180,
        volume: 49556800
      },
      {
        date: '2019-12-10T00:00:00.000Z',
        open: 6186,
        high: 6205,
        low: 6179,
        close: 6183,
        volume: 51058500
      },
      {
        date: '2019-12-09T00:00:00.000Z',
        open: 6194,
        high: 6210,
        low: 6180,
        close: 6193,
        volume: 54834500
      },
      {
        date: '2019-12-06T00:00:00.000Z',
        open: 6160,
        high: 6186,
        low: 6145,
        close: 6186,
        volume: 49098600
      },
      {
        date: '2019-12-05T00:00:00.000Z',
        open: 6132,
        high: 6157,
        low: 6131,
        close: 6152,
        volume: 52261600
      },
      {
        date: '2019-12-04T00:00:00.000Z',
        open: 6121,
        high: 6127,
        low: 6095,
        close: 6112,
        volume: 50339400
      },
      {
        date: '2019-12-03T00:00:00.000Z',
        open: 6119,
        high: 6148,
        low: 6107,
        close: 6133,
        volume: 52634500
      },
      {
        date: '2019-12-02T00:00:00.000Z',
        open: 6023,
        high: 6130,
        low: 6023,
        close: 6130,
        volume: 52565500
      },
      {
        date: '2019-11-29T00:00:00.000Z',
        open: 5949,
        high: 6015,
        low: 5939,
        close: 6011,
        volume: 51024700
      },
      {
        date: '2019-11-28T00:00:00.000Z',
        open: 6013,
        high: 6036,
        low: 5945,
        close: 5953,
        volume: 51713900
      },
      {
        date: '2019-11-27T00:00:00.000Z',
        open: 6025,
        high: 6052,
        low: 6002,
        close: 6023,
        volume: 57364300
      },
      {
        date: '2019-11-26T00:00:00.000Z',
        open: 6091,
        high: 6096,
        low: 6026,
        close: 6026,
        volume: 81161800
      },
      {
        date: '2019-11-25T00:00:00.000Z',
        open: 6094,
        high: 6105,
        low: 6052,
        close: 6070,
        volume: 48496000
      },
      {
        date: '2019-11-22T00:00:00.000Z',
        open: 6115,
        high: 6122,
        low: 6086,
        close: 6100,
        volume: 51362000
      },
      {
        date: '2019-11-21T00:00:00.000Z',
        open: 6135,
        high: 6137,
        low: 6099,
        close: 6117,
        volume: 50800300
      },
      {
        date: '2019-11-20T00:00:00.000Z',
        open: 6136,
        high: 6167,
        low: 6123,
        close: 6155,
        volume: 51663000
      },
      {
        date: '2019-11-19T00:00:00.000Z',
        open: 6136,
        high: 6152,
        low: 6113,
        close: 6152,
        volume: 51414200
      },
      {
        date: '2019-11-18T00:00:00.000Z',
        open: 6126,
        high: 6134,
        low: 6098,
        close: 6122,
        volume: 47079600
      },
      {
        date: '2019-11-15T00:00:00.000Z',
        open: 6115,
        high: 6137,
        low: 6092,
        close: 6128,
        volume: 46157800
      },
      {
        date: '2019-11-14T00:00:00.000Z',
        open: 6137,
        high: 6146,
        low: 6062,
        close: 6098,
        volume: 72169800
      },
      {
        date: '2019-11-13T00:00:00.000Z',
        open: 6177,
        high: 6183,
        low: 6132,
        close: 6142,
        volume: 51900400
      },
      {
        date: '2019-11-12T00:00:00.000Z',
        open: 6135,
        high: 6180,
        low: 6133,
        close: 6180,
        volume: 57719100
      },
      {
        date: '2019-11-11T00:00:00.000Z',
        open: 6171,
        high: 6182,
        low: 6127,
        close: 6148,
        volume: 47286600
      },
      {
        date: '2019-11-08T00:00:00.000Z',
        open: 6165,
        high: 6180,
        low: 6139,
        close: 6177,
        volume: 60698400
      },
      {
        date: '2019-11-07T00:00:00.000Z',
        open: 6234,
        high: 6235,
        low: 6119,
        close: 6165,
        volume: 67284200
      },
      {
        date: '2019-11-06T00:00:00.000Z',
        open: 6273,
        high: 6274,
        low: 6198,
        close: 6217,
        volume: 70278100
      },
      {
        date: '2019-11-05T00:00:00.000Z',
        open: 6204,
        high: 6264,
        low: 6195,
        close: 6264,
        volume: 95988100
      },
      {
        date: '2019-11-04T00:00:00.000Z',
        open: 6219,
        high: 6242,
        low: 6180,
        close: 6180,
        volume: 103975100
      },
      {
        date: '2019-11-01T00:00:00.000Z',
        open: 6225,
        high: 6228,
        low: 6193,
        close: 6207,
        volume: 142104600
      },
      {
        date: '2019-10-31T00:00:00.000Z',
        open: 6290,
        high: 6301,
        low: 6216,
        close: 6228,
        volume: 163955700
      },
      {
        date: '2019-10-30T00:00:00.000Z',
        open: 6302,
        high: 6304,
        low: 6264,
        close: 6295,
        volume: 139603200
      },
      {
        date: '2019-10-29T00:00:00.000Z',
        open: 6267,
        high: 6281,
        low: 6245,
        close: 6281,
        volume: 148492100
      },
      {
        date: '2019-10-28T00:00:00.000Z',
        open: 6256,
        high: 6278,
        low: 6243,
        close: 6265,
        volume: 145042900
      },
      {
        date: '2019-10-25T00:00:00.000Z',
        open: 6342,
        high: 6348,
        low: 6243,
        close: 6252,
        volume: 151346100
      },
      {
        date: '2019-10-24T00:00:00.000Z',
        open: 6271,
        high: 6339,
        low: 6270,
        close: 6339,
        volume: 130619300
      },
      {
        date: '2019-10-23T00:00:00.000Z',
        open: 6224,
        high: 6257,
        low: 6197,
        close: 6257,
        volume: 135886700
      },
      {
        date: '2019-10-22T00:00:00.000Z',
        open: 6207,
        high: 6229,
        low: 6178,
        close: 6225,
        volume: 114083500
      },
      {
        date: '2019-10-21T00:00:00.000Z',
        open: 6207,
        high: 6228,
        low: 6187,
        close: 6198,
        volume: 146413800
      },
      {
        date: '2019-10-18T00:00:00.000Z',
        open: 6185,
        high: 6201,
        low: 6178,
        close: 6191,
        volume: 125611600
      },
      {
        date: '2019-10-17T00:00:00.000Z',
        open: 6169,
        high: 6197,
        low: 6161,
        close: 6181,
        volume: 119164000
      },
      {
        date: '2019-10-16T00:00:00.000Z',
        open: 6170,
        high: 6183,
        low: 6143,
        close: 6169,
        volume: 114463100
      },
      {
        date: '2019-10-15T00:00:00.000Z',
        open: 6130,
        high: 6158,
        low: 6118,
        close: 6158,
        volume: 118739300
      },
      {
        date: '2019-10-14T00:00:00.000Z',
        open: 6129,
        high: 6153,
        low: 6099,
        close: 6126,
        volume: 118521000
      },
      {
        date: '2019-10-11T00:00:00.000Z',
        open: 6033,
        high: 6109,
        low: 6033,
        close: 6105,
        volume: 105411100
      },
      {
        date: '2019-10-10T00:00:00.000Z',
        open: 6023,
        high: 6044,
        low: 6018,
        close: 6023,
        volume: 89240100
      },
      {
        date: '2019-10-09T00:00:00.000Z',
        open: 6030,
        high: 6047,
        low: 6017,
        close: 6029,
        volume: 111759600
      },
      {
        date: '2019-10-08T00:00:00.000Z',
        open: 6021,
        high: 6046,
        low: 6009,
        close: 6039,
        volume: 124640500
      },
      {
        date: '2019-10-07T00:00:00.000Z',
        open: 6077,
        high: 6084,
        low: 5988,
        close: 6000,
        volume: 127549800
      },
      {
        date: '2019-10-04T00:00:00.000Z',
        open: 6052,
        high: 6076,
        low: 6046,
        close: 6061,
        volume: 111920200
      },
      {
        date: '2019-10-03T00:00:00.000Z',
        open: 6033,
        high: 6050,
        low: 5997,
        close: 6038,
        volume: 121133700
      },
      {
        date: '2019-10-02T00:00:00.000Z',
        open: 6124,
        high: 6153,
        low: 6051,
        close: 6055,
        volume: 116223100
      },
      {
        date: '2019-10-01T00:00:00.000Z',
        open: 6163,
        high: 6176,
        low: 6134,
        close: 6138,
        volume: 99171900
      },
      {
        date: '2019-09-30T00:00:00.000Z',
        open: 6190,
        high: 6195,
        low: 6152,
        close: 6169,
        volume: 93299700
      },
      {
        date: '2019-09-27T00:00:00.000Z',
        open: 6213,
        high: 6219,
        low: 6191,
        close: 6196,
        volume: 112420600
      },
      {
        date: '2019-09-26T00:00:00.000Z',
        open: 6168,
        high: 6230,
        low: 6165,
        close: 6230,
        volume: 105163800
      },
      {
        date: '2019-09-25T00:00:00.000Z',
        open: 6121,
        high: 6146,
        low: 6086,
        close: 6146,
        volume: 91732400
      },
      {
        date: '2019-09-24T00:00:00.000Z',
        open: 6188,
        high: 6194,
        low: 6115,
        close: 6137,
        volume: 90097100
      },
      {
        date: '2019-09-23T00:00:00.000Z',
        open: 6240,
        high: 6247,
        low: 6197,
        close: 6206,
        volume: 118747800
      },
      {
        date: '2019-09-20T00:00:00.000Z',
        open: 6248,
        high: 6256,
        low: 6213,
        close: 6231,
        volume: 134219300
      },
      {
        date: '2019-09-19T00:00:00.000Z',
        open: 6274,
        high: 6282,
        low: 6242,
        close: 6244,
        volume: 106914500
      },
      {
        date: '2019-09-18T00:00:00.000Z',
        open: 6238,
        high: 6276,
        low: 6236,
        close: 6276,
        volume: 108718500
      },
      {
        date: '2019-09-17T00:00:00.000Z',
        open: 6215,
        high: 6240,
        low: 6205,
        close: 6236,
        volume: 112446500
      },
      {
        date: '2019-09-16T00:00:00.000Z',
        open: 6262,
        high: 6266,
        low: 6193,
        close: 6219,
        volume: 102809600
      },
      {
        date: '2019-09-13T00:00:00.000Z',
        open: 6369,
        high: 6375,
        low: 6318,
        close: 6334,
        volume: 106712000
      },
      {
        date: '2019-09-12T00:00:00.000Z',
        open: 6398,
        high: 6414,
        low: 6337,
        close: 6342,
        volume: 111986600
      },
      {
        date: '2019-09-11T00:00:00.000Z',
        open: 6334,
        high: 6381,
        low: 6328,
        close: 6381,
        volume: 136654000
      },
      {
        date: '2019-09-10T00:00:00.000Z',
        open: 6331,
        high: 6342,
        low: 6311,
        close: 6336,
        volume: 113186400
      },
      {
        date: '2019-09-09T00:00:00.000Z',
        open: 6328,
        high: 6333,
        low: 6306,
        close: 6326,
        volume: 109132800
      },
      {
        date: '2019-09-06T00:00:00.000Z',
        open: 6329,
        high: 6336,
        low: 6305,
        close: 6308,
        volume: 114218400
      },
      {
        date: '2019-09-05T00:00:00.000Z',
        open: 6294,
        high: 6307,
        low: 6281,
        close: 6306,
        volume: 110321300
      },
      {
        date: '2019-09-04T00:00:00.000Z',
        open: 6266,
        high: 6273,
        low: 6239,
        close: 6269,
        volume: 111903900
      },
      {
        date: '2019-09-03T00:00:00.000Z',
        open: 6293,
        high: 6310,
        low: 6248,
        close: 6261,
        volume: 122848800
      },
      {
        date: '2019-09-02T00:00:00.000Z',
        open: 6331,
        high: 6338,
        low: 6281,
        close: 6290,
        volume: 126521700
      },
      {
        date: '2019-08-30T00:00:00.000Z',
        open: 6316,
        high: 6329,
        low: 6305,
        close: 6328,
        volume: 132856400
      },
      {
        date: '2019-08-29T00:00:00.000Z',
        open: 6288,
        high: 6306,
        low: 6276,
        close: 6289,
        volume: 111978400
      },
      {
        date: '2019-08-28T00:00:00.000Z',
        open: 6289,
        high: 6306,
        low: 6267,
        close: 6281,
        volume: 107048900
      },
      {
        date: '2019-08-27T00:00:00.000Z',
        open: 6244,
        high: 6289,
        low: 6223,
        close: 6278,
        volume: 117748900
      },
      {
        date: '2019-08-26T00:00:00.000Z',
        open: 6193,
        high: 6230,
        low: 6149,
        close: 6214,
        volume: 120581400
      },
      {
        date: '2019-08-23T00:00:00.000Z',
        open: 6228,
        high: 6255,
        low: 6204,
        close: 6255,
        volume: 104137900
      },
      {
        date: '2019-08-22T00:00:00.000Z',
        open: 6257,
        high: 6265,
        low: 6210,
        close: 6239,
        volume: 102340600
      },
      {
        date: '2019-08-21T00:00:00.000Z',
        open: 6290,
        high: 6308,
        low: 6247,
        close: 6252,
        volume: 97455300
      },
      {
        date: '2019-08-20T00:00:00.000Z',
        open: 6311,
        high: 6317,
        low: 6279,
        close: 6295,
        volume: 115615800
      },
      {
        date: '2019-08-19T00:00:00.000Z',
        open: 6310,
        high: 6329,
        low: 6284,
        close: 6296,
        volume: 107478400
      },
      {
        date: '2019-08-16T00:00:00.000Z',
        open: 6264,
        high: 6292,
        low: 6235,
        close: 6286,
        volume: 122425200
      },
      {
        date: '2019-08-15T00:00:00.000Z',
        open: 6192,
        high: 6257,
        low: 6161,
        close: 6257,
        volume: 118749900
      },
      {
        date: '2019-08-14T00:00:00.000Z',
        open: 6255,
        high: 6274,
        low: 6240,
        close: 6267,
        volume: 116897700
      },
      {
        date: '2019-08-13T00:00:00.000Z',
        open: 6251,
        high: 6251,
        low: 6198,
        close: 6210,
        volume: 106057400
      },
      {
        date: '2019-08-12T00:00:00.000Z',
        open: 6300,
        high: 6309,
        low: 6245,
        close: 6250,
        volume: 98246100
      },
      {
        date: '2019-08-09T00:00:00.000Z',
        open: 6300,
        high: 6319,
        low: 6280,
        close: 6282,
        volume: 102271800
      },
      {
        date: '2019-08-08T00:00:00.000Z',
        open: 6224,
        high: 6281,
        low: 6224,
        close: 6274,
        volume: 108941500
      },
      {
        date: '2019-08-07T00:00:00.000Z',
        open: 6155,
        high: 6221,
        low: 6153,
        close: 6204,
        volume: 115751900
      },
      {
        date: '2019-08-06T00:00:00.000Z',
        open: 6105,
        high: 6157,
        low: 6022,
        close: 6119,
        volume: 113648900
      },
      {
        date: '2019-08-05T00:00:00.000Z',
        open: 6311,
        high: 6315,
        low: 6175,
        close: 6175,
        volume: 122385300
      },
      {
        date: '2019-08-02T00:00:00.000Z',
        open: 6341,
        high: 6353,
        low: 6317,
        close: 6340,
        volume: 93321300
      },
      {
        date: '2019-08-01T00:00:00.000Z',
        open: 6385,
        high: 6404,
        low: 6372,
        close: 6381,
        volume: 107634100
      },
      {
        date: '2019-07-31T00:00:00.000Z',
        open: 6362,
        high: 6390,
        low: 6348,
        close: 6390,
        volume: 114214500
      },
      {
        date: '2019-07-30T00:00:00.000Z',
        open: 6317,
        high: 6376,
        low: 6317,
        close: 6376,
        volume: 127506100
      },
      {
        date: '2019-07-29T00:00:00.000Z',
        open: 6336,
        high: 6349,
        low: 6283,
        close: 6299,
        volume: 126988300
      },
      {
        date: '2019-07-26T00:00:00.000Z',
        open: 6379,
        high: 6385,
        low: 6314,
        close: 6325,
        volume: 122282900
      }
    ]
  }
}