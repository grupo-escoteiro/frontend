import { string } from 'prop-types';
import { SocialIcon } from 'react-social-icons';

function Cards({ url, instagram, linkedin }) {
  return (
    <article
      className="lg:relative lg:w-[22rem] lg:h-[28rem] lg:rounded lg:overflow-hidden lg:shadow-default
                 relative w-[20rem] h-[26rem] rounded overflow-hidden shadow-default">
      <header
        className="lg:relative lg:flex lg:flex-col lg:items-center lg:cursor-pointer 
                   lg:overflow-hidden lg:w-[22rem] lg:h-[28rem] lg:shadow-lg lg:transition lg:duration-500
                   relative flex flex-col items-center cursor-pointer overflow-hidden w-[20rem] h-[26rem]
                   shadow-lg transition duration-500">
        <div
          className="lg:absolute lg:inset-0 lg:z-10 lg:transition lg:duration-500
                     lg:transform lg:hover:-translate-y-28
                     absolute inset-0 z-10 transition duration-500
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
              <SocialIcon
                url={instagram}
                className={`
                  hover:rotate-[360deg] relative grid place-items-center rounded-lg
                  transition duration-500 transform hover:-translate-y-2
                `}
                target="_blank"
                rel="noopener noreferrer external nofollow"
              />
            </li>
            <li
              className="list-none"
              title="Linkedin">
              <SocialIcon
                url={linkedin}
                className={`
                  hover:rotate-[360deg] relative grid place-items-center rounded-lg
                  transition duration-500 transform hover:-translate-y-2
                `}
                target="_blank"
                rel="noopener noreferrer external nofollow"
              />
            </li>
          </ul>
        </div>
        <div
          className="lg:absolute lg:bottom-2 lg:left-0 lg:z-[4] lg:w-full lg:h-[6.5rem] 
                     lg:p-[0.60rem_2rem] lg:bg-white lg:text-left lg:text-[#333] lg:transition lg:duration-500
                     lg:px-8 lg:py-1
                     absolute bottom-0 left-0 z-[4] py-3 px-3 bg-white text-left
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
