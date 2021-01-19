import './Header.css';

import React, { useEffect, useMemo, useRef } from 'react';
import { Text } from '@consta/uikit/Text';

import IconFigma from '@/icons/Figma.icon.svg';
import IconGithub from '@/icons/Github.icon.svg';
import IconStorybook from '@/icons/Storybook.icon.svg';
import ConstaLogo from '@/images/ConstaLogo2.image.svg';
import GPNLogo from '@/images/GPNLogo.image.svg';
import { cn } from '@/utils/bem';

const cnHeader = cn('Header');

let top = 0;

export const Header: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const windowHeight = useMemo(() => window.innerHeight, []);

  const listener = () => {
    const scroll = window.pageYOffset / windowHeight;
    if (scroll - top > 100) {
      ref.current?.style.setProperty('--headerType', '1');
      top = scroll;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <header ref={ref} className={cnHeader(null)}>
      <div className={cnHeader('Logo')}>
        <GPNLogo />
      </div>
      <div className={cnHeader('ConstaLogo')}>
        <ConstaLogo />
      </div>
      <ul className={cnHeader('Menu')}>
        <li className={cnHeader('Item')}>
          <Text
            as="a"
            size="m"
            view="primary"
            href="https://consta-uikit.vercel.app/"
            className={cnHeader('Link')}
          >
            <IconStorybook size="m" className={cnHeader('Icon')} />
            Компоненты
          </Text>
        </li>

        <li className={cnHeader('Item')}>
          <Text
            as="a"
            size="m"
            view="primary"
            href="https://www.figma.com/@Consta"
            className={cnHeader('Link')}
          >
            <IconFigma size="m" className={cnHeader('Icon')} />
            Figma
          </Text>
        </li>

        <li className={cnHeader('Item')}>
          <Text
            as="a"
            size="m"
            view="primary"
            href="https://github.com/gazprom-neft/consta-uikit"
            className={cnHeader('Link')}
          >
            <IconGithub size="m" className={cnHeader('Icon')} />
            Github
          </Text>
        </li>
      </ul>
    </header>
  );
};
