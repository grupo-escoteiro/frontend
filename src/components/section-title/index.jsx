import { string } from 'prop-types';

function SectionTitle({ content, className }) {
  return(
    <h2 className={`text-3xl font-bold ${className}`}>{content}</h2>
  );
}

SectionTitle.propTypes = {
  content: string,
  className: string,
};

export { SectionTitle };