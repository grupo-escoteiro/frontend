// TODO: CREATE AN HISTORY

import { useRef, useState } from 'react';
import { Container } from '../../../components/container';
import { PageTransition } from '../../../components/page-transition';
import { SectionTitle } from '../../../components/section-title';
import { formatToDateTime } from 'brazilian-values';
import { SendHorizontal } from 'lucide-react';
import { model } from '../../../services/gemini/index.js';
import ia from '/ia.png';
import iaAnswer from '/ia-answer.png';

function ChatGemini() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [iaAnswers, setIaAnswers] = useState([]);
  const [expandedAnswers, setExpandedAnswers] = useState({}); // Estado para controlar respostas expandidas
  const form = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (message.length === 0) return;

    const messageFormatted = {
      value: message,
      sendedAt: new Date()
    };

    setMessages(prev => [...prev, messageFormatted]);
    setIsLoading(true);
    setMessage('');

    try {
      const result = await model.generateContent(message);
      const response = await result.response.text();

      setIaAnswers(prev => [...prev, {
        value: response,
        sendedAt: new Date()
      }]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  // function addQuestionAndAnswerOnSessionStorage() {
  //   const history = messages.map((message, index) => {
  //     return ({
  //       message,
  //       answer: iaAnswer[index] || null
  //     });
  //   });

  //   window.sessionStorage.getItem('chatHistory', JSON.stringify(history));
  // }

  function handleKeyDown(event) {
    if (event.code !== 'Enter') return;
    event.preventDefault();
    form.current.dispatchEvent(
      new Event(
        'submit',
        {
          cancelable: true,
          bubbles: true
        }
      )
    );
  }

  function toggleExpand(index) {
    setExpandedAnswers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }

  function renderAnswerText(answer, index) {
    const maxLength = 300;
    const isExpanded = expandedAnswers[index];
    const shouldTruncate = answer.length > maxLength;

    if (shouldTruncate && !isExpanded) {
      return (
        <>
          {answer.slice(0, maxLength)}...
          <button
            className="text-blue-500 hover:underline ml-1"
            onClick={() => toggleExpand(index)}
          >
            ver mais
          </button>
        </>
      );
    }

    return (
      <>
        {answer}
        {shouldTruncate && (
          <button
            className="text-blue-500 hover:underline ml-1"
            onClick={() => toggleExpand(index)}
          >
            {isExpanded ? 'ver menos' : 'ver mais'}
          </button>
        )}
      </>
    );
  }

  // useEffect(() => {
  //   addQuestionAndAnswerOnSessionStorage();
  // }, [messages, iaAnswers]);

  return (
    <PageTransition className="h-full">
      <section className="pt-12 min-h-full flex">
        <div className="max-w-[1160px] mx-auto flex-1">
          <div className="flex items-center justify-between">
            <SectionTitle content="Chat" />
            <button
              onClick={() => sessionStorage.clear()
              }
              type="button"
              className={`
                text-social-red font-regular transition duration-500
                hover:brightness-50
              `}
            >
              Limpar histórico
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-4 py-4 h-full">
            <Container className="p-4 flex flex-col gap-y-4">
              <div
                className={`
                  flex flex-col gap-y-2 overflow-y-scroll max-h-64
                  min-h-72 ${messages.length === 0 ? 'justify-center' : ''}
                `}
              >
                {messages && messages.map((message) => (
                  <div
                    className={`
                      p-2 bg-social-brand/10 inline rounded
                      overflow-hidden max-w-72 break-words shrink-0
                    `}
                    key={`${message.value}-${message.sendedAt}`}
                  >
                    <p className="text-base max-w-full">{message.value}</p>
                    <span className="text-xs text-right w-full inline-block">
                      {formatToDateTime(message.sendedAt).split(' ')[1]}
                    </span>
                  </div>
                ))}
                {messages.length === 0 && (
                  <div className="flex items-center justify-center mt-28">
                    <img
                      src={ia}
                      alt="Não ha nada por aqui"
                      aria-hidden={true}
                      className="max-h-32"
                    />
                    <h3 className="text-social-brand font-bold text-center">
                      Aqui aparecerão as suas perguntas
                    </h3>
                  </div>
                )}
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex gap-x-4"
                ref={form}
              >
                <textarea
                  className={`
                    resize-none w-full outline-none border-social-brand border-px
                    text-social-brand p-2 rounded placeholder:text-social-gray
                  `}
                  placeholder="Faça uma pergunta, peça uma história e muito mais..."
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                />
                <button
                  className={`
                    self-end h-16 p-4 rounded text-social-brand
                    hover:brightness-95 transition-all
                    hover:bg-social-brand hover:text-social-white
                  `}
                  type="submit"
                  disabled={isLoading}
                >
                  <SendHorizontal size={32} />
                </button>
              </form>
            </Container>
            <Container className="p-4 flex flex-col gap-y-4">
              <div
                className={`
                  flex flex-col gap-y-2 overflow-y-scroll max-h-64
                  min-h-full ${iaAnswers.length === 0 ? 'justify-center' : ''}
                `}
              >
                {iaAnswers && iaAnswers.map((answer, index) => (
                  <div
                    className={`
                      p-2 bg-light-social-blue/30 inline rounded
                      overflow-hidden max-w-72 break-words shrink-0
                    `}
                    key={`${answer.value}-${answer.sendedAt}`}
                  >
                    <p className="text-base max-w-full">
                      {renderAnswerText(answer.value, index)}
                    </p>
                    <span className="text-xs text-right w-full inline-block">
                      {formatToDateTime(answer.sendedAt).split(' ')[1]}
                    </span>
                  </div>
                ))}
                {iaAnswers.length === 0 && (
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-social-brand font-bold text-center">
                      Aqui aparecerão as minhas respostas
                    </h3>
                    <img
                      src={iaAnswer}
                      alt="Não há nada por aqui"
                      aria-hidden={true}
                      className="max-h-32"
                    />
                  </div>
                )}
              </div>
            </Container>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export { ChatGemini };
