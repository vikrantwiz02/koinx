export function BitcoinTokenomics() {

    const radius = 40
    const circumference = 2 * Math.PI * radius
    const crowdsalePercent = 80
    const foundationPercent = 20
    
    const crowdsaleLength = (crowdsalePercent / 100) * circumference
    const foundationLength = (foundationPercent / 100) * circumference
  
    return (
      <div className="bg-white rounded-lg p-6 mt-5">
        <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">Tokenomics</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">Initial Distribution</h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="relative w-[250px] h-[250px]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#0082FF"
                    strokeWidth="20"
                    strokeDasharray={`${crowdsaleLength} ${circumference - crowdsaleLength}`}
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#FFA000"
                    strokeWidth="20"
                    strokeDasharray={`${foundationLength} ${circumference - foundationLength}`}
                    strokeDashoffset={-crowdsaleLength}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
  
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0082FF]" />
                  <span className="text-base text-[#1E1E1E]">Crowdsale investors: 80%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FFA000]" />
                  <span className="text-base text-[#1E1E1E]">Foundation: 20%</span>
                </div>
              </div>
            </div>
  
            <p className="text-base text-[#3E424A] leading-7">
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  