'use client'

const tabs = [
  'Overview',
  'Fundamentals',
  'News Insights',
  'Sentiments',
  'Team',
  'Technicals',
  'Tokenomics'
]

export function BitcoinTabs() {
  return (
    <div className="border-b border-[#DEE1E6] mb-6">
      <div className="flex overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-6 py-4 text-[16px] font-medium whitespace-nowrap border-b-2 ${
              index === 0
                ? 'text-[#0141CF] border-[#0141CF]'
                : 'text-[#3E424A] border-transparent hover:text-[#0141CF]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

