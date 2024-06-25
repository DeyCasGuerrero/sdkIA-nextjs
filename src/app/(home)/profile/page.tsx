'use client';
import { useSession } from "next-auth/react"

export default function ProfilePage() {
    const {data:session, status}=useSession();
    return (
        <section className="flex flex-col lg:flex-row items-center min-h-screen justify-evenly lg:p-20 gap-10 bg-gray-900">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Perfil de Usuario</h1>
                <div className="flex items-center mb-4">
                    {session?.user.image?(

                        <img src={session.user.image} alt="Foto de perfil" className="rounded-full h-20 w-20 mr-4" />
                    ):(
                        <h1>no hay foto</h1>
                    )}
                    <div>
                        <p className="text-lg font-bold text-gray-900">{session?.user.name} Apellido</p>
                        <p className="text-gray-600">País: País del usuario</p>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <p className="text-lg text-gray-900">Hola, aquí puedes añadir más detalles sobre el usuario como su correo electrónico y otra información relevante.</p>
                    <p className="text-lg text-gray-900">También puedes agregar más elementos visuales o información según sea necesario.</p>
                </div>
            </div>
            <div className="p-10 bg-gray-800 rounded-lg">
                <form className="flex flex-col items-center justify-center">
                    <label className="text-white text-lg mb-2">Editar Información</label>
                    <input type="text" placeholder="Nombre" className="bg-gray-700 text-white rounded-lg p-2 mb-4 w-full" />
                    <input type="email" placeholder="Correo electrónico" className="bg-gray-700 text-white rounded-lg p-2 mb-4 w-full" />
                    <textarea placeholder="Descripción" className="bg-gray-700 text-white rounded-lg p-2 mb-4 w-full h-32 resize-none"></textarea>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Guardar Cambios</button>
                </form>
            </div>
        </section>


    )
}