import React from 'react'


const BarChart = () => {

  var mois = ['jan', 'fev', 'mars', 'avril', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'dec']
  var economies = [0,0,0,0,0,0,100,3,50,3,0,50]
  var depenses = [100,100,100,100,100,50,100,3,100,3,100,50]
  var revenu = economies.map((economies, i) => {
    return depenses[i] + economies
  })
  let revenuMax = Math.max(...revenu)
  

  let maxValue = (revenuMax%10 ==! 0) ? (revenuMax + 50 - (revenuMax%50)) : (revenuMax)
  


  let totalHeight = 0.7 * 500
  
  return (
 
          <div className='mx-auto my-11 overflow-x-auto shadoow rounded-xl max-w-fit'>
            <div className="w-[1000px] h-[500px] bg-white relative rounded-xl  ">
              <h2 className='absolute w-full text-center font-semibold text-lg pt-6'>Gestion du budget sur les 12 derniers mois</h2>
              <div className=' h-[70%] w-[80%] relative top-[15%] left-[10%] border-black border-b'>
                <div className='relative flex justify-between top-full'>
                  {mois.map((item) => (
                    <div className='relative top-full h-fit w-10 text-center font-semibold first-letter:uppercase' key={item}>{item}</div>
                  ))}
                </div>
                <div className='absolute flex justify-between w-full bottom-0 z-10 items-end'>
                  {depenses.map((item, i) => (
                    <div key={i} className='relative top-full w-10 text-center bg-red-600 bar flex flex-col rounded-sm' >
                      <span className='bg-[#39B436] w-full' style={{height:economies[i]*totalHeight / maxValue +'px'}}></span>
                      <span className='bg-[#7B214C] w-full' style={{height:item*totalHeight / maxValue +'px'}}></span>
                      <div className='shadoow'>
                        <p>revenus : {item + economies[i]}</p>
                        <p>dépenses : {item}</p>
                        <p>économies : {economies[i]}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* range */}
                <div className='absolute top-[calc(100%-12px)] -left-12 h-fit w-10 text-right'>0</div>
                <div className='absolute top-[calc(75%-12px)] -left-12 h-fit w-10 text-right'>{1/4 *maxValue}</div>
                <div className='absolute top-[calc(50%-12px)] -left-12 h-fit w-10 text-right'>{2/4 *maxValue}</div>
                <div className='absolute top-[calc(25%-12px)] -left-12 h-fit w-10 text-right'>{3/4 *maxValue}</div>
                <div className='absolute top-[-12px] -left-12 h-fit w-10 text-right'>{maxValue}</div>
              
                {/* line */}
                <div className='absolute top-[calc(75%-2px)]  h-[2px] w-full bg-[#D1D1D1] text-right'></div>
                <div className='absolute top-[calc(50%-2px)]  h-[2px] w-full bg-[#D1D1D1] text-right'></div>
                <div className='absolute top-[calc(25%-2px)]  h-[2px] w-full bg-[#D1D1D1] text-right'></div>
                <div className='absolute -top-[2px]  h-[2px] w-full bg-[#D1D1D1] text-right'></div>
              </div>
              <div className='w-full flex justify-center gap-10 absolute bottom-0 pb-3'>
                <p className='flex gap-2'><span className='h-5 w-5 bg-[#7B214C]'></span>Dépenses</p>
                <p className='flex gap-2'><span className='h-5 w-5 bg-[#39B436]'></span>Economies</p>
              </div>
            </div>
          </div> 
   

  )
}

export default BarChart