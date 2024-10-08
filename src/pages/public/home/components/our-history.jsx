import React, { useState } from 'react';
import { SectionTitle } from '../../../../components/section-title';
import { Link } from 'react-router-dom';

function OurHistory() {

  const imagesData = [
    {
      src: '/gallery/imagem-1.jpg',
      title: 'Piquenique com as crianças',
      text: (
        <p className="pl-16 text-justify">
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      )
    },
    {
      src: '/gallery/imagem-2.jpg',
      title: ' Escoteiros em atividade',
      text: (
        <p className="pl-16 text-justify">
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      )
    },
    {
      src: '/gallery/imagem-3.jpg',
      title: ' Escoteiros em atividade',
      text: <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    },
    {
      src: '/gallery/imagem-4.jpg',
      title: ' Escoteiros em atividade',
      text: <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    },
    {
      src: '/gallery/imagem-5.jpg',
      title: ' Escoteiros em atividade',
      text: <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    },
    {
      src: '/gallery/imagem-6.jpg',
      title: 'Escoteiros em atividade',
      text: <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    },
    {
      src: '/gallery/imagem-7.jpg',
      title: ' Escoteiros em atividade',
      text: (
        <p className="pl-16 text-justify">
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      )
    },



  ];


  const [selectedImage, setSelectedImage] = useState(imagesData[0]);


  const handleImageClick = (imageData) => {
    setSelectedImage(imageData);
  };

  function generateImagesBoard() {
    return imagesData.map((imageData, index) => (
      <img
        key={index}
        className="w-24 h-24 rounded-[80px] cursor-pointer object-cover hover:scale-105 transition duration-500"
        title={imageData.title}
        src={imageData.src}
        alt={`Imagem ${index + 1}`}
        onClick={() => handleImageClick(imageData)}
      />
    ));
  }

  return (
    <section className="bg-light-social-brand pt-12 pb-28">
      <div className="max-w-[1160px] mx-auto">
        <SectionTitle content="Nossa História" />
        <div className="pt-12 flex gap-20">
          {generateImagesBoard()}
        </div>
        <div className="flex pt-12">
          <img
            className="w-[580px] h-[420px] rounded-md cursor-pointer object-cover shadow-lg"
            title={selectedImage.title}
            src={selectedImage.src}
            alt={selectedImage.title}
          />
          <div className="text-center w-full">
            <h1 className="py-6 text-2xl font-semibold">
              <span className="text-social-brand font-semibold text-2xl">{selectedImage.title}</span>
            </h1>
            <p>
              {selectedImage.text}
            </p>
            <div className="flex justify-start items-center gap-4 px-16 pt-16">
              <p>
                <span className="text-social-brand font-semibold">Venha</span>{' '}
                fazer parte desta
                <span className="text-social-brand font-semibold"> história:</span>
              </p>
              <Link
                className={`
                  flex items-center bg-social-brand text-social-white
                  font-semibold py-1 px-4 rounded-md shadow-lg
                  hover:text-social-black hover:bg-transparent hover:border-social-brand
                  border transition-colors cursor-pointer
                `}
                type="button"
                to={'/autenticacao/cadastrar'}
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { OurHistory };


