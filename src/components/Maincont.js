import { Link } from 'react-router-dom'
import mainimg from '../assets/coffeeee.avif'
import mainimg1 from '../assets/green img.webp'

function Maincont({coffee}) {
    return (
        <div>
            <div className="flex">

                <img
                    src={mainimg}
                    alt="main image"
                    className="w-[770px] h-[600px]"
                />

                <div className="relative">
                    <img
                        src={mainimg1}
                        alt="green image"
                        className="w-[770px] h-[600px] pt-[50px] "
                    />

                    <h1  className="absolute top-[400px] left-[50px] text-white text-5xl font-bold">
                        BENS ☕
                    </h1>
                    <h1 className='absolute text-orange-600 top-[200px] font-bold text-[40px] left-[50px]'> Brewed with Love, Served with Care.
                        Every Sip Brings a Little Happiness.</h1>
                </div>

            </div>
            <p>{coffee.place}</p>
        </div>
    )
}

export default Maincont