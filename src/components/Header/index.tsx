import React from 'react';
import Head from '@/components/Head';
import { headerRootStyle, backIconStyle, titleStyle, closeIconStyle } from '@/components/Header/index.css';
import { IcBack, IcClose } from '@/assets/svg';

interface HeaderRootProps {
  children: React.ReactNode;
  isColor?: boolean;
}

interface BackIconProps {
  onClick: () => void;
}

interface TitleProps {
  title: string;
}

interface CloseIconProps {
  onClick: () => void;
}

const HeaderRoot = ({ children, isColor = false }: HeaderRootProps): JSX.Element => {
  return <div className={headerRootStyle({ isColor })}>{children}</div>;
};

const BackIcon = ({ onClick }: BackIconProps): JSX.Element => {
  return (
    <button className={backIconStyle} onClick={onClick} aria-label="뒤로가기">
      <IcBack width={24} height={24} />
    </button>
  );
};

const Title = ({ title }: TitleProps): JSX.Element => {
  return (
    <Head level="h1" tag="h6" className={titleStyle}>
      {title}
    </Head>
  );
};

const CloseIcon = ({ onClick }: CloseIconProps): JSX.Element => {
  return (
    <button className={closeIconStyle} onClick={onClick} aria-label="닫기">
      <IcClose width={24} height={24} />
    </button>
  );
};

const Header = {
  Root: HeaderRoot,
  BackIcon: BackIcon,
  Title: Title,
  CloseIcon: CloseIcon,
};

export default Header;
