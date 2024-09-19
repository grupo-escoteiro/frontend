import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';
import luis from '/fotos-alemao.jpg';

function MainPersonalImage() {
  return (
    <>
      <div
        className="flex items-center gap-x-6 cursor-pointer transition duration-500 hover:brightness-90
                   mb-56 w-48">
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
      <div className="flex justify-end items-center gap-x-5">
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