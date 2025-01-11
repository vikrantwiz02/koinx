import { BitcoinCalculatorCards } from './bitcoin-calculator-cards'

export function BitcoinAbout() {
  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">About Bitcoin</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[#0F1629] mb-4">What is Bitcoin?</h3>
          <p className="text-[#3E424A] text-base leading-7">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="border-t border-[#C9CFDD99] pt-6">
          <h3 className="text-xl font-semibold text-[#0F1629] mb-4">Lorem ipsum dolor sit amet</h3>
          <div className="space-y-4">
            <p className="text-[#3E424A] text-base leading-7">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            </p>
            <p className="text-[#3E424A] text-base leading-7">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
            </p>
            <p className="text-[#3E424A] text-base leading-7">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
          </div>
        </div>

        <div className="border-t border-[#C9CFDD99] pt-6">
          <h3 className="text-xl font-semibold text-[#0F1629] mb-6">Already Holding Bitcoin?</h3>
          <BitcoinCalculatorCards />
        </div>

        <div className="border-t border-[#C9CFDD99] pt-6">
          <p className="text-[#3E424A] text-base leading-7">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  )
}

