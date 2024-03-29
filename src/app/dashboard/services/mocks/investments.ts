export const mockInvestmentsTableData = [
    {
        token: 'BTC',
        direction: 'Buy',
        instrument: 'Bitcoin',
        price: 24500.00,
        change24h: 2.5,
        invested: 10000.00,
        volume: 10.00,
    },
    {
        token: 'ETH',
        direction: 'Buy',
        instrument: 'Ethereum',
        price: 1500.00,
        change24h: 3.2,
        invested: 5000.00,
        volume: 5.00,
    },
    {
        token: 'XRP',
        direction: 'Sell',
        instrument: 'Ripple',
        price: 0.50,
        change24h: -1.8,
        invested: 2000.00,
        volume: 20.00,
    },
    {
        token: 'LTC',
        direction: 'Buy',
        instrument: 'Litecoin',
        price: 100.00,
        change24h: 1.2,
        invested: 3000.00,
        volume: 30.00,
    },
    {
        token: 'ADA',
        direction: 'Buy',
        instrument: 'Cardano',
        price: 0.20,
        change24h: 0.5,
        invested: 1500.00,
        volume: 15.00,
    },
    {
        token: 'DOT',
        direction: 'Buy',
        instrument: 'Polkadot',
        price: 20.00,
        change24h: 2.0,
        invested: 2500.00,
        volume: 25.00,
    },
    {
        token: 'LINK',
        direction: 'Buy',
        instrument: 'Chainlink',
        price: 30.00,
        change24h: 1.8,
        invested: 4000.00,
        volume: 40.00,
    },
    {
        token: 'XLM',
        direction: 'Sell',
        instrument: 'Stellar',
        price: 0.30,
        change24h: -0.5,
        invested: 1800.00,
        volume: 18.00,
    },
    // Add more investment data here...
];

export const mockInvestmentChartsData = [
    {
        name: 'Portfolio value',
        value: 100400.36
    },
    {
        name: 'Invested Capital',
        value: 23869.5
    },
    {
        name: 'Options Return',
        value: 400.36
    },
    {
        name: 'Return on Investment',
        value: 27882
    }
]

export const mockInvestmentTransactionsData = [
    {
        crypto: 'BTC',
        direction: 'Buy Spot',
        transactionAmount: '+1.32BTC',
        time: '2021-01-01T12:00:00Z'
    },
    {
        crypto: 'ETH',
        direction: 'Sell Spot',
        transactionAmount: '-2.00ETH',
        time: '2021-01-02T12:00:00Z'
    },
    {
        crypto: 'XRP',
        direction: 'Buy Spot',
        transactionAmount: '+1000XRP',
        time: '2021-01-03T12:00:00Z'
    },
    {
        crypto: 'LTC',
        direction: 'Sell Spot',
        transactionAmount: '-5.00LTC',
        time: '2021-01-04T12:00:00Z'
    },
    {
        crypto: 'ADA',
        direction: 'Buy Spot',
        transactionAmount: '+1000ADA',
        time: '2021-01-05T12:00:00Z'
    },
    {
        crypto: 'DOT',
        direction: 'Sell Spot',
        transactionAmount: '-100DOT',
        time: '2021-01-06T12:00:00Z'
    },
    {
        crypto: 'LINK',
        direction: 'Buy Spot',
        transactionAmount: '+100LINK',
        time: '2021-01-07T12:00:00Z'
    },
    {
        crypto: 'XLM',
        direction: 'Sell Spot',
        transactionAmount: '-1000XLM',
        time: '2021-01-08T12:00:00Z'
    }
]