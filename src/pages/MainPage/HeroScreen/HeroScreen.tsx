import './HeroScreen.css';

import React from 'react';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

import IconFigma from '@/icons/Figma.icon.svg';
import IconGithub from '@/icons/Github.icon.svg';
import HeroImage_375_1x from '@/images/HeroImage/Default/HeroImage_375_1x.jpg';
import HeroImage_375_2x from '@/images/HeroImage/Default/HeroImage_375_2x.jpg';
import HeroImage_375_3x from '@/images/HeroImage/Default/HeroImage_375_3x.jpg';
import HeroImage_720_1x from '@/images/HeroImage/Default/HeroImage_720_1x.jpg';
import HeroImage_720_2x from '@/images/HeroImage/Default/HeroImage_720_2x.jpg';
import HeroImage_720_3x from '@/images/HeroImage/Default/HeroImage_720_3x.jpg';
import { cn } from '@/utils/bem';

const cnHeroScreen = cn('HeroScreen');

export const HeroScreen: React.FC = () => {
  return (
    <div className="Container Section">
      <section className={cnHeroScreen()}>
        <div className={cnHeroScreen('Content')}>
          <Text
            className={cnHeroScreen('Title', ['decorator decorator_indent-v_4xl'])}
            size="6xl"
            weight="bold"
            as="h1"
            lineHeight="xs"
          >
            Consta
            <Text
              className={cnHeroScreen('SubTitle')}
              size="3xl"
              as="span"
              weight="regular"
              display="block"
              lineHeight="xs"
            >
              Дизайн&#8209;система для быстрой разработки интерфейса.
            </Text>
          </Text>
          <div className={cnHeroScreen('Links')}>
            <Text
              className="decorator decorator_indent-b_xl"
              size="l"
              weight="regular"
              view="secondary"
              as="p"
              lineHeight="xs"
            >
              Посмотреть библиотеку
            </Text>
            <div className="decorator decorator_distribute_left">
              <Button
                as="a"
                href="https://consta-uikit.vercel.app/"
                label="Компоненты"
                size="l"
                className="decorator decorator_indent-r_xs"
              />
              <Button
                as="a"
                href="https://www.figma.com/@Consta"
                label="Figma"
                size="l"
                view="secondary"
                iconLeft={IconFigma}
                onlyIcon
                className="decorator decorator_indent-r_xs"
              />
              <Button
                as="a"
                href="https://github.com/gazprom-neft/consta-uikit"
                label="Github"
                size="l"
                view="secondary"
                iconLeft={IconGithub}
                onlyIcon
              />
            </div>
          </div>
        </div>

        <picture className={cnHeroScreen('PictureFrame')}>
          <source
            media="(max-width: 1023px)"
            srcSet={`${HeroImage_375_1x} 1x, ${HeroImage_375_2x} 2x, ${HeroImage_375_3x} 4x`}
          />
          <source
            media="(min-width: 1024px)"
            srcSet={`${HeroImage_720_1x} 1x, ${HeroImage_720_2x} 2x, ${HeroImage_720_3x} 4x`}
          />
          <img src={HeroImage_375_1x} alt="Artistic 3D visualisation of Consta components" />
        </picture>
      </section>
    </div>
  );
};
