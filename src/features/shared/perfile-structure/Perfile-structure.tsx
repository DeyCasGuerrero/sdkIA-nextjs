import { useSession } from "next-auth/react";

export default function PerfileStructure() {
    const { data: session, status } = useSession();
    return (
        <section className="flex p-4 flex-col lg:flex-row items-center min-h-screen justify-evenly lg:p-20 gap-10 bg-gray-900">
            <div className="bg-white rounded-lg p-2 max-w-md w-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">User's profile</h1>
                <div className="flex items-center mb-4">
                    {session?.user.image ? (
                        <img src={session.user.image} alt="Foto de perfil" className="rounded-full h-20 w-20 mr-4" />
                    ) : (
                        <h1 className="w-16 h-16 rounded-full bg-black"></h1>
                    )}
                    <div className="ml-4">
                        <p className="text-lg font-bold text-gray-900">{session?.user.name? session.user.name:session?.user.firstname} - {session?.user.lastname? session.user.lastname:''}</p>
                        <p className="text-gray-600">Country: {session?.user.country? session.user.country :'There isnt country'}</p>
                        <p className="text-gray-600 tracking-widest">E-mail: {session?.user.email? session.user.email :session?.user.username}</p>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <p className="text-lg text-gray-900 font-semibold p-2">Hello, in this page you can see yours credencials.</p>
                    <p className=" p-2 bg-black rounded-xl text-lg font-semibold text-red-500">For the moment, the profile editing function is not available.</p>
                </div>
            </div>
            {/* <div className="p-10 bg-gray-800 rounded-lg">
                <form className="flex flex-col items-center justify-center">
                    <label className="text-white text-lg mb-2">Editar Información</label>
                    <input type="text" placeholder="Nombre" className="bg-gray-700 text-white rounded-lg p-2 mb-4 w-full" />
                    <input type="email" placeholder="Correo electrónico" className="bg-gray-700 text-white rounded-lg p-2 mb-4 w-full" />
                    <textarea placeholder="Descripción" className="bg-gray-700 text-white rounded-lg p-2 mb-4 w-full h-32 resize-none"></textarea>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Guardar Cambios</button>
                </form>
            </div> */}
        </section>

    )
}