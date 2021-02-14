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
}

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
