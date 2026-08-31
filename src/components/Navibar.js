function Navibar() {
    return (
        <div>
            <div className="flex items-center justify-between px-10 bg-green-800 h-[50px]" >

                <h1 className="text-orange-600 font-bold">BENS</h1>

                <nav className="flex gap-6 text-white">
                    <a href="#" className="text-orange-600">Home</a>
                    <a href="#">About</a>
                    <a href="#">Shop</a>
                    <a href="#">Menu pages</a>
                    <button className=" rounded-[10px] w-[80px] h-7 bg-orange-600">Contact</button>
                </nav>

            </div>
        </div>
    );
}

export default Navibar;