import { useState } from 'react';
import { SectionTitle } from '../../../components/section-title';
import { imagesList } from '../../../helpers/gallery-images-list.js';

const layoutClasses = [
  'col-span-8 row-span-2',
  'col-span-4',
  'col-span-4',
  'col-span-4',
  'col-span-8 row-span-2',
  'col-span-4',
  'col-span-12'
];

function Gallery() {
  const [page, setPage] = useState(1);
  const partialImagesList = imagesList.filter(image => image.id <= layoutClasses.length * page);
  const partialImageListHasTheSameSize = partialImagesList.length === imagesList.length;

  return (
    <section className="pt-12 pb-20">
      <div className="max-w-[1160px] mx-auto">
        <SectionTitle
          className="pt-12 pb-14"
          content="Galeria"
        />
        <div className="grid grid-cols-12 gap-8 items-center">
          {partialImagesList.map((image, index) => (
            <div
              key={image.id}
              className={`
                ${layoutClasses[index % layoutClasses.length]}
                cursor-pointer w-full h-full
              `}
            >
              <a
                href={image.url}
                target="_blank"
                rel="follow noopener noreferrer"
                title="Clique para abrir a imagem"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover shadow-default transition duration-500 hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
        {!partialImageListHasTheSameSize && (
          <div className="flex justify-center items-center pt-14">
            <button
              className="text-social-gray text-3xl transition duration-500 hover:brightness-75 hover:scale-105"
              id="loadMore"
              type="button"
              onClick={() => setPage(prev => prev + 1)}
            >
              Carregar mais +
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export { Gallery };
