import { string } from 'prop-types';

function SectionTitle({ content, className }) {
  return(
    <h2 className={`lg:text-3xl lg:font-bold text-2xl font-bold ${className}`}>{content}</h2>
  );
}

SectionTitle.propTypes = {
  content: string,
  className: string,
};

export { SectionTitle };