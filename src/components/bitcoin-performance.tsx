import { getBitcoinDetails } from "@/lib/api"

interface PriceRangeProps {
    low: number
    high: number
    current: number
    label: string
    highLabel: string
  }
  
  function PriceRange({ low, high, current, label, highLabel }: PriceRangeProps) {
    const safeHigh = high || current
    const safeLow = low || current
    const percentage = safeLow === safeHigh ? 50 : ((current - safeLow) / (safeHigh - safeLow)) * 100
    
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
  
    return (
      <div className="flex flex-col gap-5">
        <div className="flex justify-between text-[#44475B] text-[15px]">
          <span>{label}</span>
          <span>{highLabel}</span>
        </div>
        <div className="relative">
          <div className="h-[4px] bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] rounded-lg" />
          <div
            className="absolute top-0 transform -translate-x-1/2"
            style={{ left: `${clampedPercentage}%` }}
          >
            <div className="w-[10px] h-[10px] -mt-[3px] rotate-45 bg-black" />
            <div className="absolute top-[12px] whitespace-nowrap text-center w-[100px] -left-[50px]">
              <span className="text-[#44475B] text-[15px]">${current.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex justify-between mt-7">
            <span className="text-[#44475B] text-[15px]">${safeLow.toLocaleString()}</span>
            <span className="text-[#44475B] text-[15px]">${safeHigh.toLocaleString()}</span>
          </div>
        </div>
      </div>
    )
  }
  
  export async function BitcoinPerformance() {
    const data = await getBitcoinDetails()
    
    const safeData = {
      current_price: data?.current_price || 0,
      low_24h: data?.low_24h || 0,
      high_24h: data?.high_24h || 0,
      low_52w: data?.low_52w || 0,
      high_52w: data?.high_52w || 0,
      total_volume: data?.total_volume || 0,
      market_cap: data?.market_cap || 0,
      market_cap_rank: data?.market_cap_rank || 1,
      market_cap_dominance: data?.market_cap_dominance || 0,
      ath: data?.ath || 0,
      atl: data?.atl || 0,
    }
  
    return (
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-[24px] font-semibold text-[#0F1629] mb-8">Performance</h2>
        
        <div className="space-y-12">
          <PriceRange
            low={safeData.low_24h}
            high={safeData.high_24h}
            current={safeData.current_price}
            label="Today's Low"
            highLabel="Today's High"
          />
          <PriceRange
            low={safeData.low_52w}
            high={safeData.high_52w}
            current={safeData.current_price}
            label="52W Low"
            highLabel="52W High"
          />
        </div>
  
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-5">
            <h3 className="text-[20px] font-semibold text-[#0F1629]">
              Fundamentals
            </h3>
            <div className="w-[20px] h-[20px] rounded-full bg-[#808A9D] flex items-center justify-center cursor-help">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 4V6" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 8H6.01" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-[50px]">
            <div>
              {[
                { label: 'Bitcoin Price', value: `$${safeData.current_price.toLocaleString()}` },
                { label: '24h Low / 24h High', value: `$${safeData.low_24h.toLocaleString()} / $${safeData.high_24h.toLocaleString()}` },
                { label: '7d Low / 7d High', value: `$${safeData.low_24h.toLocaleString()} / $${safeData.high_24h.toLocaleString()}` },
                { label: 'Trading Volume', value: `$${safeData.total_volume.toLocaleString()}` },
                { label: 'Market Cap Rank', value: `#${safeData.market_cap_rank}` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between py-[14px] border-b border-[#DEE1E6] last:border-0">
                  <span className="text-[#768396] text-[14px]">{label}</span>
                  <span className="text-[#111827] text-[14px]">{value}</span>
                </div>
              ))}
            </div>
            <div>
              {[
                { label: 'Market Cap', value: `$${safeData.market_cap.toLocaleString()}` },
                { label: 'Market Cap Dominance', value: `${safeData.market_cap_dominance.toFixed(2)}%` },
                { label: 'Volume / Market Cap', value: (safeData.total_volume / safeData.market_cap || 0).toFixed(4) },
                { 
                  label: 'All-Time High', 
                  value: (
                    <div className="text-right">
                      <div className="text-[14px] text-[#111827]">
                        ${safeData.ath.toLocaleString()} <span className="text-[#F7324C]">-75.6%</span>
                      </div>
                      <div className="text-[12px] text-[#768396]">
                        Nov 10, 2021 (about 1 year)
                      </div>
                    </div>
                  )
                },
                { 
                  label: 'All-Time Low', 
                  value: (
                    <div className="text-right">
                      <div className="text-[14px] text-[#111827]">
                        ${safeData.atl.toLocaleString()} <span className="text-[#0FBA83]">24729.1%</span>
                      </div>
                      <div className="text-[12px] text-[#768396]">
                        Jul 06, 2013 (over 9 years)
                      </div>
                    </div>
                  )
                },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between py-[14px] border-b border-[#DEE1E6] last:border-0">
                  <span className="text-[#768396] text-[14px]">{label}</span>
                  <div>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  