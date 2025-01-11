export interface BitcoinPriceResponse {
    bitcoin: {
      inr: number
      inr_24h_change: number
      usd: number
      usd_24h_change: number
    }
  }
  
  export interface TrendingCoin {
    item: {
      id: string
      coin_id: number
      name: string
      symbol: string
      market_cap_rank: number
      thumb: string
      small: string
      large: string
      slug: string
      price_btc: number
      score: number
      data: {
        price_change_percentage_24h: {
          usd: number
        }
      }
    }
  }
  
  export interface TrendingCoinsResponse {
    coins: TrendingCoin[]
  }
  
  export interface BitcoinDetailsResponse {
    current_price: number
    low_24h: number
    high_24h: number
    low_52w: number
    high_52w: number
    market_cap: number
    market_cap_rank: number
    total_volume: number
    market_cap_dominance: number
    ath: number
    ath_date: string
    atl: number
    atl_date: string
  }
  
  