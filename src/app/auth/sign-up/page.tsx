'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa6";


import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addUser } from "@/redux/slice/userSlice";
import { RootState } from "@/redux/store";

type Inputs = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
};
const SignupPage = () => {
  const users = useAppSelector((state:RootState) => state.user.users);
  console.log('Redux users', users)
    const [formData,setFormData] = useState({name:"",email:"",password:"",confirmPassword:""})
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState("")
    const [inputValueTwo, setInputValueTwo] = useState("")
    const [inputValueThree, setInputValueThree] = useState("")
    const [inputValueFour, setInputValueFour] = useState("")
     const [showPassword, setShowPassword] = useState(false);
     const [showPasswordTwo, setShowPasswordTwo] = useState(false);
     const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
     const onSubmit: SubmitHandler<Inputs> = data => {
            setFormData(data)
            dispatch(addUser({ id: 1, name: "razin", email: 'examle@gmail.com' ,password: '43875' , confirmPassword:'654645' }))
     }

     const password = watch("password")

     console.log(formData)

  return (
    <>
      <div className="flex flex-col md:flex-row px-4 sm:px-5 md:px-8 lg:px-10 overflow-hidden min-h-[calc(100vh-160px)] ">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3 scroll-y-auto">
          <h3 className="text-2xl font-bold w-full md:w-[90%] lg:w-[80%] mx-auto">Sign Up </h3>
            <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mx-auto relative ">
              <input
                type="text"
                
                className="p-2 rounded-sm pl-6 border-2 border-gray-800 peer placeholder-transparent focus:border-[#1a73e9] focus:outline-none w-full"
                required
                {...register("name")}
                onChange={(e)=>setInputValue(e.target.value)}
              />
              {!inputValue &&<label className="absolute text-gray-600 top-2 left-4 px-1 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#1a73e9] peer-focus:-top-3 peer-focus:left-4 peer-focus:text-sm peer-focus:text-[#1a73e9] bg-white z-30 ">
                Full Name
              </label>}
            </div>
            {/* email */}
            <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mx-auto relative">
              <input
                type="email"
                className="p-2 rounded-sm pl-6 border-2 border-gray-800 peer placeholder-transparent focus:border-[#1a73e9] focus:outline-none w-full"
                required
                {...register("email")}
                onChange={(e)=>setInputValueTwo(e.target.value)}
              />
              {!inputValueTwo &&<label className="absolute text-gray-600 top-2 left-4 px-1 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#1a73e9] peer-focus:-top-3 peer-focus:left-4 peer-focus:text-sm peer-focus:text-[#1a73e9] bg-white z-30 ">
                Email
              </label>}
            </div>
            {/* password */}
            <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mx-auto relative">
              <input
                type={showPasswordTwo ? "text" : "password"}
                
                className="p-2 rounded-sm pl-6 border-2 border-gray-800 peer placeholder-transparent focus:border-[#1a73e9] focus:outline-none w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long"
                  },
                  validate: {
                    hasUpperCase: value => /[A-Z]/.test(value) || "Password must include at least one uppercase letter"
                  }
                })}
                onChange={(e)=>setInputValueThree(e.target.value)}
              />
             {!inputValueThree && <label className="absolute text-gray-600 top-2 left-4 px-1 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#1a73e9] peer-focus:-top-3 peer-focus:left-4 peer-focus:text-sm peer-focus:text-[#1a73e9] bg-white z-30 ">
                Password
              </label>}
              <button onClick={() => setShowPasswordTwo(!showPasswordTwo)} className="absolute right-2 top-3">{showPasswordTwo ? <FaEye /> : <FaEyeSlash />}</button>
              {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
            </div>
            {/* Confirm password */}
            <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mx-auto relative">
              <input
                type={showPassword ? "text" : "password"}
                
                className="p-2 rounded-sm pl-6 border-2 border-gray-800 peer placeholder-transparent focus:border-[#1a73e9] focus:outline-none w-full"
               {...register("confirmPassword", {required: "Please confirm your password"  , validate: (value) => value === password || "The passwords do not match" })}
                onChange={(e)=>setInputValueFour(e.target.value)}
                
              />
              {!inputValueFour &&<label className="absolute text-gray-600 top-1 left-4 px-1 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#1a73e9] peer-focus:-top-3 peer-focus:left-4 peer-focus:text-sm peer-focus:text-[#1a73e9] bg-white z-30 ">
                Confirm Password
              </label>}
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-3">{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
            </div>
            {/*SignUp button */}
            <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
            <button
              type="submit"
              className="p-1 w-full rounded-md text-center text-[#ffff] bg-[#1a73e9]"
            >
              Sign Up
            </button>
            </div>

            <div className="flex items-center pt-4 space-x-1 w-full md:w-[90%] lg:w-[80%] mx-auto">
              <div className="flex-1 h-px sm:w-16 bg-gray-800"></div>
              <p className="px-3 text-sm text-gray-600">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-800"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <FaGoogle className="text-xl" />
              </button>
              <button
                aria-label="Log in with Twitter"
                className="p-3 rounded-sm"
              >
                <FaTwitter className="text-xl" />
              </button>
            </div>
            
          </form>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 ">
          <div className="bg-[#1a73e9] p-4 rounded-l-full h-full text-center flex flex-col items-center justify-center py-12 md:py-0 space-y-4">
            <h3 className="text-[#ffff] text-3xl text-semibold">Welcome Back</h3>
            <p className="w-[80%] max-auto text-[14px] md:text-[16px] text-[#ffff]">
              Please Login to continue
            </p>
            <Link href="/auth/signin" className='border-2 border-[#ffff] p-2 px-4 rounded-md text-[#ffff] hover:shadow-lg hover:shadow-black hover:scale-110 hover:-translate-y-1 transition ease-out delay-150 duration-300'>Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
