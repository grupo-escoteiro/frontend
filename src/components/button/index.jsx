import { string } from 'prop-types';

import { Trash2 } from 'lucide-react';

function Button({ variant }) {
    return (
        <button
            type="button"
            className={`
                rounded font-bold text-[16px] uppercase text-[#fff] py-[10px] px-[75px] inline-flex gap-x-[10px]
                ${variant === 'green' ? 'bg-[#059A00]' : 'bg-[#FF6347]'}
            `}
        >
            { variant !== 'green' && (
                <Trash2 aria-hidden="true" />
            )}
            Texto
        </button>
    );
}

Button.propTypes = {
  variant: string
}

export { Button };
