const url = "https://api.coincap.io/v2";

function getAssets() {
    return fetch(`${url}/assets?limit=20`)
        .then(res => res.json())
        .then(res => res.data)
}

function getAsset(asset) {
    let result = fetch(`${url}/assets/${asset}`)
        .then(res => res.json())
        .then(res => res.data)
    return result;
}

function getAssetHistory(asset) {
    const now = new Date();
    const end = now.getTime();

    now.setDate(now.getDate() - 1);

    const start = now.getTime();

    let result = fetch(`${url}/assets/${asset}/history?interval=h1&start=${start}&end=${end}`)
        .then(res => res.json())
        .then(res => res.data);

    return result;
}

function getMarkets(coin) {
    return fetch(`${url}/assets/${coin}/markets?limit=5`)
        .then(res => res.json())
        .then(res => res.data)
}

function getExchange(id) {
    return fetch(`${url}/exchanges//${id}`)
        .then(res => res.json())
        .then(res => res.data)
}

export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange,
}