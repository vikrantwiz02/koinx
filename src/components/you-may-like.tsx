'use client'

import Image from 'next/image'
import { ArrowUp, ArrowDown, ChevronRight, ChevronLeft } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import { getLivePriceUpdates } from '@/lib/api'

interface Coin {
  id: string
  name: string
  symbol: string
  logo: string
  price: number
  price_change_24h: number
  sparkline: number[] | null
}

interface CoinCarouselProps {
  title: string
  coins: Coin[]
}

function createSparklinePath(data: number[]): string {
  if (!data || data.length < 2) return ''
  
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min
  
  const points = data.map((val, i) => [
    (i / (data.length - 1)) * 100,
    100 - ((val - min) / range) * 100
  ])
  
  return `M ${points.map(([x, y]) => `${x},${y}`).join(' L ')}`
}

function CoinCarousel({ title, coins: initialCoins }: CoinCarouselProps) {
  const [coins, setCoins] = useState(initialCoins)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const coinIds = initialCoins.map(coin => coin.id)
    let timeoutId: NodeJS.Timeout

    const updatePrices = async () => {
      const priceData = await getLivePriceUpdates(coinIds)
      if (priceData) {
        setCoins(prevCoins => 
          prevCoins.map(coin => ({
            ...coin,
            price: priceData[coin.id]?.usd || coin.price,
            price_change_24h: Number(priceData[coin.id]?.usd_24h_change?.toFixed(2)) || coin.price_change_24h
          }))
        )
      }
      timeoutId = setTimeout(updatePrices, 10000)
    }

    updatePrices()
    return () => clearTimeout(timeoutId)
  }, [initialCoins])

  const visibleCoins = useMemo(() => 
    coins.slice(startIndex, startIndex + 5), 
    [coins, startIndex]
  )
  
  const canScrollLeft = startIndex > 0
  const canScrollRight = startIndex + 5 < coins.length

  const scrollLeft = () => {
    if (canScrollLeft) {
      setStartIndex(prev => prev - 1)
    }
  }

  const scrollRight = () => {
    if (canScrollRight) {
      setStartIndex(prev => prev + 1)
    }
  }

  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">{title}</h2>
      <div className="relative">
        <div className="flex gap-4 overflow-hidden">
          {visibleCoins.map((coin) => {
            const isPositive = coin.price_change_24h >= 0
            const color = isPositive ? '#14B079' : '#FF4949'
            
            return (
              <div
                key={coin.id}
                className="w-[252px] p-4 border border-[#E3E3E3] rounded-lg bg-white flex-shrink-0"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={coin.logo}
                    alt={`${coin.name} logo`}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-[16px] text-[#202020]">{coin.symbol}</span>
                  <div 
                    className={`flex items-center gap-1 rounded-sm px-2 py-1 ml-auto transition-colors duration-200 ${
                      isPositive 
                        ? 'bg-[#EBF9F4] text-[#14B079]' 
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {isPositive ? (
                      <ArrowUp className="h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium transition-all duration-200">
                      {coin.price_change_24h === 0 
                        ? '0.00' 
                        : Math.abs(coin.price_change_24h).toFixed(2)}%
                    </span>
                  </div>
                </div>
                
                <div className="text-[20px] font-medium text-[#171717] transition-all duration-200">
                  ${coin.price < 1 
                    ? coin.price.toFixed(6) 
                    : coin.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                </div>
                
                <div className="mt-2 h-[96px]">
                  {coin.sparkline && (
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id={`gradient-${coin.id}`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor={color}
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="100%"
                            stopColor={color}
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d={createSparklinePath(coin.sparkline)}
                        fill="none"
                        stroke={color}
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="transition-all duration-300"
                      />
                      <path
                        d={`${createSparklinePath(coin.sparkline)} L 100,100 L 0,100 Z`}
                        fill={`url(#gradient-${coin.id})`}
                        className="transition-all duration-300"
                      />
                    </svg>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        
        {canScrollLeft && (
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-[#757779]" />
          </button>
        )}
        
        {canScrollRight && (
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-[#757779]" />
          </button>
        )}
      </div>
    </div>
  )
}

interface YouMayLikeProps {
  youMayLike: Coin[]
  trendingCoins: Coin[]
}

export function YouMayLike({ youMayLike, trendingCoins }: YouMayLikeProps) {
  return (
    <div className="w-full bg-white mt-5">
      <div className="max-w-[1328px] mx-auto px-6 py-12 space-y-12">
        <CoinCarousel title="You May Also Like" coins={youMayLike} />
        <CoinCarousel title="Trending Coins" coins={trendingCoins} />
      </div>
    </div>
  )
}

