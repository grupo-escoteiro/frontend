import { node, string } from "prop-types";

function Container({ children, className }) {
  return (
    <div
      className={`
        bg-social-white rounded px-8 py-16 shadow-default max-w-6xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: node.isRequired,
  className: string
}

export { Container };
