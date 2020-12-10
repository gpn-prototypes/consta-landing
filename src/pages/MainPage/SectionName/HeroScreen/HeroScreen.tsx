import './HeroScreen.css';

import React from 'react';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

import { IconFigma } from '../../../../icons/IconFigma/IconFigma';
import { IconGithub } from '../../../../icons/IconGithub/IconGithub';
import { IconStorybook } from '../../../../icons/IconStorybook/IconStorybook';
import HeroImage from '../../../../images/HeroImage.png';

import { cn } from '@/utils/bem';

const cnHeroScreen = cn('HeroScreen');

export const HeroScreen: React.FC = () => {
  return (
    <section
      className={cnHeroScreen(null, [
        'Container',
        'decorator decorator_space-b_6xl decorator_indent-v_6xl',
      ])}
    >
      <Text
        className={cnHeroScreen('Title', ['decorator decorator_indent-v_4xl'])}
        size="5xl"
        weight="bold"
        as="h1"
        lineHeight="2xs"
        align="center"
      >
        Consta — дизайн&#8209;система для быстрой разработки интерфейса.
      </Text>
      <div className={cnHeroScreen('Links')}>
        <Text
          className="decorator decorator_indent-h_auto decorator_indent-b_xl"
          size="l"
          weight="regular"
          view="secondary"
          as="p"
          lineHeight="xs"
          align="center"
        >
          Посмотреть библиотеку
        </Text>
        <div className="decorator decorator_distribute_center">
          <Button
            label="Storybook"
            size="l"
            iconLeft={IconStorybook}
            className="decorator decorator_indent-r_xs"
          />
          <Button
            label="Figma"
            size="l"
            view="secondary"
            iconLeft={IconFigma}
            className="decorator decorator_indent-r_xs"
          />
          <Button label="Github" size="l" view="secondary" iconLeft={IconGithub} />
        </div>
      </div>
      <div className={cnHeroScreen('PictureFrame')}>
        <img src={HeroImage} alt="Artistic 3D visualisation of Consta components" />
      </div>
    </section>
  );
};
