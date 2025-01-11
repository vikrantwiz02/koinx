'use client'

declare global {
  interface Window {
    TradingView: any;
  }
}

import { useEffect } from 'react'

export function TradingViewChart() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'BITSTAMP:BTCUSD',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: false,
          container_id: 'tradingview_chart',
          height: 500,
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      <div id="tradingview_chart" className="h-[500px]" />
    </div>
  )
}

