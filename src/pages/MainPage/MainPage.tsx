import './MainPage.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';

import { MainPageSectionName } from '@/pages/MainPage/SectionName/MainPageSectionName/MainPageSectionName';
import { cn } from '@/utils/bem';

const cnMainPage = cn('MainPage');

export const MainPage: React.FC = () => (
  <div className={cnMainPage()}>
    <Text className={cnMainPage('Text')}>тут контент 2</Text>
    <MainPageSectionName />
  </div>
);
