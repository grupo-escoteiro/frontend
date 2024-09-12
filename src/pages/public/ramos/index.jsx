import lobinho from '../../../../public/lobinho.svg';
import { SectionTitle } from '../../../components/section-title';
import flordeliz from '../../../../public/flor-de-liz.svg';

function Ramos() {
  return (
    <>
      <SectionTitle
        className="py-12 px-48"
        content="Ramos"
      />
      <div className="flex py-14 px-48">
        <img
          className="w-[278px] h-[225px] rounded-full cursor-pointer object-cover shadow-lg"
          src={lobinho} />
        <p className='px-32 text-2xl'><span className='text-social-brand '>Lobinho:</span>
          ipsum dolor sit amet consectetur. Massa consectetur maecenas faucibus mi.
          Pharetra tempor pretium ut id etiam egestas. Duis mattis viverra morbi
          ac donec ac blandit eget nunc. Iaculis nulla at tempor amet sed auctor tristique.
          ipsum dolor sit amet consectetur. Massa consectetur maecenas faucibus mi.
          Pharetra tempor pretium ut id etiam egestas. Duis mattis viverra morbi
          ac donec ac blandit eget nunc. Iaculis nulla at tempor amet sed auctor tristique.
          ipsum dolor sit amet consectetur. Massa consectetur maecenas faucibus mi.
          Pharetra tempor pretium ut id etiam egestas. Duis mattis viverra morbi
          ac donec ac blandit eget nunc. Iaculis nulla at tempor amet sed auctor tristique.

          <button className="text-social-brand flex py-10 " id="loadMore" type="button">
            Ver mais
          </button>
        </p>
      </div>
      <div className="flex py-44 px-48 text-2xl">
        <p className='px-48'><span className='text-social-brand '>Junior:</span>
          ipsum dolor sit amet consectetur. Massa consectetur maecenas faucibus mi.
          Pharetra tempor pretium ut id etiam egestas. Duis mattis viverra morbi
          ac donec ac blandit eget nunc. Iaculis nulla at tempor amet sed auctor tristique
          ipsum dolor sit amet consectetur. Massa consectetur maecenas faucibus mi.
          Pharetra tempor pretium ut id etiam egestas. Duis mattis viverra morbi
          ac donec ac blandit eget nunc. Iaculis nulla at tempor amet sed auctor tristique.
          ipsum dolor sit amet consectetur. Massa consectetur maecenas faucibus mi.
          Pharetra tempor pretium ut id etiam egestas. Duis mattis viverra morbi
          ac donec ac blandit eget nunc. Iaculis nulla at tempor amet sed auctor tristique.

          <button
            className="text-social-brand flex py-10"
            id="loadMore"
            type="button"
          >
            Ver mais
          </button></p>

        <img
          className="w-[309px] h-[246px] rounded-full cursor-pointer object-cover shadow-lg"
          src={flordeliz} />
      </div>

    </>
  );
}

export { Ramos };
