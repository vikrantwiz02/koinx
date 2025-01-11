'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center">
            <Image
              src="coinx.svg"
              alt="KoinX Logo"
              width={150}
              height={112}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/crypto-taxes" 
              className="text-[16px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Crypto Taxes
            </Link>
            <Link 
              href="/free-tools"
              className="text-[16px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Free Tools
            </Link>
            <Link 
              href="/resource-center"
              className="text-[16px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Resource Center
            </Link>
            <Button 
              asChild
              className="bg-[#0052FE] hover:bg-blue-700 text-white rounded-lg px-6 py-2 ml-4"
            >
              <Link href="/get-started">
                Get Started
              </Link>
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-900" />
          </button>
        </nav>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/crypto-taxes" 
              className="block text-[16px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Crypto Taxes
            </Link>
            <Link 
              href="/free-tools"
              className="block text-[16px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Free Tools
            </Link>
            <Link 
              href="/resource-center"
              className="block text-[16px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Resource Center
            </Link>
            <Button 
              asChild
              className="w-full bg-[#0052FE] hover:bg-blue-700 text-white rounded-lg px-6 py-2"
            >
              <Link href="/get-started">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

