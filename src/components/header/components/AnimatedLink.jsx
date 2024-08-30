import { string } from 'prop-types';

function AnimatedLink({ href = '#', text }) {
  return (
    <a
        className="no-underline text-social-brand font-medium relative hover:before:w-3/4 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] before:content-[''] before:inline-block before:absolute before:bottom-0 before:h-[2px] before:w-0 before:bg-social-brand"
        href={href}
        target="_self"
        rel="next noopener noreferrer follow"
    >
        {text}
    </a>
  );
}

AnimatedLink.propTypes = {
  href: string,
  text: string,
};

export { AnimatedLink };
