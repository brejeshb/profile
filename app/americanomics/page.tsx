import React from 'react'
import Map from './map'
import { Button } from '../components/neobrutalism/button'

const Americanomics = () => {
  return (
    <div className="w-full flex flex-col bg-bg bg-dot-pattern min-h-screen">

      {/* Header */}
      <header className="px-8 pt-10 pb-8">
        <h1 className="text-8xl font-black leading-tight">
          Americanomics
        </h1>
        <p className="text-2xl mt-4 opacity-70">
          The study of Americano prices in South Korea
        </p>
      </header>

      {/* Main content */}
      <main className="flex flex-col gap-8 px-8 pb-8">

        {/* Top row: Map + right column */}
        <div className="flex flex-row gap-6">

          {/* Map - 1/3 */}
          <div className="w-1/3 min-w-0 h-[512px]">
            <div className="bg-white p-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] h-full">
              <Map />
            </div>
          </div>

          {/* Right column - 2/3 */}
          <div className="w-2/3 flex flex-col gap-6 min-w-0">

            {/* Button row */}
            <div className="flex flex-row gap-4">
              <Button variant="default" className="flex-1 justify-start h-1/7">
                <div className="flex flex-col text-left gap-1">
                  <span className="text-lg font-bold">Price</span>
                  <span className="text-sm opacity-70">
                    Mean Americano Price
                  </span>
                </div>
              </Button>

              <Button variant="default" className="flex-1 justify-start h-1/7">
                <div className="flex flex-col text-left gap-1">
                  <span className="text-lg font-bold">Distribution</span>
                  <span className="text-sm opacity-70">
                    Price spread by region
                  </span>
                </div>
              </Button>

              <Button variant="default" className="flex-1 justify-start h-1/7">
                <div className="flex flex-col text-left gap-1">
                  <span className="text-lg font-bold">Regional View</span>
                  <span className="text-sm opacity-70">
                    Province-level averages
                  </span>
                </div>
              </Button>
            </div>

            {/* Charts container */}
            <div className=''>
              <div className="bg-white p-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] h-[50vh]">
                CHARTS
                    <iframe
                      src="chart_price_dist.html"
                      className="w-full h-full"
                      style={{ border: 'none'}}
                      title="Korea Coffee map"
                    />
              </div>
            </div>

          </div>
        </div>

        {/* Additional charts row */}
        <div className="flex flex-row gap-6">
          <div className="">
            <div className="bg-white p-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] h-[50vh] w-[180vh]">
              CHARTS



                    <iframe
                      src="chart_city_boxplot.html"
                      className="w-full h-full"
                      style={{ border: 'none' }}
                      title="Korea Coffee map"
                    />

            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Americanomics
