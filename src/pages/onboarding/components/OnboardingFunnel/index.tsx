import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FinishStep from '@/pages/onboarding/components/FinishStep';
import GenreStep from '@/pages/onboarding/components/GenreStep';
import InfoStep from '@/pages/onboarding/components/InfoStep';
import LevelStep from '@/pages/onboarding/components/LevelStep';
import OnboardingHeader from '@/pages/onboarding/components/OnboardingHeader';
import ProfileStep from '@/pages/onboarding/components/ProfileStep';
import { MAX_ONBOARDING_STEP } from '@/pages/onboarding/constants';
import { bodyWrapperStyle, containerStyle, footerWrapperStyle, progressBarStyle } from '@/pages/onboarding/index.css';
import { GenreTypes, onboardInfoTypes } from '@/pages/onboarding/types';
import { validateName, validatePhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/components/BoxButton';
import ProgressBar from '@/components/ProgressBar';
import { FunnelProps, StepProps } from '@/hooks/useFunnel';
import { usePostOnboard } from '@/apis/onboarding/queries';
import { setStorage } from '@/utils/handleToken';
import defaultProfile from '@/assets/images/image_profile_basic.png';

interface OnboardingFunnelProps {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}

const OnboardingFunnel = ({ currentStep, Funnel, setStep, Step }: OnboardingFunnelProps) => {
  const [info, setInfo] = useState<onboardInfoTypes>({
    name: '',
    phoneNumber: '',
    genres: [] as GenreTypes[],
    nickname: '',
    level: null,
    profileImageUrl: defaultProfile,
  });

  const [isNicknameError, setIsNicknameError] = useState(false);

  const { mutate: onboardMutate } = usePostOnboard();

  // 토큰 ref로 전역변수로 저장
  const location = useLocation();
  const tokenRef = useRef(location.state);

  const handleInfoChange = <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };
  const changeNicknameError = (isError: boolean) => {
    setIsNicknameError(isError);
  };

  const handleNextButtonClick = () => {
    setStep(1);
  };
  const handlePrevButtonClick = () => {
    setStep(-1);
  };

  const handleOnboardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onboardMutate(
      {
        ...info,
        accessToken: tokenRef.current.accessToken,
      },
      {
        onSuccess: ({ response }) => {
          console.log(response);
          console.log(response.status);
          // 온보딩 성공시 로컬스토리지에 토큰 등록
          if (response.status === 200) {
            setStorage(tokenRef.current.accessToken, tokenRef.current.refreshToken);
            setStep(1);
          }
        },
      }
    );
  };

  // 다음 버튼 활성화 판단
  const buttonActive = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return !(validateName(info.name) && validatePhoneNumber(info.phoneNumber));
      case 2:
        return !info.genres.length;
      case 3:
        return !info.level;
      case 4:
        return !info.nickname;
      case 5:
        return false;
      default:
        return true;
    }
  };

  return (
    <form className={containerStyle} onSubmit={handleOnboardSubmit}>
      <OnboardingHeader currentStep={currentStep} onPrevButtonClick={handlePrevButtonClick} />
      {currentStep < MAX_ONBOARDING_STEP && (
        <ProgressBar totalStep={MAX_ONBOARDING_STEP - 1} currentStep={currentStep} className={progressBarStyle} />
      )}

      <div className={bodyWrapperStyle}>
        <Funnel>
          <Step name="1" key={1}>
            <InfoStep name={info.name} phoneNumber={info.phoneNumber} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="2" key={2}>
            <GenreStep genres={info.genres} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="3" key={3}>
            <LevelStep level={info.level} onInfoChange={handleInfoChange} />
          </Step>
          <Step name="4" key={4}>
            <ProfileStep
              nickname={info.nickname}
              isNicknameError={isNicknameError}
              changeIsNicknameError={changeNicknameError}
              profileImageUrl={info.profileImageUrl}
              onInfoChange={handleInfoChange}
            />
          </Step>
          <Step name="5" key={5}>
            <FinishStep nickname={info.nickname} />
          </Step>
        </Funnel>
      </div>

      <div className={footerWrapperStyle}>
        <BoxButton
          variant="primary"
          onClick={currentStep === MAX_ONBOARDING_STEP - 1 ? () => {} : handleNextButtonClick}
          isDisabled={buttonActive(currentStep)}
          type={currentStep === MAX_ONBOARDING_STEP - 1 ? 'submit' : 'button'}>
          {currentStep === MAX_ONBOARDING_STEP ? '홈으로 이동' : '다음'}
        </BoxButton>
      </div>
    </form>
  );
};

export default OnboardingFunnel;
