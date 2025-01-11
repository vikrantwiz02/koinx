export interface BitcoinPriceData {
  bitcoin: {
    usd: number;
    usd_24h_low?: number;
    usd_24h_high?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
    usd_24h_vol?: number;
    inr: number;
    inr_24h_change?: number;
  };
}

export interface MarketChartData {
  prices: [number, number][];
}

export interface BitcoinDetails {
  current_price: number;
  low_24h: number;
  high_24h: number;
  low_52w: number;
  high_52w: number;
  price_change_24h: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  market_cap_dominance: number;
  ath: number;
  ath_date: string;
  atl: number;
  atl_date: string;
}

export interface CoinMetadata {
  id: string;
  name: string;
  symbol: string;
  image: string;
}

export interface PriceData {
  [key: string]: {
    usd: number;
    usd_24h_change?: number;
    last_updated_at?: number;
  };
}

export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  price_change_24h: number;
  sparkline: number[] | null;
  last_updated: number;
}

export interface BitcoinPriceResponse {
  bitcoin: {
    usd: number;
    inr: number;
    usd_24h_change: number;
  };
}

export interface TrendingCoinsResponse {
  coins: Array<{
    item: {
      id: string;
      name: string;
      symbol: string;
      thumb: string;
      data?: {
        price_change_percentage_24h?: {
          usd?: number;
        };
      };
    };
  }>;
}

