import FinishStep from '@/pages/onboarding/components/FinishStep';
import GenreStep from '@/pages/onboarding/components/GenreStep';
import InfoStep from '@/pages/onboarding/components/InfoStep';
import LevelStep from '@/pages/onboarding/components/LevelStep';
import OnboardingHeader from '@/pages/onboarding/components/OnboardingHeader';
import ProfileStep from '@/pages/onboarding/components/ProfileStep';
import { footerWrapperStyle, containerStyle, bodyWrapperStyle, progressBarStyle } from '@/pages/onboarding/index.css';
import BoxButton from '@/components/BoxButton';
import ProgressBar from '@/components/ProgressBar';
import { useFunnel } from '@/hooks/useFunnel';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

const Onboarding = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(5, ROUTES_CONFIG.home.path);

  const handleNextButtonClick = () => {
    setStep(1);
  };

  const handlePrevButtonClick = () => {
    if (currentStep === 1) {
    }
    setStep(-1);
  };

  return (
    <div className={containerStyle}>
      <OnboardingHeader currentStep={currentStep} onPrevButtonClick={handlePrevButtonClick} />
      {currentStep < 5 && <ProgressBar totalStep={4} currentStep={currentStep} className={progressBarStyle} />}

      <div className={bodyWrapperStyle}>
        <Funnel>
          <Step name="1">
            <InfoStep></InfoStep>
          </Step>
          <Step name="2">
            <GenreStep></GenreStep>
          </Step>
          <Step name="3">
            <LevelStep></LevelStep>
          </Step>
          <Step name="4">
            <ProfileStep></ProfileStep>
          </Step>
          <Step name="5">
            <FinishStep></FinishStep>
          </Step>
        </Funnel>
      </div>

      <div className={footerWrapperStyle}>
        <BoxButton variant="primary" onClick={handleNextButtonClick}>
          {currentStep === 5 ? '홈으로 이동' : '다음'}
        </BoxButton>
      </div>
    </div>
  );
};

export default Onboarding;
