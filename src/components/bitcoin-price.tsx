'use client'

import Image from 'next/image'
import { ArrowUp, ArrowDown } from 'lucide-react'
import { type BitcoinPriceResponse } from '@/types/api'

interface BitcoinPriceProps {
  data: BitcoinPriceResponse
}

export function BitcoinPrice({ data }: BitcoinPriceProps) {
  const { bitcoin } = data
  const isPositive = bitcoin.usd_24h_change > 0

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src="/bitcoin.svg"
          alt="Bitcoin"
          width={32}
          height={32}
          className="rounded-full"
        />
        <h1 className="text-[24px] font-semibold text-[#0F1629]">Bitcoin</h1>
        <span className="text-[16px] text-[#5D667B]">BTC</span>
        <span className="ml-auto rounded-lg bg-[#808A9D] px-3 py-2 text-[16px] text-white">
          Rank #1
        </span>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-4">
          <span className="text-[28px] sm:text-[48px] font-semibold text-[#0F1629]">
            ${bitcoin.usd.toLocaleString()}
          </span>
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 rounded-sm ${
              isPositive ? 'bg-[#EBF9F4] text-[#14B079]' : 'bg-red-100 text-red-500'
            } px-2 py-1`}>
              {isPositive ? (
                <ArrowUp className="h-5 w-5" />
              ) : (
                <ArrowDown className="h-5 w-5" />
              )}
              <span className="text-[16px] font-medium">
                {Math.abs(bitcoin.usd_24h_change).toFixed(2)}%
              </span>
            </div>
            <span className="text-[14px] text-[#5D667B]">(24H)</span>
          </div>
        </div>
        <span className="text-[16px] sm:text-[24px] text-[#5D667B]">
          ₹{bitcoin.inr.toLocaleString()}
        </span>
      </div>

      <div className="h-[1px] bg-[#DEE1E6] my-4" />

      <div className="border-t border-[#DEE1E6] pt-4">
        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#0F1629] mb-4">
          Bitcoin Price Chart (USD)
        </h2>
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {['1H', '24H', '7D', '1M', '3M', '6M', '1Y', 'ALL'].map((period) => (
            <button
              key={period}
              className={`text-[14px] font-medium whitespace-nowrap ${
                period === '7D'
                  ? 'text-[#0141CF] bg-[#E2ECFE] rounded-full px-3 py-1'
                  : 'text-[#5D667B] hover:text-[#0141CF]'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

