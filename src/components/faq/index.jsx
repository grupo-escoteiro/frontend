import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { arrayOf, node, oneOfType, shape, string } from 'prop-types';
import { useTranslation } from 'react-i18next';

function Faq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const { t } = useTranslation();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="lg:max-w-[1024px] lg:mx-auto
                 md:max-w-[620px] md:mx-auto
                 max-w-[320px] mx-auto">
      <div
        className="lg:grid lg:grid-cols-2 lg:gap-4 lg:place-items-start
                   md:grid md:grid-cols-1 md:gap-0 md:place-items-start 
                   grid-cols-1 gap-4 place-items-start">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="lg:border lg:w-full border-social-gray bg-social-white dark:bg-dark-social-background
                       lg:rounded lg:my-0 dark:text-dark-social-white
                       border w-full rounded my-4"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="lg:w-full lg:flex lg:justify-between lg:items-center 
                         lg:px-4 lg:py-3 lg:text-social-black lg:font-medium
                         w-full flex justify-between items-center px-4 py-3 text-social-black
                         font-medium text-left dark:text-dark-social-white"
            >
              {t(faq.question)}
              <ChevronDown
                className={`
                  transition-transform duration-300
                  ${openIndex === index ? 'rotate-180' : ''}
                `}
              />
            </button>
            <div
              className={`
                overflow-hidden transition-max-height duration-300 ease-linear
                ${openIndex === index ? 'max-h-40' : 'max-h-0'}
              `}
            >
              <div
                className="lg:px-4 lg:py-3 lg:text-social-black
                           px-4 py-3 text-left text-social-black dark:text-dark-social-white">
                {t(faq.answer)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Faq.propTypes = {
  faqs: arrayOf(
    shape({
      question: string.isRequired,
      answer: oneOfType([string, node]).isRequired,
    })
  ).isRequired,
};

export { Faq };
