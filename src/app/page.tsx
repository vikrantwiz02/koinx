import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { BitcoinPrice } from '@/components/bitcoin-price'
import { TradingViewChart } from '@/components/trading-view-chart'
import { GetStarted } from '@/components/get-started'
import { TrendingCoins } from '@/components/trending-coins'
import { BitcoinTabs } from '@/components/bitcoin-tabs'
import { BitcoinPerformance } from '@/components/bitcoin-performance'
import { BitcoinSentiment } from '@/components/bitcoin-sentiment'
import { BitcoinAbout } from '@/components/bitcoin-about'
import { BitcoinTokenomics } from '@/components/bitcoin-tokenomics'
import { BitcoinTeam } from '@/components/bitcoin-team'
import { YouMayLike } from '@/components/you-may-like'
import { getBitcoinPrice, getTrendingCoins, getTrendingCoinsDetailed, getYouMayLike } from '@/lib/api'

export default async function Home() {
  const [bitcoinPrice, trendingCoins, trendingCoinsDetailed, youMayLike] = await Promise.all([
    getBitcoinPrice(),
    getTrendingCoins(),
    getTrendingCoinsDetailed(),
    getYouMayLike()
  ])

  return (
    <main className="bg-[#EFF2F5] min-h-screen">
      <Header />
      <div className="pt-[72px]">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb
            items={[
              {
                label: "Cryptocurrencies",
                href: "/cryptocurrencies",
              },
              {
                label: "Bitcoin",
                href: "/cryptocurrencies/bitcoin",
                isActive: true,
              },
            ]}
          />
          
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <BitcoinPrice data={bitcoinPrice} />
                <div className="mt-6">
                  <TradingViewChart />
                </div>
              </div>
              
              <BitcoinTabs />
              <BitcoinPerformance />
              <BitcoinSentiment />
              <BitcoinAbout />
              <BitcoinTokenomics />
              <BitcoinTeam />
            </div>
            
            <div className="hidden lg:flex lg:col-span-1 space-y-5 flex-col">
              <GetStarted />
              <TrendingCoins data={trendingCoins} />
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-5 mt-5">
          <YouMayLike youMayLike={youMayLike} trendingCoins={trendingCoinsDetailed} />
          <div className="px-4">
            <GetStarted />
            <div className="mt-5">
              <TrendingCoins data={trendingCoins} />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <YouMayLike youMayLike={youMayLike} trendingCoins={trendingCoinsDetailed} />
        </div>
      </div>
    </main>
  )
}

