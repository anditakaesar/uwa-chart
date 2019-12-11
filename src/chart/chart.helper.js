// populate data from API to initialState.mychart
export const META_DATA = `Meta Data`;
export const TIME_SERIES = `Time Series`;
export const TIME_SERIES_DAILY = `${TIME_SERIES} (Daily)`;

export const OPEN = `1. open`;
export const HIGH = `2. high`;
export const LOW = `3. low`;
export const CLOSE = `4. close`;
export const VOLUME = `5. volume`;

export const INFO = `1. Information`;
export const SYMBOL = `2. Symbol`;
export const LAST_REFRESH = `3. Last Refreshed`;
export const INTERVAL = `4. Interval`;
export const OUTPUT_SIZE = `5. Output Size`;
export const TIME_ZONE = `6. Time Zone`;

export const PRICE = {
  OPEN, HIGH, LOW, CLOSE, VOLUME
};

export const META_INFO = {
  INFO, SYMBOL, LAST_REFRESH, INTERVAL, OUTPUT_SIZE, TIME_ZONE
};

// create object that contain labels and data
export function populateData(rawdata) {
  let timeseries = rawdata[TIME_SERIES_DAILY];
    
  let symbol = rawdata[META_DATA][META_INFO.SYMBOL];
  let labels = [];
  let data = [];
  let closePrice = 0;
    
  // console.log(rawdata[TIME_SERIES_DAILY]);

  for (var prop in timeseries) {
    labels = [...labels, prop];
    closePrice = parseInt(timeseries[prop][PRICE.CLOSE]);
    data = [...data, closePrice];
  }

  return {
    labels, data, symbol
  }
}


// export const populateData = ({rawdata}) => ({
//     // let outputData = {
//     //     labels: [],
//     //     data: []
//     // }

//     console.log(rawdata.TIME_SERIES_DAILY);
// });


