import React from 'react'
import { useParams } from 'react-router-dom'
import foodimg from '../../assets/cartoon.avif'

export default function About() {
  
    let { btn } = useParams()
    console.log("btn",btn)

    const coffeeData = [
        {
            id: 1,
            name: "Cappuccino",
            category: "Hot Coffee",
            price: 120,
            description: "Rich espresso with steamed milk and creamy foam.",
            rating: 4.8,
            size: "Medium",
            image: "/images/cappuccino.jpg"
        },
        {
            id: 2,
            name: "Cafe Latte",
            category: "Hot Coffee",
            price: 140,
            description: "Smooth espresso blended with steamed milk.",
            rating: 4.7,
            size: "Large",
            image: "/images/latte.jpg"
        },
        {
            id: 3,
            name: "Americano",
            category: "Hot Coffee",
            price: 100,
            description: "Classic espresso mixed with hot water.",
            rating: 4.5,
            size: "Medium",
            image: "/images/americano.jpg"
        },
        {
            id: 4,
            name: "Mocha",
            category: "Hot Coffee",
            price: 160,
            description: "Chocolate flavored coffee with steamed milk.",
            rating: 4.9,
            size: "Large",
            image: "/images/mocha.jpg"
        },
        {
            id: 5,
            name: "Cold Coffee",
            category: "Cold Coffee",
            price: 150,
            description: "Refreshing chilled coffee with creamy milk.",
            rating: 4.6,
            size: "Large",
            image: "/images/coldcoffee.jpg"
        },
        {
            id: 6,
            name: "Cold Mocha",
            category: "Cold Coffee",
            price: 170,
            description: "Cold coffee blended with chocolate and ice.",
            rating: 4.8,
            size: "Large",
            image: "/images/coldmocha.jpg"
        },
        {
            id: 7,
            name: "Espresso",
            category: "Hot Coffee",
            price: 90,
            description: "Strong and rich concentrated coffee.",
            rating: 4.7,
            size: "Small",
            image: "/images/espresso.jpg"
        },
        {
            id: 8,
            name: "Caramel Macchiato",
            category: "Special Coffee",
            price: 180,
            description: "Espresso with steamed milk and caramel flavor.",
            rating: 4.9,
            size: "Large",
            image: "/images/caramel.jpg"
        },
        {
            id: 9,
            name: "Chocolate Milkshake",
            category: "Milkshake",
            price: 160,
            description: "Thick and creamy chocolate milkshake.",
            rating: 4.6,
            size: "Large",
            image: "/images/chocolate.jpg"
        },
        {
            id: 10,
            name: "Vanilla Milkshake",
            category: "Milkshake",
            price: 150,
            description: "Sweet and creamy vanilla flavored milkshake.",
            rating: 4.5,
            size: "Large",
            image: "/images/vanilla.jpg"
        }
    ];
    const currentdata = coffeeData.find(pro => pro.name === btn)
    return (
        <div className='flex gap-[200px]'>
            <div >
                <h1>{currentdata.id}</h1>
                <h1>{currentdata.name}</h1>
                <h1>{currentdata.category}</h1>
                <h1>{currentdata.price}</h1>
                <h1>{currentdata.description}</h1>
                <h1>{currentdata.rating}</h1>
            </div>
            <div className='w-[300px]'>
                <img src={foodimg} alt='drink'/>
    </div>
        </div>
   
  )
}
