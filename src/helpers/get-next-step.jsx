import { FirstStep } from '../pages/public/auth/register/components/first-step';
import { SecondStep } from '../pages/public/auth/register/components/second-step';
import { ThirdStep } from '../pages/public/auth/register/components/third-step';
import { FourthStep } from '../pages/public/auth/register/components/fourth-step';
import { FifthChildStep } from '../pages/public/auth/register/components/fifth-child-step';
import { SixthChildStep } from '../pages/public/auth/register/components/sixth-child-step';

function getNextStep(currentStep) {
  switch(currentStep) {
    case 1:
      return <SecondStep />;

    case 2:
      return <ThirdStep />;

    case 3:
      return <FourthStep />;

    case 4:
      return <FifthChildStep />;

    case 5:
      return <SixthChildStep />;

    default:
      return <FirstStep />;
  }
}

export { getNextStep };
