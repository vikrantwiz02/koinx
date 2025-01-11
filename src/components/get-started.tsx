import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function GetStarted() {
  return (
    <div className="rounded-2xl bg-[#0052FE] p-8 text-center text-white">
      <h2 className="text-[24px] font-bold leading-[40px] mb-4">
        Get Started with KoinX<br />for FREE
      </h2>
      
      <p className="text-[14px] leading-[24px] mb-8">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
      </p>

      <div className="flex justify-center mb-8">
        <Image
          src="get-started.svg"
          alt="KoinX Features Illustration"
          width={178}
          height={166}
          className="h-auto w-auto"
        />
      </div>

      <Link 
        href="/get-started"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[16px] font-semibold text-black transition-transform hover:scale-105"
      >
        Get Started for FREE
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  )
}

