import React from 'react';
import { RiGithubFill, RiTwitterFill, RiLinkedinBoxFill } from 'react-icons/ri';

function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left mb-4 lg:mb-0">
                    <p className="text-lg font-semibold">Contacto</p>
                    <p>Correo electrónico: contacto@CloseIA.com</p>
                    <p>Teléfono: +1234567890</p>
                    <p>Dirección: 123 Marrano, Papuh, Cerrú</p>
                </div>
                <div className="flex gap-8">
                    <div>
                        <p className="text-lg font-semibold">Enlaces rápidos</p>
                        <ul className="mt-2">
                            <li><a href="#model" className="text-gray-300 hover:text-blue-400">Modelo</a></li>
                            <li><a href="#intro" className="text-gray-300 hover:text-blue-400">Introducción</a></li>
                            <li><a href="#services" className="text-gray-300 hover:text-blue-400">Servicios</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-blue-400">Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Síguenos</p>
                        <div className="flex mt-2">
                            <a href="https://github.com/DeyCasGuerrero" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                                <RiGithubFill size={24} />
                            </a>
                            <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                                <RiTwitterFill size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/tu-usuario/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                                <RiLinkedinBoxFill size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-4">
                <p className="text-center text-sm text-gray-400">&copy; 2024 Close IA. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
