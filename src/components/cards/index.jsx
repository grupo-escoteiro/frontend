import ryan from '../../../public/fotos-ryan.jpg';
import alemao from '../../../public/fotos-alemao.jpg';
import jao from '../../../public/fotos-jao.jpg';

function Cards() {
    return (
        <div className="flex justify-center items-center h-screen gap-28">
            <div className="relative w-[350px] h-[450px]">
                <div className="relative flex flex-col items-center w-[350px] h-[450px] shadow-lg 
                                cursor-pointer overflow-hidden transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-background transition-transform duration-500 z-10">
                        <img 
                            src={alemao} 
                            alt="profile" 
                            className="w-full h-full object-cover transition-opacity duration-500 z-0" />
                    </div>
                    <ul className="absolute flex gap-3 bottom-40 z-20">
                        <li className="list-none z-20">
                            <a 
                                href="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr" 
                                target="_blank"
                                rel="next noopener noreferrer follow"
                                className="grid place-items-center bg-white text-xl 
                                font-bold w-9 h-9 border border-gray-300 rounded-full 
                                transition-transform opacity-0 transform translate-y-8">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 448 512" 
                                    className="text-background p-1 transition-transform duration-800 transform hover:rotate-y-360">
                                </svg>
                            </a>
                        </li>
                        <li className="list-none">
                            <a 
                                href="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261/" 
                                target="_blank" 
                                className="grid place-items-center bg-white text-xl
                                font-bold w-9 h-9 border border-gray-300 rounded-full 
                                transition-transform opacity-0 transform translate-y-8"
                                rel="next noopener noreferrer follow">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 448 512" 
                                    className="text-background p-1 transition-transform duration-800 transform hover:rotate-y-360">
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="absolute bottom-0 left-0 z-20 w-full h-24 p-3 bg-white text-left transition-opacity
                                    py-1">
                        <h2 className="mb-2 font-bold">Luis Felipe</h2>
                        <div className="opacity-90">
                            Eu fui o desenvolvedor FullStack deste projeto, utilizando <em>React</em>, <em>C#</em> e <em>.Net</em>.
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-[350px] h-[450px]">
                <div className="relative flex flex-col items-center w-[350px] h-[450px] shadow-lg 
                                cursor-pointer overflow-hidden transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-background transition-transform duration-500 z-10">
                        <img 
                            src={ryan} 
                            alt="profile" 
                            className="w-full h-full object-cover transition-opacity duration-500 z-0" />
                    </div>
                    <ul className="absolute flex gap-3 bottom-40 z-20">
                        <li className="list-none z-20">
                            <a 
                                href="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr" 
                                target="_blank"
                                rel="next noopener noreferrer follow"
                                className="grid place-items-center bg-white text-xl 
                                font-bold w-9 h-9 border border-gray-300 rounded-full 
                                transition-transform opacity-0 transform translate-y-8">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 448 512"
                                    className="text-background p-1 transition-transform duration-800 transform hover:rotate-y-360"
                                >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                        </li>
                        <li className="list-none">
                            <a 
                                href="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261/" 
                                target="_blank" 
                                className="grid place-items-center bg-white text-xl
                                font-bold w-9 h-9 border border-gray-300 rounded-full 
                                transition-transform opacity-0 transform translate-y-8"
                                rel="next noopener noreferrer follow">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 448 512"
                                    className="text-background p-1 transition-transform duration-800 transform hover:rotate-y-360">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="absolute bottom-0 left-0 z-20 w-full h-24 p-3 bg-white text-left transition-opacity
                                    py-1">
                        <h2 className="mb-2 font-bold">Richard Ryan</h2>
                        <div className="opacity-90">
                            Eu fui o desenvolvedor FullStack deste projeto, utilizando <em>React</em>, <em>C#</em> e <em>.Net</em>.
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-[350px] h-[450px]">
                <div className="relative flex flex-col items-center w-[350px] h-[450px] shadow-lg 
                                cursor-pointer overflow-hidden transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-background transition-transform duration-500 z-10">
                        <img 
                            src={jao} 
                            alt="profile" 
                            className="w-full h-full object-cover transition-opacity duration-500 z-0" />
                    </div>
                    <ul className="absolute flex gap-3 bottom-40 z-20">
                        <li className="list-none z-20">
                            <a 
                                href="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr" 
                                target="_blank"
                                rel="next noopener noreferrer follow"
                                className="grid place-items-center bg-white text-xl 
                                font-bold w-9 h-9 border border-gray-300 rounded-full 
                                transition-transform opacity-0 transform translate-y-8">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 448 512" 
                                    className="text-background p-1 transition-transform duration-800 transform hover:rotate-y-360">
                                </svg>
                            </a>
                        </li>
                        <li className="list-none">
                            <a 
                                href="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261/" 
                                target="_blank" 
                                className="grid place-items-center bg-white text-xl
                                font-bold w-9 h-9 border border-gray-300 rounded-full 
                                transition-transform opacity-0 transform translate-y-8"
                                rel="next noopener noreferrer follow">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 448 512" 
                                    className="text-background p-1 transition-transform duration-800 transform hover:rotate-y-360">
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="absolute bottom-0 left-0 z-20 w-full h-24 p-3 bg-white text-left transition-opacity
                                    py-1">
                        <h2 className="mb-2 font-bold">João Marcos</h2>
                        <div className="opacity-90">
                            Eu fui o desenvolvedor FullStack deste projeto, utilizando <em>React</em>, <em>C#</em> e <em>.Net</em>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export { Cards }