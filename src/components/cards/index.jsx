import { string } from 'prop-types';
import { SocialIcon } from 'react-social-icons';

function Cards({ url, instagram, linkedin }) {
  return (
    <article className="relative w-[22rem] h-[28rem] rounded overflow-hidden shadow-default">
      <header
        className="relative flex flex-col items-center cursor-pointer overflow-hidden w-[22rem] h-[28rem] 
                   shadow-lg transition duration-500">
        <div
          className="absolute inset-0 z-10 transition duration-500
                     transform hover:-translate-y-28">
          <img 
            className="w-full h-full object-cover hover:brightness-50 transition duration-500 ease-in-out" 
            src={url} 
            alt="Pessoa sorrindo, cabelo preto e utilizando uma camisa preta" 
          />
          <ul className="absolute flex left-1/2 -translate-x-1/2 gap-8 bottom-6 z-10">
            <li 
              className="list-none" 
              title="Instagram">
              <a 
                className="relative grid place-items-center rounded-lg transition duration-500 
                         transform hover:-translate-y-2"
                href="#"
                rel="noopener noreferrer external nofollow"
              >
                <SocialIcon
                  url={instagram}
                  className="transition duration-500 transform hover:rotate-[360deg]"
                  target="_blank" />
              </a>
            </li>
            <li 
              className="list-none" 
              title="Linkedin">
              <a 
                className="relative grid place-items-center rounded-lg transition duration-500 
                         transform hover:-translate-y-2"
                href="#"
                rel="noopener noreferrer external nofollow"
              >
                <SocialIcon
                  url={linkedin}
                  className="transition duration-500 transform hover:rotate-[360deg]" 
                  target="_blank"/>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="absolute bottom-0 left-0 z-[4] w-full h-[6.5rem] p-[0.75rem_0.875rem] bg-white text-left 
                    text-[#333] transition duration-500">
          <h2 className="mb-[0.5rem] font-bold">Richard Ryan</h2>
          <p className="opacity-90">
            Fui o desenvolvedor Full-Stack deste projeto, utilizando <em>React</em>, <em>C#</em> e <em>SQL-Server</em>.
          </p>
        </div>
      </header>
    </article>
  );
}
  
Cards.propTypes = { 
  url: string,
  instagram: string,
  linkedin: string,
};
  

export { Cards };