import React from 'react'
import product1 from '../data/product1.jpg'

const LastBuy = () => {
    let achats = [{
        Type: "affaire de voyage", 
        date: "22 mai 2022",
        montant: "24.99",
        image:product1
    },{
        Type: "affaire de voyage", 
        date: "22 mai 2022",
        montant: "24.99",
        image:product1
    },{
        Type: "affaire de voyage", 
        date: "22 mai 2022",
        montant: "24.99",
        image:product1
    },{
        Type: "affaire de voyage", 
        date: "22 mai 2022",
        montant: "24.99",
        image:product1
    },{
        Type: "affaire de voyage", 
        date: "22 mai 2022",
        montant: "24.99",
        image:product1
    },{
        Type: "affaire de voyage", 
        date: "22 mai 2022",
        montant: "24.99",
        image:product1
    },{
        Type: "affaire de voyage", 
        date: "22 mai 2022",
        montant: "24.99",
        image:product1
    },{
        Type: "affaire de voyage", 
        date: "22 mai 2022",
        montant: "24.99",
        image:product1
    }]
  return (
    <div className='bg-white shadoow rounded-lg h-[500px] flex flex-col max-w-[500px] flex-auto gap-5 px-2 overflow-auto'>
        <h2 className='text-center'>Achats effectués récemment</h2>
        {achats.map((achat)=> (<div className='flex min-w-[300px]'>
            <img src={achat.image} alt={"image de " + achat.Type} className="h-16 w-16 rounded-md"/>
            {achat.Type}
        </div>))}
    </div>
  )
}

export default LastBuy