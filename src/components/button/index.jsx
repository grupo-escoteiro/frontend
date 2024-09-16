import { string } from 'prop-types';

import { Trash2 } from 'lucide-react';

function Button({
  variant,
  content,
  type,
  ...rest
}) {
  return (
    <button
      {...rest}
      type={type}
      className={`
        rounded font-bold text-4 uppercase text-social-white py-[10px]
        px-[75px] inline-flex items-center justify-center min-w-64 gap-x-[10px]
        transition duration-500 hover:brightness-90 shadow-default
        ${variant === 'green' ? 'bg-social-brand' : 'bg-social-red'}
      `}
    >
      { variant !== 'green' && (
        <Trash2 aria-hidden="true" />
      )}
      {content}
    </button>
  );
}

Button.propTypes = {
  variant: string,
  content: string,
  type: string,
};

export { Button };
