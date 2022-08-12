import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {NavBar, Footer, SideBar, ThemeSettings } from './components'
import { Materiels, Photos, Sorties, DashBoard, GestionBudget, FriendlySport, SuihiraBoutique, Calendrier, Todo, ManualTransaction} from './pages'

import './App.css'

import { useStateContext } from './contexts/ContextProvider'

const App = () => {
    const { activeMenu } = useStateContext();
  return (
    <div>
        <BrowserRouter>
            <div className='flex relative font-inter'>
                {activeMenu ? (
                    <div className='w-72 fixed z-50'>
                        <SideBar/>
                    </div>
                ) : (
                    <div className='w-0'>
                        <SideBar/>
                    </div>
                )}
                <div className={
                    `dark:bg-slate-50 bg-slate-50 min-h-screen w-full ${activeMenu ?
                        'md:ml-72' : 'flex-1'}` 
                    }>
                        <div className='sticky top-0 z-50 bg-slate-50 shadow-md shadow-[#99999910]'>
                            <NavBar />
                        </div>

                
                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={<DashBoard/>}/>
                            <Route path="/gestion" element={<GestionBudget/>}/>
                            <Route path="/transaction" element={<ManualTransaction/>}/>

                            {/* Utilitaires */}
                            <Route path="/calendrier" element={<Calendrier/>}/>
                            <Route path="/todo" element={<Todo/>}/>

                            {/* Gestion de sites */}
                            <Route path="/friendlysport" element={<FriendlySport/>}/>
                            <Route path="/Suihira-boutique" element={<SuihiraBoutique/>}/>

                            {/* Escalade */}
                            <Route path="/matos" element={<Materiels/>}/>
                            <Route path="/sorties" element={<Sorties/>}/>
                            <Route path="/photos" element={<Photos/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App