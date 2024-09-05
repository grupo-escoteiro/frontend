import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { arrayOf, node, oneOfType, shape, string } from 'prop-types';

function Faq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1160px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-start">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border w-full border-social-gray bg-social-white rounded"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-social-black font-medium"
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
              <div className="px-4 py-3 text-social-black">
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
