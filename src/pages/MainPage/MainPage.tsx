import './MainPage.css';

import React from 'react';

import { HeroScreen } from '@/pages/MainPage/SectionName/HeroScreen/HeroScreen';
import { cn } from '@/utils/bem';

const cnMainPage = cn('MainPage');

export const MainPage: React.FC = () => (
  <div className={cnMainPage()}>
    <HeroScreen />
  </div>
);
