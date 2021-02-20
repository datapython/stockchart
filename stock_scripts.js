const stocks = {
    'AAPL': 'Apple',
    'ADBE': 'Adobe',
    'AKBA': 'AKBA_penny',
    'AKTS': 'AKTS',
    'ALUS': 'ALUS-shell',
    'AMD': 'AMD',
    'AMWL': 'AMWL',
    'APXT': 'APXT',
    'AVID': 'AVID',
    'BABA': 'BABA',
    'BB': 'BB',
    'BFT': 'BFT',
    'BLDP': 'BLDP',
    'BYD': 'BYD',
    'CLA': 'CLA',
    'CRLBF': 'CRLBF',
    'CRM': 'CRM',
    'CRSA': 'CRSA',
    'CTMX': 'CTMX',
    'DVAX': 'DVAX',
    'ELYS': 'ELYS',
    'ESEA': "ESEA",
    'JMIA': 'JMIA',
    'JNJ': 'JNJ',
    'KGC': 'KGC',
    'LMT': 'LMT',
    'MSP': 'MSP',
    'NCLH': 'NCLH',
    'CCL': 'CCL',
    'NET': 'NET',
    'NVDA': 'NVDA',
    'OBSV': 'OBSV',
    'OPEN': 'OPEN',
    'OSTK': 'OSTK',
    'PBA': 'PBA',
    'PLTR': 'PLTR',
    'RESN': 'RESN',
    'SBLK': 'SBLK',
    'SQ': 'SQ',
    'SUPN': 'SUPN',
    'TDOC': 'TDOC',
    'TSLA': 'TSLA',
    'TRUP': 'TRUP',
    'UMC': 'UMC',
    'UPWK': 'UPWK',
    'CLOV': 'CLOV',
    'VIX': 'VIX',
    'BHC': 'BHC',
    'YRD': 'YRD',
    'HYLN': 'HYLN',
    'ANTX': 'ANTX',
    'EVFM': 'EVFM',
    'TXMD': 'TXMD',
    'BRQS': 'BRQS',
    'TOPS': 'TOPS',
    'SHIP': 'SHIP',
    'DFLY': 'DFLY',
    'UAVS': 'UAVS',
    'SKLZ': 'SKLZ',
    'CFMS': 'CFMS',
    'SNGX': 'SNGX',
    'IZEA': 'IZEA',
    'CPSH': 'CPSH',
    'CLBS': 'CLBS',
    'LGHL': 'LGHL',
    'REZZF': 'REZZF-OTC',
    'CBAT': 'CBAT',
    'SNCA': 'SNCA',
    'ATOS': 'ATOS',
    'RIDE': 'RIDE',
    'YALA': 'YALA',
    'ESLT': 'ESLT',
    'ORTX': 'ORTX',
    'LGVW': 'LGVW',
    'SPCB': 'SPCB',
    'PSTI': 'PSTI',
    'RIOT': 'RIOT',
    'FNGU': 'FNGU',
    'MLM': 'MLM',
    'FTFT': 'FTFT',
    'INCY': 'INCY',
    'MRK': 'MRK',
    'MARA': 'MARA',
    'DSGT': 'DSGT',
    'RMO': 'RMO',
    'LAC': 'LAC',
    'HYLN': 'HYLN',
    'TALO': 'TALO',
    'CLII': 'CLII',
    'ABBV': 'ABBV',
    'UWMC': 'UWMC',
    'ONCY': 'ONCY',
    'CRUS': 'CRUS-chip',
    'TSLA': 'TSLA',
    "PDD": 'PDD',
    'SE': 'SE',
    'NIO': 'NIO',
    "PINS": 'PINS',
    'CRWD': 'CRWD',
    'BILI': 'BILI',
    'APHA': 'APHA',
    'STAA': 'STAA',
    "CRNC": 'CRNC',
    'CELH': 'CELH',
    'TIGR': 'TIGR',
    'REGI': 'REGI',
    'NK': 'NK',
    'DMNR': 'DMNR',
    'SI': 'SI',
    'MTLS': 'MTLS',
    'FLGT': 'FLGT',
    'IMAB': 'IMAB',
    'AMRS': 'AMRS',
    'MVIS': 'MVIS',
    'VCEL': 'VCEL',
    'GRWG': 'GRWG',
    'VSTO': 'VSTO',
    'STKL': 'STKL',
    'VERI': 'VERI',
    'CMBM': 'CMBM',
    'MWK': 'MWK',
    'U': 'U',
    'OKTA': 'OKTA',
    'PING': 'PING',
    'KNSA': 'KNSA',
}

// const inputTicker = document.querySelector('.inputTicker');
// const inputCompany = document.querySelector('.inputCompany');
// const btnAdd = document.querySelector('.add');
// const btnRemove = document.querySelector('.remove');
// btnAdd.addEventListener('click', addStock);
// btnRemove.addEventListener('click', removeStock);

const companiesSorted = Object.keys(stocks).sort();

const pages = document.querySelector('.pages');
const chart = document.querySelector('.chart');

companiesSorted.forEach(stock => {
    const page = document.createElement('div');
    const link = document.createElement('a');
    link.href = `https://www.nasdaq.com/market-activity/stocks/${stock}`;
    link.innerHTML = stocks[stock];
    page.appendChild(link);
    pages.appendChild(page);

    const subchart = document.createElement('div');
    subchart.setAttribute('class', 'subchart');
    const chartImg = document.createElement('img');
    chartImg.src = `https://www.finviz.com/chart.ashx?t=${stock}&ty=c&ta=1&p=d`;
    subchart.appendChild(chartImg);
    chart.appendChild(subchart);
});

// function addStock () {
//     const ticker = inputTicker.value;
//     const company = inputCompany.value;
//     if (company && ticker && !stocks.hasOwnProperty(ticker)) stocks[ticker] = company;
//     window.location.reload();
// }

// function removeStock () {
//     const ticker = inputTicker.value;
//     const company = inputCompany.value;
//     if (stocks.hasOwnProperty(ticker)) delete stocks[ticker];
//     window.location.reload();
// }