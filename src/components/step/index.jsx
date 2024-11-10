import { number } from 'prop-types';
import { useCallback } from 'react';

function Step({ steps, active = 1 }) {

  const getStepClassNames = useCallback((isActive, isCompleted) => {
    const baseClasses = 'px-5 py-3 outline-1 outline rounded-full select-none font-semibold';

    if (isActive) {
      return `${baseClasses} outline-social-brand text-social-brand`;
    }
    if (isCompleted) {
      return `${baseClasses} outline-social-brand text-social-white bg-social-brand`;
    }
    return `${baseClasses} outline-social-gray text-social-gray`;
  }, []);

  function generateSteps() {
    return Array.from({ length: steps }, (_, i) => {
      const stepNumber = i + 1;
      const isActive = stepNumber === active;
      const isCompleted = stepNumber < active;
      const showDivider = stepNumber < steps;

      return (
        <div className="flex items-center" key={stepNumber}>
          <span
            className={getStepClassNames(isActive, isCompleted)}
          >
            {stepNumber}
          </span>
          {showDivider && (
            <span
              className={`
                lg:inline-block lg:w-6 lg:h-px lg:mx-2
                md:inline-block md:w-6 md:h-px md:mx-2
                inline-block w-1 h-px mx-1
                ${isCompleted ? 'bg-social-brand' : 'bg-social-gray'}
              `}
            ></span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex">
      {steps > 0 && generateSteps()}
    </div>
  );
}

Step.propTypes = {
  steps: number.isRequired,
  active: number.isRequired,
};

export { Step };
