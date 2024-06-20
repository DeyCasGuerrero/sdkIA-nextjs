'use client'
import { useState } from "react";
import GoogleSvg from "../icons/GoogleSvg";
import { User } from "../types/RegisterTypes";
import { usePostRegister } from "../hooks/useGetApi";
import { useRouter } from "next/navigation";
function RegisterComponent() {
    
    const { isSignedIn,signUp }=usePostRegister();

    const router = useRouter();

    const [registerData, setRegisterData] = useState<User>({
        username: "",
        password: "",
        firstname:"",
        lastname:"",
        country:"",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value}= e.target;

        setRegisterData(prevState=>({
            ...prevState,
            [name]:value
        }));
    }

    const handleSumit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!registerData.username || !registerData.password || !registerData.firstname || !registerData.lastname || !registerData.country){
            alert("Please enter credentials");
            return;
        }

        try {
            await signUp(registerData);
            if(isSignedIn){
                alert("You have successfully registered");
                router.push("/login");
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    }

    return (

        <form onSubmit={handleSumit}
            className="relative w-full px-4 md:w-auto py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl "
        >
            <div className="max-w-md mx-auto">
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block"> FistName</label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="fullname"
                            name="firstname"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block" > LastName </label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="lastname"
                            id="email"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block"> Email </label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="email"
                            name="username"
                            id="username"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block">password</label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block" >Country</label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="country"
                            id="dob"
                            onChange={handleInputChange}
                        />
                    </div>
                
                </div>
                <div className="w-full bg-slate-200 rounded-xl text-base font-semibold hover:scale-105">
                    <button className="flex items-center justify-center gap-4 p-2 w-full ">
                        <GoogleSvg width={30} height={30}></GoogleSvg>
                        <p> Sign up with Google </p>
                    </button>
                </div>
                <div className="mt-5">
                    <button
                        className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                        type="submit"
                    >
                        Sign up
                    </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <a
                        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline" />
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </form>
    )
}

export default RegisterComponent;