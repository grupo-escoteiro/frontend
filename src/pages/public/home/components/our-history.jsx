import { useRef, useState } from 'react';
import { SectionTitle } from '../../../../components/section-title';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const imagesData = [
  {
    src: '/gallery/imagem-1.jpg',
    title: 'Um Grandioso Dia',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-left lg:px-0
                   md:text-left"
      >
        No Movimento Escoteiro, cada atividade é uma oportunidade de aprendizado 
        e crescimento. Desde aventuras ao ar livre até projetos que estimulam a criatividade, 
        os jovens desenvolvem habilidades importantes enquanto fortalecem valores como trabalho em equipe, 
        respeito e liderança. Participar desse movimento significa não apenas explorar novos horizontes, mas 
        também construir memórias inesquecíveis que durarão para sempre, criando laços que atravessam gerações e
        mantendo o espírito do escotismo.
      </p>
    )
  },
  {
    src: '/gallery/imagem-2.jpg',
    title: 'Um Dia de União e Conquistas',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-left lg:px-0
                   md:text-left"
      >
        Reunidos sob o mesmo propósito, celebramos as conquistas de cada 
        integrante deste movimento que transforma vidas. Entre sorrisos e aplausos, 
        fortalecemos laços de amizade e compartilhamos experiências que inspiram a jornada de todos. 
        Esta união reflete o compromisso de cada um em construir um futuro mais justo e colaborativo. 
        Aqui, cada momento é especial e nos lembra que, juntos, somos mais fortes. Venha fazer parte desta 
        família e descubra como o escotismo pode mudar sua vida!
      </p>
    )
  },
  {
    src: '/gallery/imagem-3.jpg',
    title: 'Compromisso e Trabalho em Equipe',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-left lg:px-0
                   md:text-left"
      >
        Cada encontro é uma oportunidade de celebrar o esforço coletivo 
        e o aprendizado contínuo. Aqui, escoteiros de diferentes idades 
        compartilham momentos de crescimento, realizam conquistas e fortalecem valores essenciais 
        para a vida em comunidade. Com união e dedicação, construímos um ambiente onde cada jovem 
        pode se desenvolver e transformar o mundo ao seu redor. Venha se juntar a nós e descubra como é fazer parte 
        desta jornada de descobertas e aventuras!
      </p>
    )
  },
  {
    src: '/gallery/imagem-4.jpg',
    title: 'A Força do Escotismo',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-left lg:px-0
                   md:text-left"
      >
        No coração de cada encontro escoteiro, surge uma energia única que 
        transforma simples momentos em experiências extraordinárias. Com uniformes 
        que simbolizam união e propósito, jovens e adultos se reúnem para compartilhar conhecimentos, 
        celebrar conquistas e fortalecer laços de amizade. Sob a bandeira que tremula orgulhosamente, 
        cada formação, cada atividade e cada gesto de companheirismo reflete os valores fundamentais do movimento 
        escoteiro.
      </p>
    )
  },
  {
    src: '/gallery/imagem-5.jpg',
    title: 'Ritmo e Alegria',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-left lg:px-0
                   md:text-left"
      >
        Na jornada escoteira, a música se torna uma poderosa ferramenta de união 
        e expressão, onde cada batida de tambor e cada canção entoada carregam consigo 
        o espírito de fraternidade e alegria. Com instrumentos em mãos e sorrisos nos rostos, escotistas 
        e jovens compartilham momentos musicais que transcendem as palavras, criando uma atmosfera de harmonia 
        e celebração que fortalece os laços entre todos os membros do movimento, tornando cada encontro uma experiência 
        única e memorável.
      </p>
    )
  },
  {
    src: '/gallery/imagem-6.jpg',
    title: 'Movimento e Sincronismo',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-left lg:px-0
                   md:text-left"
      >
        Em cada atividade escoteira, o movimento sincronizado se torna uma expressão de 
        unidade e disciplina. Com gestos coordenados e sorrisos nos rostos, os jovens aprendem 
        que cada movimento tem um propósito, cada gesto conta uma história. Através dessas dinâmicas, desenvolvem 
        não apenas coordenação e ritmo, mas também o verdadeiro espírito de equipe, onde cada participante é uma parte 
        essencial de um todo maior, criando momentos de aprendizado que combinam diversão e desenvolvimento pessoal.
      </p>
    )
  },
  {
    src: '/gallery/imagem-7.jpg',
    title: 'Escotismo e Espiritualidade',
    date: '31/10/2023',
    text: (
      <p
        className="lg:pl-16 lg:text-left lg:px-0
                   md:text-left"
      >
        No encontro entre fé e escotismo, surge um momento especial de reflexão e crescimento 
        espiritual. Com respeito e abertura, jovens escoteiros participam de momentos que transcendem 
        as atividades cotidianas, aprendendo valores fundamentais através do diálogo inter-religioso e da convivência 
        harmoniosa. Estes encontros fortalecem não apenas a dimensão espiritual do movimento escoteiro, mas também 
        promovem o entendimento e o respeito pela diversidade de crenças, construindo pontes entre diferentes 
        tradições e culturas.
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
        className="lg:flex lg:gap-x-[58px] lg:h-24 lg:overflow-x-visible lg:px-0
                   md:flex md:gap-8 md:h-24
                   md:items-center md:justify-start md:px-[3.5px]
                   flex gap-8 overflow-x-scroll items-center justify-start h-24
                   snap-x snap-mandatory scroll-smooth invisible-scrollbar px-[3.5px]"
      >
        {imagesData.map((imageData, index) => (
          <img
            key={`${index}-${imageData.text}-${imageData.title}-${imageData.src}`}
            className={`
              lg:w-24 lg:h-24 lg:cursor-pointer lg:hover:scale-105
              lg:transition lg:duration-500
              md:h-20 md:w-20
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
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-[530px] lg:h-[420px] lg:rounded-md lg:cursor-pointer
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
            <div
              className="lg:text-left lg:flex lg:flex-col lg:min-h-[420px]
                         md:text-left
                         text-left">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={selectedImage.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="lg:pb-6 lg:pt-0 lg:text-2xl lg:font-semibold lg:pl-16
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
                  className="lg:flex-1 md:flex-1 flex-1"
                >
                  {selectedImage.text}
                </motion.div>
              </AnimatePresence>
              <div
                className="lg:flex-row lg:justify-start lg:items-center lg:pl-16 lg:gap-x-4 lg:pt-16
                           md:flex-row md:justify-start md:items-center md:gap-x-4
                           flex flex-col justify-left items-start pt-8 gap-y-4"
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
