import ryan from '../../../public/fotos-ryan.jpg';
import { SocialIcon } from 'react-social-icons';

function Cards() {
  return (
    <div className="relative w-[22rem] h-[28rem]">
      <div
        className="relative flex flex-col items-center overflow-hidden w-[22rem] h-[28rem] 
                   shadow-lg transition duration-500">
        <div
          className="absolute inset-0 z-[2] transition duration-500 
                     transform hover:-translate-y-[104px]">
          <img 
            className="w-full h-full object-cover" 
            src={ryan} 
            alt="Imagem de uma pessoa" 
          />
          <div
            className="absolute inset-0 bg-black opacity-0 
                       hover:opacity-60 transition duration-500 ease-in-out">
          </div>
        </div>
        <ul className="absolute flex gap-8 bottom-[10.125rem] z-[3]">
          <li className="list-none">
            <a 
              className="relative grid place-items-center rounded-lg transition duration-500 
                         transform hover:-translate-y-2"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                url="https://instagram.com"
                className="transition duration-500 transform hover:rotate-[360deg]" />
            </a>
          </li>
          <li className="list-none">
            <a 
              className="relative grid place-items-center rounded-lg transition duration-500 
                         transform hover:-translate-y-2"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                url="https://linkedin.com"
                className="transition duration-500 transform hover:rotate-[360deg]" />
            </a>
          </li>
        </ul>
        <div
          className="absolute bottom-0 left-0 z-[4] w-full h-[6.5rem] p-[0.75rem_0.875rem] bg-white text-left 
                    text-[#333] transition duration-500">
          <h2 className="mb-[0.5rem] font-bold">Richard Ryan</h2>
          <p className="opacity-90">
            Fui o desenvolvedor Full-Stack deste projeto, utilizando <em>React</em>, <em>C#</em> e <em>SQL-Server</em>.
          </p>
        </div>
      </div>
    </div>
  );
}
  
  
  

export { Cards };