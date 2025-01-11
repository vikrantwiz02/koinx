import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function BitcoinCalculatorCards() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="rounded-lg overflow-hidden bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD]">
        <div className="p-6 flex items-center gap-6">
          <Image
            src="/profits.svg"
            alt="Calculate your profits"
            width={128}
            height={128}
            className="rounded-lg w-24 h-24 sm:w-32 sm:h-32 object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Calculate your Profits
            </h4>
            <Link 
              href="/calculate-profits"
              className="inline-flex items-center gap-2 bg-white text-black rounded-lg px-4 py-2 font-medium hover:bg-opacity-90 transition-colors"
            >
              <span className="whitespace-nowrap">Check Now</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden bg-gradient-to-br from-[#FF9865] to-[#EF3031]">
        <div className="p-6 flex items-center gap-6">
          <Image
            src="tax-liability.svg"
            alt="Calculate your tax liability"
            width={128}
            height={128}
            className="rounded-lg w-24 h-24 sm:w-32 sm:h-32 object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Calculate your tax liability
            </h4>
            <Link 
              href="/calculate-tax"
              className="inline-flex items-center gap-2 bg-white text-black rounded-lg px-4 py-2 font-medium hover:bg-opacity-90 transition-colors"
            >
              <span className="whitespace-nowrap">Check Now</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

