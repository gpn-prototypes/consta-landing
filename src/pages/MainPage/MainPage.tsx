import './MainPage.css';

import React from 'react';

import { About } from '@/pages/MainPage/About/About';
import { FAQ } from '@/pages/MainPage/FAQ/FAQ';
import { Footer } from '@/pages/MainPage/Footer/Footer';
import { HeroScreen } from '@/pages/MainPage/HeroScreen/HeroScreen';
import { Links } from '@/pages/MainPage/Links/Links';
import { Projects } from '@/pages/MainPage/Projects/Projects';
import { Themes } from '@/pages/MainPage/Themes/Themes';
import { Variety } from '@/pages/MainPage/Variety/Variety';
import { Why } from '@/pages/MainPage/Why/Why';
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
    <Links />
    <Footer />
  </div>
);
