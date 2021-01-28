import './Themes.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';

import { ThemeControls } from '../ThemeControls2/ThemeControls2';

import { cn } from '@/utils/bem';

const cnThemes = cn('Themes');

export const Themes: React.FC = () => {
  return (
    <section className={cnThemes(null, ['Container Section'])}>
      <Text
        className={cnThemes('Title', ['decorator decorator_indent-t_none decorator_indent-b_2xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Гибкая тематизация
      </Text>
      <Text
        className={cnThemes(null, ['decorator decorator_indent-b_4xl'])}
        size="2xl"
        view="secondary"
        as="p"
      >
        Наша библиотека Consta обладает гибкой и очень лёгкой тематизацией. Посмотрите и убедитесь
        в этом сами, переключая варианты тем на этой странице.
      </Text>

      <div className={cnThemes('Controls', ['decorator decorator_indent-b_2xl'])}>
        <ThemeControls />
      </div>
    </section>
  );
};
