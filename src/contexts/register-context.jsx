/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useState } from 'react';
import { createUserWithEmailAndPasswordAsync } from '../services/firebase/auth.js';
import { useNavigate } from 'react-router-dom';
import { node } from 'prop-types';
import { EJourney } from '../helpers/enums/journey.js';
import { toast } from 'sonner';

export const registerContext = createContext({});

function RegisterContextProvider({ children }) {
  const navigate = useNavigate();
  const [journey, setJourney] = useState(EJourney.responsible);
  const [stepsAmount, setStepsAmount] = useState(3);
  const [currentStep, setCurrentStep] = useState(0);

  const changeRegisterStep = useCallback(() => {
    if (journey === EJourney.responsible || journey === EJourney.both) {
      setStepsAmount(5);
    }

    setCurrentStep(prev => prev + 1);
  }, [journey]);

  const register = useCallback(async e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirmation = form.passwordConfirmation.value;

    if(password !== passwordConfirmation) {
      toast.error('As senhas não são iguais');
      return;
    }

    try {
      await createUserWithEmailAndPasswordAsync(email, password);

      toast.success('Cadastro efetuado com sucesso!');
      navigate('/autenticacao/login');
    }catch {
      toast.error('Opps! Houve um erro no seu cadastro!');
    }
  }, [navigate]);

  return (
    <registerContext.Provider
      value={{
        journey,
        setJourney,
        changeRegisterStep,
        stepsAmount,
        currentStep,
        register
      }}>
      {children}
    </registerContext.Provider>
  );
}

RegisterContextProvider.propTypes = {
  children: node
};

export { RegisterContextProvider };
