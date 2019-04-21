export function combineExchangeData(data, key) {
  return Object.keys(data)
    .map(exchange => {
      return Object.keys(data[exchange]).map(asset => {
        const val = data[exchange][asset][key];

        if (!val) {
          return null;
        }

        if (Array.isArray(val)) {
          return val.map(a => ({ ...a, exchange, assetPair: asset }));
        } else {
          return { ...val, exchange, assetPair: asset };
        }
      });
    })
    .flat()
    .flat()
    .filter(d => d !== null);
}

export function getFirstExchange(data) {
  const exchange = Object.keys(data)[0];

  if (!exchange) return null;

  const asset = Object.keys(data[exchange])[0];

  return asset && data[exchange][asset];
}

export const forEachExchangePair = (exchangeData, callback) => {
  return Object.keys(exchangeData).map(exchangePair => {
    const [exchange, assetPair] = exchangePair.split("-");

    return callback(exchange, assetPair);
  });
};

// const appendExchangeData = (key, state) => {
//   return forEachExchangePair((exchange, assetPair) => {
//     const val = state.exchangeData[`${exchange}-${assetPair}`][key]

//     if (!val || (Array.isArray(val) && !val.length)) {
//       return null
//     }

//     return {
//       ...val,
//       exchange: exchange,
//       assetPair: assetPair,
//     }
//   }).filter((d) => d !== null)
// }

// const appendAsDeepConfig = (key, state, defaultValue) => {
//   return Object.keys(event.state.exchangeData).reduce((r, exchangePair) => {
//     const [ exchange, assetPair ] = exchangePair.split('-')
//     let val = state.exchangeData[exchangePair][key]

//     if (!r[exchange])
//       r[exchange] = {}

//     if (val) {
//       if (Array.isArray(val)) {
//         val = val.map((v) => ({...v, exchange, assetPair}))
//       } else {
//         val = {...val, exchange, assetPair}
//       }
//     }
//     console.log('Post', val)
//     r[exchange][assetPair] = val || defaultValue

//     return r
//   }, {})
// }
