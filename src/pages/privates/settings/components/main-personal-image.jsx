import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';
import luis from '/fotos-alemao.jpg';

function MainPersonalImage() {
  return (
    <>
      <div
        className="lg:flex lg:items-center lg:gap-x-6 cursor-pointer transition duration-500 hover:brightness-90
                   mb-56 lg:w-48 lg:pt-0
                   md:pt-0 md:w-48 md:flex md:items-center md:gap-x-6
                   pt-10 w-full flex items-center justify-center gap-x-6"
      >
        <img 
          src={luis}
          className="w-20 h-20 rounded-full object-cover"
          alt="Foto de perfil de uma pessoa branca com cabelo castanho claro"
          title="Foto de perfil"
        />
        <h2 className="text-xl">
                Upload +
        </h2>
      </div> 
      <div
        className="lg:flex lg:justify-end lg:items-center lg:gap-x-5 lg:pb-0
                   md:flex md:justify-end md:items-center md:gap-x-5 md:py-16
                   hidden"
      >
        <Link className="text-social-red transition duration-500 hover:brightness-50">
          Voltar
        </Link>
        <Button
          type="submit"
          variant="green"
          content="Atualizar"
        />
      </div>
      <div
        className="lg:hidden
                   md:hidden
                   flex flex-col-reverse items-center justify-center pb-16 gap-y-4"
      >
        <Link className="text-social-red transition duration-500 hover:brightness-50">
          Voltar
        </Link>
        <Button
          type="submit"
          variant="green"
          content="Atualizar"
        />
      </div>   
    </>
  );
}

export { MainPersonalImage };