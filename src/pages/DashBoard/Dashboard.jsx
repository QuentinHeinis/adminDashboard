import React from 'react'
import { TrendingDownIcon, TrendingUpIcon, LibraryIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { BarChart } from '../../components'

// import { useStateContext } from '../../contexts/ContextProvider'clea
const MoneyCard = ({mainColor, lightColor, darkColor, icon, title, text}) => (<div className='w-full h-64 rounded-xl flex flex-col overflow-hidden'>
  <div className='h-1/2 items-center flex pl-5 relative' style={{backgroundColor:mainColor}}>
    <p className='text-white text-2xl relative z-10'>
      {title}
    </p>
    <span className='h-32 w-32 rounded-full absolute -top-8 -right-4' style={{backgroundColor: darkColor}}></span>
    <span className='h-20 w-20 rounded-full absolute -top-8 right-16' style={{backgroundColor: lightColor}}></span>
    <div className='absolute top-5 right-5 text-white'>
      <span className='px-1 py-[2px]'>Mois</span>
      <span className='px-1 py-[2px]'>Année</span>
      <span className='px-1 py-[2px]'>Total</span>
    </div>
  </div>
  <div className='h-1/2 bg-white flex items-center px-5 gap-6' style={{color:mainColor}}>
    <p className='text-4xl font-semibold'>{text}€</p>
    {icon}
  </div>
</div>)

const Dashboard = () => {
  
  return (
    <div className='py-12 px-10'>
      <div className='flex justify-between mb-16'>
        <h1>Dashboard</h1> 
        <span className='flex items-center gap-3'>
          Ajouter une transaction <PlusCircleIcon className='h-5 w-5'/>
        </span>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9 flex-wrap gap-y-4'>
        <MoneyCard mainColor='#367FB4' darkColor='#245578' lightColor='#6AA6D1' text='1250' title='Total revenus' icon={<TrendingUpIcon className='h-10 w-10'/>}></MoneyCard>
        <MoneyCard mainColor='#7B214C' darkColor='#4E0E2C' lightColor='#B95284' text='1250' title='Total dépenses' icon={<TrendingDownIcon className='h-10 w-10'/>}></MoneyCard>
        <MoneyCard mainColor='#39B436' darkColor='#0D540B' lightColor='#85DB83' text='1250' title='Total économies' icon={<LibraryIcon className='h-10 w-10'/>}></MoneyCard>
      </div>
      <div className='h-fit'>
        <BarChart className="w-full h-[400px]"/>
      </div>
    </div>
  )
}

export default Dashboard