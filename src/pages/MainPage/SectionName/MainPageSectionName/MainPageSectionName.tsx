import React from 'react';

import MySvg from '@/svg/MySvg.svg';
import { cn } from '@/utils/bem';

const cnMainPage = cn('MainPageSectionName');

export const MainPageSectionName: React.FC = () => {
  return (
    <div className={cnMainPage()}>
      <MySvg />
    </div>
  );
};
