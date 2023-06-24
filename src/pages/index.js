import Image from "next/image";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  async function handleSignIn(){
    signIn('google',{callbackUrl:"http://localhost:3000/dashboard"});
  }

  return (
    <div className="grid grid-cols-2 h-auto fixed w-auto bg-[#F5F5F5]">
      <div className="w-[588px] h-[1024px] lg:w-[600px] bg-black flex justify-center  items-center">
        <h1 className="text-white text-[72px] font-[700] content-center items-center mb-32">
          Board.
        </h1>
      </div>
      <div className="w-[1000px] h-[1024px] bg-inherit pt-[160px]">
        <h1 className="text-black font-[700] text-[36px] mb-0">Sign In</h1>
        <h4 className="text-black text-[16px] mt-[5px] mb-[26px]">
          Sign in to your account
        </h4>
        <div className="flex flex-row">
          <div className="flex w-[180px] h-[30px] bg-white text-[#858585] text-[12px] items-center  justify-center rounded-[10px] mr-[25px]">
            <a
              className="flex flex-row text-center justify-center pt-1 items-center gap-[10px] cursor-pointer"
              style={{ marginTop: "-2.2% " }}
              onClick={handleSignIn}
            >
              <FcGoogle className="w-[15px] h-[15px]" />
              Sign into Google
            </a>
          </div>
          <div className="flex w-[180px] h-[30px] bg-white text-[#858585] text-[12px] items-center  justify-center rounded-[10px] mr-[25px]">
            <a
              href="/"
              className="flex flex-row text-center justify-center pt-1 items-center gap-[10px]"
              style={{ marginTop: "-2.2% " }}
            >
              <AiFillApple className="w-[15px] h-[15px]" />
              Sign into Apple
            </a>
          </div>
        </div>

        {/* <button className="w-[180px] h-[30px] bg-white text-[#858585] text-[12px] rounded-[10px] mr-[25px]">
          <FcGoogle />
          Sign into Google
        </button>
        <button className="w-[180px] h-[30px] bg-white text-[#858585] text-[12px] rounded-[10px]items-center justify-center">
          <AiFillApple />
          Sign into Apple
        </button> */}
        <div className="w-[385px] h-[317px] mt-[25px] bg-white flex flex-col items-center rounded-[20px]">
          <div className="mt-[30px]">
            <h4 className="text-[16px] text-black mb-[10px]">Email Address</h4>
            <input
              type="email"
              className="w-[325px] h-[40px] bg-[#F5F5F5] rounded-[10px] text-black"
            />
          </div>
          <div className="mt-[20px]">
            <h4 className="text-[16px] text-black">Password</h4>
            <input
              type="password"
              className="w-[325px] h-[40px] bg-[#F5F5F5] text-black rounded-[10px]"
            />
          </div>
          <div className="my-[20px]">
            <h3 className="text-[16px] text-[#346BD4] style={{ textAlign: 'left' }}">
              Forgot Password?
            </h3>
          </div>

          <button className="w-[325px] h-[40px] bg-black mx-[30px] mb-[30px] rounded-[10px]">
            Sign In
          </button>
        </div>
        <div className="flex items-center ml-12">
          <h4 className="text-[#858585] text-[16px] mt-[20px]">
            Don't have an account?{" "}
            <span className="text-[#346BD4] text-[16px]">Register here</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
