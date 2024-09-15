/* eslint-disable react/prop-types */
import { useRef, forwardRef } from 'react';
import { string } from 'prop-types';
import { Check, X } from 'lucide-react';

const InputBase = (
  {
    label,
    placeholder,
    errorMessage,
    type = 'text',
    ...rest
  },
  ref
) => {
  const inputReference = useRef(null);

  function handleInputClick() {
    ref.current?.focus();
  }

  return (
    <fieldset className="flex flex-col w-full">
      <label
        htmlFor={label}
        className="font-medium text-[16px] text-social-black"
      >
        {label}
      </label>
      <div
        className={`
          py-5 px-4 my-2 bg-social-white flex items-center justify-between gap-x-4 rounded
          ${errorMessage === undefined
            ? 'border border-solid border-social-gray text-social-gray'
            : errorMessage
              ? 'border border-solid border-social-red text-social-red'
              : 'border border-solid border-social-brand text-social-brand'
          }
        `}
        onClick={() => handleInputClick()}
      >
        <input
          {...rest}
          type={type}
          id={label}
          placeholder={placeholder}
          className={`
            outline-none placeholder:text-social-gray bg-social-white
            placeholder:font-regular placeholder:text-sm w-full text-social-black
          `}
          name={rest.name}
          ref={ref || inputReference}
          onClick={event => event.stopPropagation()}
          aria-label={label}
        />
        {errorMessage && (
          <X
            className="text-social-red"
            size={23}
            aria-hidden="true"
          />
        )}
        {errorMessage !== undefined && !errorMessage && (
          <Check
            className="text-[#059A00]"
            size={23}
            aria-hidden="true"
          />
        )}
      </div>
      {errorMessage && (
        <span className="text-social-red font-regular text-sm">{errorMessage}</span>
      )}
    </fieldset>
  );
};

const Input = forwardRef(InputBase);
Input.displayName = 'Input';

Input.propTypes = {
  label: string.isRequired,
  placeholder: string.isRequired,
  errorMessage: string,
  type: string,
};

export { Input };
