import { Calendar, TrendingUp, ChevronRight } from 'lucide-react'

export function BitcoinSentiment() {
  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">Sentiment</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <h3 className="text-[20px] font-semibold text-[#0F1629]">
              Key Events
            </h3>
            <div className="w-[20px] h-[20px] rounded-full bg-[#808A9D] flex items-center justify-center cursor-help">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 4V6" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 8H6.01" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-3 overflow-x-auto pb-4 -mb-4">
              <div className="min-w-[456px] bg-[#E8F4FD] rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#0082FF] rounded-full flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h4>
                    <p className="text-sm text-[#3E424A] line-clamp-3">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                  </div>
                </div>
              </div>

              <div className="min-w-[456px] bg-[#EBF9F4] rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#0FBA83] rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h4>
                    <p className="text-sm text-[#3E424A] line-clamp-3">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
              <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-[#757779]" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-5">
            <h3 className="text-[20px] font-semibold text-[#0F1629]">
              Analyst Estimates
            </h3>
            <div className="w-[20px] h-[20px] rounded-full bg-[#808A9D] flex items-center justify-center cursor-help">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 4V6" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 8H6.01" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-[#EBF9F4] flex items-center justify-center">
              <span className="text-[#0FBA83] text-4xl font-semibold">76%</span>
            </div>

            <div className="flex-1 space-y-2">
              {[
                { label: 'Buy', value: 76, color: '#00B386' },
                { label: 'Hold', value: 8, color: '#C7C8CE' },
                { label: 'Sell', value: 16, color: '#F7324C' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="w-8 text-sm text-[#7C7E8C]">{item.label}</span>
                  <div className="h-2 flex-1 flex gap-2 items-center">
                    <div 
                      className="h-full rounded-sm" 
                      style={{ 
                        width: `${item.value}%`,
                        backgroundColor: item.color,
                      }} 
                    />
                  </div>
                  <span className="w-8 text-sm text-[#7C7E8C]">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

