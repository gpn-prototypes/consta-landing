import './MainPage.css';

import React from 'react';

import { About } from '@/pages/MainPage/SectionName/About/About';
import { FAQ } from '@/pages/MainPage/SectionName/FAQ/FAQ';
import { HeroScreen } from '@/pages/MainPage/SectionName/HeroScreen/HeroScreen';
import { Projects } from '@/pages/MainPage/SectionName/Projects/Projects';
import { Themes } from '@/pages/MainPage/SectionName/Themes/Themes';
import { Variety } from '@/pages/MainPage/SectionName/Variety/Variety';
import { Why } from '@/pages/MainPage/SectionName/Why/Why';
import { cn } from '@/utils/bem';

const cnMainPage = cn('MainPage');

export const MainPage: React.FC = () => (
  <div className={cnMainPage()}>
    <HeroScreen />
    <About />
    <Why />
    <Themes />
    <Variety />
    <Projects />
    <FAQ />
  </div>
);
