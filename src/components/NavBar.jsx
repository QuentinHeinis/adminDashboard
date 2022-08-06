import React, { useEffect } from 'react'
import { MenuAlt2Icon, BellIcon, CogIcon } from "@heroicons/react/outline";

import avatar from '../data/product1.jpg'
import { Notification, UserProfile, Settings } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({customFunc, icon, color, dotColor}) => (<button type='button' onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-slate-50" >
  <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
    {icon}
</button>)

const NavBar = () => {
  const { activeMenu , setActiveMenu, handleClick, isClicked,  setIsClicked, screenSize, setScreenSize} = useStateContext()
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2  relative bg-white'>

      <NavButton customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="black" icon={<MenuAlt2Icon className='h-6'/>}/>
      <div className='flex'>
        <NavButton dotColor="red" customFunc={() => handleClick('notification')} color="black" icon={<BellIcon className='h-6'/>}/>
        <NavButton customFunc={() => handleClick('setting')} color="black" icon={<CogIcon className='h-6'/>}/>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-slate-50 rounded-lg' onClick={() => handleClick('userProfile')}>
          <img src={avatar} className="rounded-full w-8 h-8"/>
          <p>
            <span className='text-gray-400 text-sm'>Hi, </span>{' '}
            <span className='text-gray-400 text-sm ml-1 font-bold'>Quentin</span>
          </p>
        </div>
        {isClicked.notification && <Notification/>}
        {isClicked.setting && <Settings/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default NavBar