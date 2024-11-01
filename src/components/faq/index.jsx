import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { arrayOf, node, oneOfType, shape, string } from 'prop-types';

function Faq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:max-w-[1160px] lg:mx-auto lg:px-0 px-8">
      <div
        className="lg:grid lg:gap-4 lg:place-items-start 
                   grid-cols-1 md:grid-cols-2 gap-4 place-items-start">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="lg:border lg:w-full lg:border-social-gray lg:bg-social-white lg:rounded lg:my-0 
                       border w-full border-social-gray bg-social-white rounded my-4"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="lg:w-full lg:flex lg:justify-between lg:items-center 
                         lg:px-4 lg:py-3 lg:text-social-black lg:font-medium
                         w-full flex justify-between items-center px-4 py-3 text-social-black
                         font-medium text-left"
            >
              {faq.question}
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
                           px-4 py-3 text-left text-social-black">
                {faq.answer}
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
