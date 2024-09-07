import { string } from 'prop-types';

function SectionTitle({ content }) {
  return(
    <h2 className="text-3xl font-bold">{content}</h2>
  );
}

SectionTitle.propTypes = {
  content: string,
};

export { SectionTitle };