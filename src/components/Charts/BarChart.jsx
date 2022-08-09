import React from 'react'


const BarChart = () => {
  var mois = ['jan', 'fev', 'mars', 'avril', 'mai', 'juin', 'juil', 'aout', 'sept', 'oct', 'nov', 'dec']

  var revenu = ['0','0','1200','0','0','0','294','3','0','500','0','3',]
  var z = ['0','0','0','0','0','0','100','3','0','3','0','3','0',]
  var w = ['0','0','0','0','0','0','194','3','0','3','0','3','0',]
  let totalHeight = 0.8 * 500
  let height = (600*totalHeight) / 1200
  console.log(height)
  let config = { responsive: true}
  
  return (
        <div className="w-[1500px] h-[500px] bg-red-50 relative mx-auto my-11 rounded-xl">
          <div className=' h-[80%] w-[80%] relative top-[10%] left-[10%] border-black border-b'>
            <div className='relative flex justify-between top-full'>
              {mois.map((item) => (
                <div className='relative top-full h-fit w-10 text-center'>{item}</div>
              ))}
            </div>
            <div className='absolute flex justify-between w-full bottom-0 z-10 -scale-y-100'>
              {revenu.map((item) => (
                <div className='relative top-full w-10 text-center bg-red-600' style={{height:(item*totalHeight) / 1200+'px'}}>
                </div>
              ))}
            </div>

            {/* range */}
            <div className='absolute top-[calc(100%-12px)] -left-12 h-fit w-10 text-right'>0</div>
            <div className='absolute top-[calc(75%-12px)] -left-12 h-fit w-10 text-right'>300</div>
            <div className='absolute top-[calc(50%-12px)] -left-12 h-fit w-10 text-right'>600</div>
            <div className='absolute top-[calc(25%-12px)] -left-12 h-fit w-10 text-right'>900</div>
            <div className='absolute top-[-12px] -left-12 h-fit w-10 text-right'>1200</div>
            
            {/* line */}

            <div className='absolute top-[75%]  h-[2px] w-full bg-[#D1D1D1] text-right'></div>
            <div className='absolute top-[50%]  h-[2px] w-full bg-[#D1D1D1] text-right'></div>
            <div className='absolute top-[25%]  h-[2px] w-full bg-[#D1D1D1] text-right'></div>
            <div className='absolute top-0  h-[2px] w-full bg-[#D1D1D1] text-right'></div>


          </div>
        </div>        

  )
}

export default BarChart