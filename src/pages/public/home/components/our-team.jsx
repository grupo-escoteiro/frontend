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
          <Cards url={ryan} />
          <Cards url={alemao} />
          <Cards url={jao} />
        </div>
      </div>
    </section>
  );
}

export { OurTeam };