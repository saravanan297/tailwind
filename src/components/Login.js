import { Link } from "react-router-dom";
import bgimag from '../assets/coffeeee.avif'

function Login() {
    return (
       <div id="btn" className="pl-[600px]">
        
                <p className="text-[70px] pl-[80px] pt-[0px]">☕</p>
                <h1 className="text-[30px] font-bold pl-5 text-yellow-300 ">Coffee House</h1>
            <h6 className=" text-white">Welcome back! Enjoy your coffee.</h6>
                
                <div className="pt-[20px]">
                <p className="font-bold  text-white">Email</p>
                <input type="tex" placeholder="Enter your Email " className=" pl-[300px]rounded-[5px] border-gray-900order-e-black h-[30px] w-[300px]"></input>
                </div>
                
                   
                   <div className="pt-[20px]">
                < p className="font-bold  text-white">Password</p>
                <input type="tex" placeholder="Enter your Password " className="  pl-[300px]rounded-[5px] border-gray-900order-e-black h-[30px] w-[300px]"></input>

            </div>
                
                <div className="flex pt-5">
                <input type="checkbox" ></input>
                <label className="pl-2  text-white">Remember me</label>


                <h6 className="pl-8  text-white">Forgot Password?</h6>
                </div>
<div className="pt-[40px]">
                <button className=" border-yellow-400 bg-yellow-400 rounded-[5px] w-[300px] h-11 font-bold  ">Login</button>

</div>
            
            <div className="flex pt-7 pl-6">
                <h5 className=" text-white">Dont have an account? </h5>
                <h5 className="font-bold pl-2  text-blue-500">Sign Up</h5>
            </div>
            
                   </div>
                  
    );
}

export default Login;
