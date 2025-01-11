'use client'

import Image from 'next/image'
import { ArrowUp, ArrowDown } from 'lucide-react'
import { type TrendingCoinsResponse } from '@/types/api'

interface TrendingCoinsProps {
  data: TrendingCoinsResponse['coins']
}

export function TrendingCoins({ data }: TrendingCoinsProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">
        Trending Coins
      </h2>
      <div className="space-y-5">
        {data.slice(0, 3).map((coin) => {
          const priceChange = coin.item.data?.price_change_percentage_24h?.usd;
          const isPositive = priceChange !== undefined ? priceChange > 0 : false;

          return (
            <div key={coin.item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={coin.item.thumb}
                  alt={`${coin.item.name} logo`}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-[16px] font-medium text-[#0F1629]">
                  {coin.item.name} ({coin.item.symbol})
                </span>
              </div>
              <div className={`flex items-center gap-1 rounded-sm ${
                isPositive ? 'bg-[#EBF9F4] text-[#14B079]' : 'bg-red-100 text-red-500'
              } px-2 py-1`}>
                {isPositive ? (
                  <ArrowUp className="h-4 w-4" />
                ) : (
                  <ArrowDown className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">
                  {priceChange !== undefined ? Math.abs(priceChange).toFixed(2) : '0.00'}%
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

