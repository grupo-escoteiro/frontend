import { node } from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { htmlTagsThatSupportTextChildren } from '../helpers/html-tags';

// TODO: Permit that users configure by themselves the speech properties

const AccessibilityContext = createContext({});
const getConfigurationInitialState = {
  lang: 'pt-BR',
  rate: 1,
};
const utterance = new SpeechSynthesisUtterance();
const speech = speechSynthesis;

utterance.lang = getConfigurationInitialState.lang;
utterance.rate = getConfigurationInitialState.rate;

function AccessibilityContextProvider({ children }) {
  const [readingModeEnabled, setReadingModeEnabled] = useState(false);

  function changeReadMode() {
    setReadingModeEnabled(state => !state);
  }

  function stop() {
    speech.cancel();
  }

  function speak(text) {
    const isValidToSpeak = typeof text === 'string' && readingModeEnabled;
    if(isValidToSpeak) {
      utterance.text = text;
      speech.speak(utterance);
    }
  }

  function addStylesOnReadingMode(event) {
    const target = event.target;
    const isValidTagToSpeak = target.innerText
      && htmlTagsThatSupportTextChildren.includes(target.localName)
      && readingModeEnabled;

    if(isValidTagToSpeak) {
      target.classList.add('underline', 'cursor-pointer');
    }
  }

  function removeStylesOnReadingMode(event) {
    const target = event.target;
    const isValidTagToSpeak = target.innerText
      && htmlTagsThatSupportTextChildren.includes(target.localName)
      && readingModeEnabled;

    if(isValidTagToSpeak) {
      target.classList.remove('underline', 'cursor-pointer');
    }
  }

  useEffect(() => {
    window.addEventListener('mouseover', addStylesOnReadingMode);
    window.addEventListener('mouseout', removeStylesOnReadingMode);

    return () => {
      window.removeEventListener('mouseover', addStylesOnReadingMode);
      window.removeEventListener('mouseout', removeStylesOnReadingMode);
    };
  });

  return (
    <AccessibilityContext.Provider
      value={{
        speak,
        stop,
        readingModeEnabled,
        changeReadMode,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

AccessibilityContextProvider.propTypes = {
  children: node,
};

export {
  AccessibilityContextProvider,
  AccessibilityContext,
};
