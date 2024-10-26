import { node, string } from 'prop-types';

function Container({ children, className }) {
  return (
    <div
      className={`
        bg-social-white rounded shadow-default max-w-6xl
        overflow-hidden ${className}
      `}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: node.isRequired,
  className: string
};

export { Container };
