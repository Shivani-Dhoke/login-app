import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-400">Company</span>Name
            </div>
            <div className="py-2">
              <h2 className="text-3xl text-green-400 font-bold mb-2">Sign in to Account</h2>
            </div>
            <div className="border-2 w-10 border-green-400 inline-block mb-2 "></div>
            <div className="flex justify-center my-2">
              <a href="#" className="border-2 rounded-full border-gray p-3 mx-1 hover:bg-green-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="border-2 rounded-full border-gray p-3 mx-1 hover:bg-green-400 hover:text-white">
                <FaLinkedinIn/>
              </a><a href="#" className="border-2 rounded-full border-gray p-3 mx-1 hover:bg-green-400 hover:text-white">
                <FaGoogle/>
              </a>
            </div>
            <p className="text-gray-400 my-3">or use your email account</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2"/>
              <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm"/>
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2"/>
              <input type="email" name="email" placeholder="Password" className="bg-gray-100 outline-none text-sm"/>
              </div>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs"><input type="checkbox" name="remember me" className="mr-1"/>Remember me</label>
                <a href="#" className="text-xs">Forget Password?</a>
              </div>
              <button className="border-2 border-green-400 text-green-500 rounded-full py-2 px-12 inline-block font-semibold hover:bg-green-400 hover:text-white">
              Sign in
            </button>
            </div>
          </div>

          {/*sign in section*/}
          <div className="w-2/5 bg-green-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl mb-2 font-bold">Hello, Friends!!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2 "></div>
            <p className="mb-10">
              Fill up personal information and starts journey with us
            </p>
            <button className="border-2 border-white rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-green-400">
              Sign up
            </button>
          </div>
          {/*sign up section*/}
        </div>
      </main>
    </div>
  );
}
