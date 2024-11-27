import { useEffect, useState } from 'react';
import { PageTransition } from '../../../components/page-transition';
import { SectionTitle } from '../../../components/section-title';
import { Box } from '../../../components/box';
import { AnimatedLink } from '../../../components/header/components/AnimatedLink';

function News() {
  const [ news , setNews ] = useState([]);
  
  useEffect ( () => {
    fetch('https://sample-express-server.vercel.app/news?q=natureza')
      .then(r => r.json())
      .then(r => setNews ( r.articles ));
  } , [] );

  return(
    <PageTransition>
      <section className="pt-12 pb-20">
        <div
          className="lg:max-w-[1024px] lg:mx-auto
                     md:max-w-[620px] md:mx-auto
                     max-w-[320px] mx-auto">
          <SectionTitle
            className="lg:pt-12 lg:pb-14 lg:text-left
                       md:pt-12 md:pb-14 md:text-left
                       pt-4 pb-8 text-left"
            content="Noticias"
          />
          <div>
            <ul className="flex gap-8 flex-wrap">
              {news.length > 0 && news.map(newItem =>
              { 
                if (newItem.urlToImage)
                {
                  return (
                    <li 
                      key={newItem.url} 
                    >
                      <Box className="grid grid-cols-[1fr,2fr] gap-4 max-h-[224px] overflow-y-hidden pr-4">
                        <img 
                          src={newItem.urlToImage} 
                          alt={newItem.title}
                          className="object-cover min-h-full min-w-full"
                        />
                        <div className="flex flex-col gap-4 py-4">
                          <h2 className="font-bold">
                            {newItem.title}
                          </h2>
                          <p className="flex-1">
                            {newItem.content.split('[')[0].trim()}
                          </p>
                          <AnimatedLink text={'Saiba mais...'} to={newItem.url}/>
                        </div>
                      </Box>
                    </li>
                  );
                }
                return null;
              }
              ).filter(item => item)}
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export { News };