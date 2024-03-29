const stocks = {
    'AAPL': 'AAPL-Apple',
    'ADBE': 'Adobe',
    'AKBA': 'AKBA_penny',
    'AKTS': 'AKTS',
    'FREY': 'FREY-shell',
    'AMD': 'AMD',
    'AMWL': 'AMWL',
    'AVPT': 'AVPT',
    'AVID': 'AVID',
    'BABA': 'BABA',
    'BB': 'BB',
    
    'BLDP': 'BLDP',
    'BYD': 'BYD',
    'OUST': 'OUST',
    'CRM': 'CRM',
    'LVOX': 'LVOX',
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
    'BHC': 'BHC',
    'YRD': 'YRD',
    'HYLN': 'HYLN',
    'ATNX': 'ATNX',
    'EVFM': 'EVFM',
    'TXMD': 'TXMD',
    'BRQS': 'BRQS',
    'TOPS': 'TOPS',
    'SHIP': 'SHIP',
    'UAVS': 'UAVS',
    'SKLZ': 'SKLZ',
    'CFMS': 'CFMS',
    'SNGX': 'SNGX',
    'IZEA': 'IZEA',
    'CPSH': 'CPSH',
    'CLBS': 'CLBS',
    'LGHL': 'LGHL',
    'CBAT': 'CBAT',
    
    'ATOS': 'ATOS',
    'RIDE': 'RIDE',
    'YALA': 'YALA',
    'ESLT': 'ESLT',
    'ORTX': 'ORTX',
    'BFLY': 'LGVW_shell',
    'SPCB': 'SPCB',
    'PSTI': 'PSTI',
    'RIOT': 'RIOT',
    'FNGU': 'FNGU',
    'MLM': 'MLM',
    'FTFT': 'FTFT',
    'INCY': 'INCY',
    'MRK': 'MRK',
    'MARA': 'MARA',
    'RMO': 'RMO',
    'LAC': 'LAC',
    'HYLN': 'HYLN',
    'TALO': 'TALO',
    
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
    
    'STAA': 'STAA',
    "CRNC": 'CRNC',
    'CELH': 'CELH',
    'TIGR': 'TIGR',
    'REGI': 'REGI',
    
    'DNMR': 'DNMR',
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
    
    'U': 'U',
    'OKTA': 'OKTA',
    'PING': 'PING',
    'KNSA': 'KNSA',
    'AI': 'AI',
    'APPS': 'APPS',
    'WISH': 'WISH',
    'SDGR': 'SDGR-computpharm',
    'GHSI': 'GHSI',
    'ASML': 'ASML',
    'POLA': 'POLA',
    'CLNE': 'CLNE',
    'AMRS': 'AMRS',
    'FVRR': 'FVRR',
    'WPRT': 'WPRT',
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