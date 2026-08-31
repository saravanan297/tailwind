import Menuimg from '../assets/coffeeee.avif'
function Menu (){
    return(
        <div className=' bg-green-900 mt-[10px]'>
            <div className="max-w-[900px] ml-[300px]">
                <h1 className="text-[30px] font-bold pt-[20px] text-white">Menu</h1>
                <p className="pt-[10px] text-white">Freshly Brewed, Made with Love.
                    Rich Aroma in Every Cup.
                    Warm Moments, Perfectly Served.
                    Take a Sip, Feel the Joy.
                    Your Happy Place for Great Coffee. 
                    Where Coffee Meets Comfort.
                    Fresh Beans, Rich Flavors.
                    Every Cup Tells a Story.
                    .Your Daily Dose of Happiness.
                    Crafted Fresh, Served Warm.
                    Made for Coffee Lovers 🤎.</p>
            </div>
    <div className='flex'>
                <div className='ml-[300px] mt-[30px] '>
                    <p className='font-bold text-[  30px] '>Food </p>
                    <img src={Menuimg} alt='menu image ' className='w-[200px] h-[200px] mt-4' />

                </div>

                <div className='ml-[300px] mt-[30px] '>
                    <p className='font-bold text-[  30px]'>Drink </p>
                    <img src={Menuimg} alt='menu image ' className='w-[200px] h-[200px] mt-4' />

                </div>
    </div>
           

        </div>
    )
}
export default Menu