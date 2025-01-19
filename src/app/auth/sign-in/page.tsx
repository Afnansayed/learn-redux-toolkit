'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
};

const SigninPage = () => {
    const [formData,setFormData] = useState({email:"",password:""})
    const [inputValue, setInputValue] = useState("")
    const [inputValueTwo, setInputValueTwo] = useState("")
    
     const [showPassword, setShowPassword] = useState(false);
    
     const { register, handleSubmit,  formState: { errors } } = useForm<Inputs>();
     const onSubmit: SubmitHandler<Inputs> = data => {
            setFormData(data)
     }
     console.log(formData)
    return (
        <div className="flex flex-col md:flex-row px-4 sm:px-5 md:px-8 lg:px-10 overflow-hidden min-h-[calc(100vh-160px)] ">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-8 scroll-y-auto">
          <h3 className="text-2xl font-bold w-full md:w-[90%] lg:w-[80%] mx-auto">Sign In </h3>
           
            {/* email */}
            <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mx-auto relative">
              <input
                type="email"
                className="p-2 rounded-sm pl-6 border-2 border-gray-800 peer placeholder-transparent focus:border-[#1a73e9] focus:outline-none w-full"
                required
                {...register("email")}
                onChange={(e)=>setInputValue(e.target.value)}
              />
              {!inputValue &&<label className="absolute text-gray-600 top-2 left-4 px-1 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#1a73e9] peer-focus:-top-3 peer-focus:left-4 peer-focus:text-sm peer-focus:text-[#1a73e9] bg-white z-30 ">
                Email
              </label>}
            </div>
            {/* password */}
            <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mx-auto relative">
              <input
                type={showPassword ? "text" : "password"}
                
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
                onChange={(e)=>setInputValueTwo(e.target.value)}
              />
             {!inputValueTwo && <label className="absolute text-gray-600 top-2 left-4 px-1 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#1a73e9] peer-focus:-top-3 peer-focus:left-4 peer-focus:text-sm peer-focus:text-[#1a73e9] bg-white z-30 ">
                Password
              </label>}
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-3">{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
              {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
            </div>
        
            {/*SignUp button */}
            <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
            <button
              type="submit"
              className="p-1 w-full rounded-md text-center text-[#ffff] bg-[#1a73e9]"
            >
              Sign In
            </button>
            </div>

            
            
            
          </form>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 ">
          <div className="bg-[#1a73e9] p-4 rounded-l-full h-full text-center flex flex-col items-center justify-center py-12 md:py-0 space-y-4">
            <h3 className="text-[#ffff] text-xl md:text-2xl lg:text-3xl text-semibold">If you do not have an account</h3>
            <p className="w-[80%] max-auto text-[14px] md:text-[16px] text-[#ffff]">
              Please sign up to continue
            </p>
            <Link href="/auth/signup" className='border-2 border-[#ffff] p-2 px-4 rounded-md text-[#ffff] hover:shadow-lg hover:shadow-black hover:scale-110 hover:-translate-y-1 transition ease-out delay-150 duration-300'>Sign Up</Link>
          </div>
        </div>
      </div>
    );
};

export default SigninPage;