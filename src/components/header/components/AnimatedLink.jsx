import { any, string, bool } from 'prop-types';
import { Link } from 'react-router-dom';

function AnimatedLink({
  to = '#',
  text,
  className = '',
  isActive = false,
  ...rest
}) {
  return (
    <Link
      {...rest}
      className={`
        no-underline text-social-black font-medium relative hover:before:w-3/4
        before:transition-all before:duration-500 before:ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
        before:content-[''] before:inline-block before:absolute before:bottom-0
        before:h-[2px] before:w-0
        ${isActive ? 'text-social-brand before:bg-social-brand before:w-3/4' : 'before:bg-social-black'}
        ${className}
      `}
      to={to}
      target="_self"
      rel="next noopener noreferrer follow"
    >
      {text}
    </Link>
  );
}

AnimatedLink.propTypes = {
  to: string,
  text: string,
  className: string,
  isActive: bool,
  rest: any
};

export { AnimatedLink };
