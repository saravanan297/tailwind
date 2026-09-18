import React from 'react'
import { useNavigate } from 'react-router-dom';
import saranimg from '../../assets/Food.jpg'
export default function Items() {
 
 const y = useNavigate()
    const coffeeData = [
        [
            {
                id: 1,
                name: "Cappuccino",
                category: "Hot Coffee",
                price: 120,
                description: "Rich espresso with steamed milk and creamy foam.",
                rating: 4.8,
                size: "Medium",
                image: "saranimg"
            },
            {
                id: 2,
                name: "Cafe Latte",
                category: "Hot Coffee",
                price: 140,
                description: "Smooth espresso blended with steamed milk.",
                rating: 4.7,
                size: "Large",
                image: "saranimg"
            },
            {
                id: 3,
                name: "Americano",
                category: "Hot Coffee",
                price: 100,
                description: "Classic espresso mixed with hot water.",
                rating: 4.5,
                size: "Medium",
                image: "saranimg"
            },
            {
                id: 4,
                name: "Mocha",
                category: "Hot Coffee",
                price: 160,
                description: "Chocolate flavored coffee with steamed milk.",
                rating: 4.9,
                size: "Large",
                image: "saranimg"
            },
            {
                id: 5,
                name: "Cold Coffee",
                category: "Cold Coffee",
                price: 150,
                description: "Refreshing chilled coffee with creamy milk.",
                rating: 4.6,
                size: "Large",
                image: "saranimg"

            }
        ],

        [
            {
                id: 6,
                name: "Cold Mocha",
                category: "Cold Coffee",
                price: 170,
                description: "Cold coffee blended with chocolate and ice.",
                rating: 4.8,
                size: "Large",
                image: "saranimg"
            },
            {
                id: 7,
                name: "Espresso",
                category: "Hot Coffee",
                price: 90,
                description: "Strong and rich concentrated coffee.",
                rating: 4.7,
                size: "Small",
                image: "saranimg"
            },
            {
                id: 8,
                name: "Caramel Macchiato",
                category: "Special Coffee",
                price: 180,
                description: "Espresso with steamed milk and caramel flavor.",
                rating: 4.9,
                size: "Large",
                image: "saranimg"
            },
            {
                id: 9,
                name: "Chocolate Milkshake",
                category: "Milkshake",
                price: 160,
                description: "Thick and creamy chocolate milkshake.",
                rating: 4.6,
                size: "Large",
                image: "saranimg"
            },
            {
                id: 10,
                name: "Vanilla Milkshake",
                category: "Milkshake",
                price: 150,
                description: "Sweet and creamy vanilla flavored milkshake.",
                rating: 4.5,
                size: "Large",
                image: "saranimg"
            }
        ]
    ];
    



    return (
        <div className='bg-orange-600 mt-6 '>
            <div className='flex pt-3'>
                <h1 className='font-bold pl-5 font-serif text-[20px]'>Food Shop 🍜</h1>
                <div className='gap-6 pt-'>
                    <nav className='pl-[800px] font-bold font-extrabold  space-x-[70px]  '>
                        <a href='#'>Home</a>
                        <a href='#'>About</a>
                        <a href='#'>Edit</a>
                        <a href='#'>Exit</a>
                        <button className='bg-blue-400 rounded-2xl w-[80px]'> Contact</button>


                    </nav>
            </div>
            
</div>


            <div className='flex pt-1' >
                {
                    coffeeData[0].map((pro, i) => {
                        return (
                            <div className='bg-teal-300 p-3 m-3 cursor-pointer'
                                onClick={() => y(`/Items/${pro.name}`)}>
                                <img src={saranimg} alt='food' />
                                <h1 className='font-bold'>{pro.name}</h1>
                                <p className='pt-2 font-normal'>{pro.description}</p>
                                <div className='pt-3 pl-[150px]'>
                                    <button className='bg-lime-400 rounded-md text-[15px] w-[100px]'>Add cort</button></div>
                            </div>
                        )
                    })




                }
            </div>

            <div className='flex' >
                {
                    coffeeData[1].map((pro, i) => {
                        return (
                            <div className='bg-teal-300 p-3 m-3 cursor-pointer'
                                onClick={() => y(`/Items/${pro.name}`)}>
                                <img src={saranimg} alt='food' />
                                <h1 className='font-bold'>{pro.name}</h1>
                                <p className='pt-2 font-normal'>{pro.description}</p>
                                <div className='pt-3 pl-[150px]'>
                                    <button className='bg-lime-400 rounded-md text-[15px] w-[100px]'>Add cort</button></div>
                            </div>
                        )
                    })




                }
            </div>

        </div>
        
        
    )
}





    


