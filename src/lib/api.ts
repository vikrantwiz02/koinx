interface CoinItem {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  price_btc: number;
  data?: {
    price_change_percentage_24h?: {
      usd: number;
    };
  };
}

import { cache } from 'react'

export const getBitcoinDetails = cache(async () => {
  try {
    const [priceResponse, marketResponse] = await Promise.all([
      fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24h_high=true&include_24h_low=true&include_24h_change=true&include_market_cap=true&include_24h_vol=true',
        { next: { revalidate: 60 } }
      ),
      fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${Math.floor(Date.now()/1000 - 365*24*60*60)}&to=${Math.floor(Date.now()/1000)}`,
        { next: { revalidate: 3600 } }
      )
    ]);

    if (!priceResponse.ok || !marketResponse.ok) {
      throw new Error('Failed to fetch Bitcoin data');
    }

    const [priceData, marketData] = await Promise.all([
      priceResponse.json(),
      marketResponse.json()
    ]);

    const prices = marketData.prices.map((p: number[]) => p[1]);
    const low52w = Math.min(...prices);
    const high52w = Math.max(...prices);

    const bitcoin = priceData.bitcoin || {};
    return {
      current_price: bitcoin.usd || 0,
      low_24h: bitcoin.usd_24h_low || bitcoin.usd || 0,
      high_24h: bitcoin.usd_24h_high || bitcoin.usd || 0,
      low_52w: low52w || 0,
      high_52w: high52w || 0,
      price_change_24h: bitcoin.usd_24h_change || 0,
      market_cap: bitcoin.usd_market_cap || 0,
      market_cap_rank: 1,
      total_volume: bitcoin.usd_24h_vol || 0,
      market_cap_dominance: 38.343,
      ath: 69044.77,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl: 67.81,
      atl_date: "2013-07-06T00:00:00.000Z"
    };
  } catch (error) {
    console.error('Error fetching Bitcoin details:', error);
    return {
      current_price: 47000,
      low_24h: 46000,
      high_24h: 48000,
      low_52w: 25000,
      high_52w: 49000,
      price_change_24h: 2.5,
      market_cap: 900000000000,
      market_cap_rank: 1,
      total_volume: 30000000000,
      market_cap_dominance: 38.343,
      ath: 69044.77,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl: 67.81,
      atl_date: "2013-07-06T00:00:00.000Z"
    };
  }
});

export const getBitcoinPrice = cache(async () => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true',
      { next: { revalidate: 60 } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Bitcoin price');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    return { bitcoin: { usd: 47000, inr: 3500000, usd_24h_change: 2.5, inr_24h_change: 2.5 } };
  }
});

export const getTrendingCoins = cache(async () => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/search/trending',
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch trending coins');
    }

    const data = await response.json();
    return data.coins.map((coin: { item: CoinItem }) => ({
      id: coin.item.id,
      name: coin.item.name,
      symbol: coin.item.symbol,
      logo: coin.item.thumb,
      price: coin.item.price_btc,
      price_change_24h: coin.item.data?.price_change_percentage_24h?.usd || 0
    }));
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
});

export const getYouMayLike = cache(async () => {
  try {
    const coinIds = [
      'binancecoin', 'solana', 'ripple', 'cardano',
      'avalanche-2', 'matic-network', 'polkadot', 'shiba-inu'
    ];

    const [priceData, marketChartData, metadataData] = await Promise.all([
      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd&include_24h_change=true&include_24h_vol=true&include_last_updated_at=true`,
        { next: { revalidate: 60 } }).then(res => res.json()),
      Promise.all(coinIds.map(id => 
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`,
          { next: { revalidate: 300 } }).then(res => res.json())
      )),
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(',')}`,
        { next: { revalidate: 3600 } }).then(res => res.json())
    ]);

    return coinIds.map((id, index) => {
      const metadata = metadataData.find((coin: any) => coin.id === id);
      const marketChart = marketChartData[index];
      return {
        id,
        name: metadata?.name || '',
        symbol: metadata?.symbol?.toUpperCase() || '',
        logo: metadata?.image || '',
        price: priceData[id]?.usd || 0,
        price_change_24h: Number(priceData[id]?.usd_24h_change?.toFixed(2)) || 0,
        sparkline: marketChart?.prices?.map((price: number[]) => price[1]) || null,
        last_updated: priceData[id]?.last_updated_at || Date.now()
      };
    });
  } catch (error) {
    console.error('Error fetching you may like coins:', error);
    return [];
  }
});

export const getTrendingCoinsDetailed = cache(async () => {
  try {
    const coinIds = [
      'bitcoin', 'ethereum', 'staked-ether', 'uniswap',
      'centrifuge', 'internet-computer', 'optimism', 'celestia'
    ];

    const [priceData, marketChartData, metadataData] = await Promise.all([
      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd&include_24h_change=true&include_24h_vol=true&include_last_updated_at=true`,
        { next: { revalidate: 60 } }).then(res => res.json()),
      Promise.all(coinIds.map(id => 
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`,
          { next: { revalidate: 300 } }).then(res => res.json())
      )),
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(',')}`,
        { next: { revalidate: 3600 } }).then(res => res.json())
    ]);

    return coinIds.map((id, index) => {
      const metadata = metadataData.find((coin: any) => coin.id === id);
      const marketChart = marketChartData[index];
      return {
        id,
        name: metadata?.name || '',
        symbol: metadata?.symbol?.toUpperCase() || '',
        logo: metadata?.image || '',
        price: priceData[id]?.usd || 0,
        price_change_24h: Number(priceData[id]?.usd_24h_change?.toFixed(2)) || 0,
        sparkline: marketChart?.prices?.map((price: number[]) => price[1]) || null,
        last_updated: priceData[id]?.last_updated_at || Date.now()
      };
    });
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
});

export const getLivePriceUpdates = cache(async (coinIds: string[]) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd&include_24h_change=true&include_24h_vol=true&include_last_updated_at=true`,
      { next: { revalidate: 10 } }
    );
    
    if (!response.ok) throw new Error('Failed to fetch live prices');
    return response.json();
  } catch (error) {
    console.error('Error fetching live prices:', error);
    return null;
  }
});

