'use client';
import { ChangeEvent, useEffect, useState } from "react";
import GoogleSvg from "../../register/icons/GoogleSvg";
import { handleGoogleSignIn } from "../hooks/useAuth";
import { SignInResponse, signIn, useSession } from "next-auth/react";
import { User } from "../types/LoginTypes";
import { Loader } from "../../shared/index";
import { useRouter } from "next/navigation";
function LoginComponent() {

    const { data: session, status } = useSession();

    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated"){
            router.push('/');
        }
    }, [status]);

    const [dataLogin, setdataLogin] = useState<User>({
        username: '',
        password: '',
    });

    if (status === "loading") {
        return <Loader></Loader>
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setdataLogin(prevState => ({
            ...prevState,
            [name]: value
        }));


    }

    const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!dataLogin.password && !dataLogin.password) {
            alert('Username or password missing');
            return;
        }

        try {
            const result: SignInResponse | undefined = await signIn('credentials', {
                redirect: false,
                username: dataLogin.username,
                password: dataLogin.password,
            });

            if (!result) {
                throw new Error('No result received');
            }

        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (

        <form onSubmit={handleSumit} className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10"
            >
                <div className="max-w-md mx-auto">
                    <div className="flex items-center space-x-5 justify-center">
                        {/** LOGO DE CUALQUIER DX */}
                    </div>
                    <div className="mt-5">
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block"

                        >E-mail
                        </label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            type="email"
                            name="username"
                            id="login"
                            onChange={handleOnChange}
                        />
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block"
                        >Password</label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="text-right mb-4">
                        <a
                            className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex justify-center w-full items-center">
                        <div className="">
                            <button
                                onClick={handleGoogleSignIn}
                                className="flex items-center justify-center py-2 px-10 lg:px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            >
                                <GoogleSvg width={30} height={30}></GoogleSvg>
                                <span className="ml-2">Sign in with Google</span>
                            </button>

                        </div>
                    </div>
                    <div className="mt-5">
                        <button
                            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            type="submit"
                        >
                            Log in
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <a
                            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                            href="/register"
                        >or sign up</a>
                        <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default LoginComponent;