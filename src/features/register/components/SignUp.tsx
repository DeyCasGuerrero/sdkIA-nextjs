import GoogleSvg from "../icons/GoogleSvg";

function RegisterComponent() {
    return (

        <div
            className="relative w-full px-4 md:w-auto py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl "
        >
            <div className="max-w-md mx-auto">
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block"> FullName </label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="fullname"
                        />
                    </div>
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block" > Email </label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="email"
                        />
                    </div>
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block">username </label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="username"
                        />
                    </div>
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block">password</label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="password"
                        />
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block" >Date</label>
                        <input
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="date"
                            id="dob"
                        />
                    </div>
                    <div>
                        <label
                            className="font-semibold text-sm text-gray-600 pb-1 block" >genero</label>
                        <select
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            id="gender"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
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
        </div>
    )
}

export default RegisterComponent;