import { Cards } from '../../../../components/cards';
import { SectionTitle } from '../../../../components/section-title';
import ryan from '../../../../../public/fotos-ryan.jpg';
import alemao from '../../../../../public/fotos-alemao.jpg';
import jao from '../../../../../public/fotos-jao.jpg';

function OurTeam() {
  return (
    <section className="pt-12 pb-20">
      <div className="max-w-[1160px] mx-auto">
        <SectionTitle 
          content="Nossa equipe"
          className="mb-9"
        />
        <div className="flex gap-12">
          <Cards 
            url={ryan} 
            instagram="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr"
            linkedin="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261?utm_source=share&utm_
            campaign=share_via&utm_content=profile&utm_medium=ios_app"
          />
          <Cards 
            url={alemao} 
            instagram="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr"
            linkedin="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261?utm_source=share&utm_
            campaign=share_via&utm_content=profile&utm_medium=ios_app"
          />
          <Cards 
            url={jao} 
            instagram="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr"
            linkedin="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261?utm_source=share&utm_
            campaign=share_via&utm_content=profile&utm_medium=ios_app"
          />
        </div>
      </div>
    </section>
  );
}

export { OurTeam };