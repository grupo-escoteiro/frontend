import { useRef, useState } from 'react';
import { string } from 'prop-types';

import { Check, X } from 'lucide-react';

function Input({ label, placeholder, errorMessage }) {
  const [containsError] = useState(null);
  const inputReference = useRef(null);

  function handleInputClick() {
    inputReference.current?.focus();
  }

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={label}
        className="font-medium text-[16px] text-[#1a1a1a]"
      >
        {label}
      </label>
      <div
        className={`
          py-[20px] px-4 my-2 bg-[#fafafa] flex items-center justify-between gap-x-4 rounded
          ${containsError ? 'border-[1px] border-solid border-[#FF6347] text-[#FF6347]' : 'border-[1px] border-solid border-[#059A00] text-[#059A00]'}
        `}
        onClick={() => handleInputClick()}
      >
        <input
          type="text"
          id={label}
          placeholder={placeholder}
          className="outline-none placeholder:text-[#afafaf] bg-[#fafafa] placeholder:font-regular placeholder:text-[16px] w-full"
          ref={inputReference}
          onClick={event => event.stopPropagation()}
          aria-label={label}
        />
        {containsError && (
          <X
            className="text-[#FF6347]"
            size={23}
            aria-hidden="true"
          />
        )}
        {!containsError && (
          <Check
            className="text-[#059A00]"
            size={23}
            aria-hidden="true"
          />
        )}
      </div>
      {containsError && (
        <span className="text-[#FF6347] font-regular text-[16px]">{errorMessage}</span>
      )}
    </div>
  );
}

Input.propTypes = {
  label: string,
  placeholder: string,
  errorMessage: string,
}

export { Input };
