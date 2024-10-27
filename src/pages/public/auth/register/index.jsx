import { useContext } from 'react';
import { registerContext } from '../../../../contexts/register-context';
import { getNextStep } from '../../../../helpers/get-next-step';
import { PageTransition } from '../../../../components/page-transition';
import { AnimatePresence } from 'framer-motion';

function Register() {
  const { currentStep } = useContext(registerContext);

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={currentStep}>
        {getNextStep(currentStep)}
      </PageTransition>
    </AnimatePresence>
  );
}

export { Register };
