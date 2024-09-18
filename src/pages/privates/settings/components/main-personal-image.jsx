/* eslint-disable indent */
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';
import luis from '/fotos-alemao.jpg';

function MainPersonalImage() {
    return (
        <>
            <div className="h-96">
                <div className="flex gap-x-6 cursor-pointer mb-64">
                    <img src={luis} className="h-24 w-24 rounded-full object-cover shadow-default" />
                    <button className="text-xl">Upload +</button>
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
            </div>
        </>
    );
}

export { MainPersonalImage };