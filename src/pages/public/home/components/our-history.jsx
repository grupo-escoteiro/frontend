import { useRef, useState } from 'react';
import { SectionTitle } from '../../../../components/section-title';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const imagesData = [
  {
    src: '/gallery/imagem-1.jpg',
    title: 'Piquenique com as crianças',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-justify lg:px-0
                   md:text-left"
      >
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
    title: 'Eu não sei de nada',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-justify lg:px-0
                   md:text-left"
      >
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
    title: 'Escoteiros em atividade',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-justify lg:px-0
                   md:text-left"
      >
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
    src: '/gallery/imagem-4.jpg',
    title: 'Culpa do Alemão',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-justify lg:px-0
                   md:text-left"
      >
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
    src: '/gallery/imagem-5.jpg',
    title: 'Texto Ryan Bolado',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-justify lg:px-0
                   md:text-left"
      >
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
    src: '/gallery/imagem-6.jpg',
    title: 'Texto teste',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-justify lg:px-0
                   md:text-left"
      >
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
    src: '/gallery/imagem-7.jpg',
    title: 'Texto 4',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-10 lg:text-justify lg:px-0
                   md:text-left"
      >
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

function OurHistory() {
  const imageRefs = useRef([]);
  const [selectedImage, setSelectedImage] = useState(imagesData[0]);

  function handleImageClick(imageData, e) {
    setSelectedImage(imageData);
    addOutlineOnSelectedImage(e);
  };

  function removeOutlineOnDeselectedImage() {
    imageRefs.current.forEach(image => {
      if (image) {
        image.classList.remove(
          'outline',
          'outline-social-brand',
          'outline-[2px]',
          'scale-105'
        );
      }
    });
  }

  function addOutlineOnSelectedImage(e) {
    removeOutlineOnDeselectedImage();
    e.target.classList.add(
      'outline',
      'outline-social-brand',
      'outline-[2px]',
      'scale-105'
    );
  }

  function generateImagesBoard() {
    return (
      <div
        className="lg:flex lg:h-24 lg:gap-11 lg:overflow-x-visible
                   md:flex md:gap-8
                   md:items-center md:justify-center
                   flex gap-8 overflow-x-scroll items-center justify-center h-24
                   snap-x snap-mandatory scroll-smooth invisible-scrollbar"
      >
        {imagesData.map((imageData, index) => (
          <img
            key={`${index}-${imageData.text}-${imageData.title}-${imageData.src}`}
            className={`
              lg:w-24 lg:h-24 lg:cursor-pointer lg:hover:scale-105
              lg:transition lg:duration-500
              md:h-20 md:w-20 md:mx-2
              h-20 w-20 shrink-0 snap-center rounded-full object-cover
              touch-pan-x select-none
              ${index === 0 && 'outline outline-social-brand outline-[2px] scale-105'}
            `}
            title={imageData.date}
            aria-describedby={imageData.text}
            src={imageData.src}
            alt={`Imagem ${index + 1}`}
            onClick={e => handleImageClick(imageData, e)}
            draggable={false}
            ref={el => (imageRefs.current[index] = el)}
          />
        ))}
      </div>
    );
  }

  return (
    <section
      className="lg:bg-light-social-brand lg:pt-12 lg:pb-28
                   md:bg-light-social-brand md:pt-12 md:pb-28
                   bg-light-social-brand pt-12 pb-16"
    >
      <div
        className="lg:max-w-[1024px] lg:mx-auto
                   md:max-w-[620px] md:mx-auto
                   max-w-[320px] mx-auto">
        <SectionTitle
          content="Nossa História"
          className="lg:text-left
                     md:text-left
                     text-left"
        />
        <div className="pt-12 flex gap-20">
          {generateImagesBoard()}
        </div>
        <div
          className="lg:flex lg:flex-col lg:pt-12
                     md:flex md:flex-col md:pt-12
                     flex flex-col pt-12"
        >
          <div className="lg:flex lg:pt-0">
            <div className="lg:px-0 flex">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:w-[3800px] lg:h-[420px] lg:rounded-md lg:cursor-pointer
                             lg:object-cover lg:shadow-lg
                             md:w-full md:h-[320px]
                             w-full h-[200px] rounded-md cursor-pointer object-cover shadow-lg"
                  title={selectedImage.date}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  aria-describedby={selectedImage.date}
                  draggable={false}
                />
              </AnimatePresence>
            </div>
            <div
              className="lg:text-left
                         md:text-left
                         text-left">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={selectedImage.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="lg:py-6 lg:text-2xl lg:font-semibold lg:pl-16
                             md:py-6 md:text-2xl md:font-semibold
                             py-6 text-2xl font-semibold"
                >
                  <span
                    className="lg:text-social-brand lg:font-semibold lg:text-2xl
                               md:text-social-brand md:font-semibold md:text-2xl
                               text-social-brand font-semibold text-2xl">
                    {selectedImage.title}
                  </span>
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedImage.text}
                </motion.div>
              </AnimatePresence>
              <div
                className="lg:flex-row lg:justify-start lg:items-center lg:px-16 lg:gap-x-4 lg:pt-16
                           md:flex-row md:justify-start md:items-center md:gap-x-4
                           flex flex-col justify-left items-start pt-10 gap-y-4"
              >
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
      </div>
    </section>
  );
}

export { OurHistory };
