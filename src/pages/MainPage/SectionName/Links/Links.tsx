import './Links.css';

import React from 'react';
import { Button } from '@consta/uikit/Button';
import { IconCopy } from '@consta/uikit/IconCopy';
import { IconForward } from '@consta/uikit/IconForward';
import { Text } from '@consta/uikit/Text';
import { useTheme } from '@consta/uikit/Theme';

import { IconFigma } from '../../../../icons/IconFigma/IconFigma';
import { IconGithub } from '../../../../icons/IconGithub/IconGithub';
import { IconStorybook } from '../../../../icons/IconStorybook/IconStorybook';

import { cn } from '@/utils/bem';

const cnLinks = cn('Links');

const More = (
  <Text
    className={cnLinks('More', [
      'decorator decorator_distribute_left decorator_vertical-align_center decorator_indent-r_s',
    ])}
    size="l"
    as="span"
  >
    Смотреть
    <IconForward
      className={cnLinks('Arrow', ['decorator decorator_indent-l_m'])}
      size="m"
      view="primary"
    />
  </Text>
);

export const Links: React.FC = () => {
  const { themeClassNames } = useTheme();

  return (
    <section className={cnLinks(null, ['Container', 'Section'])}>
      <Text
        className={cnLinks('Title', ['decorator decorator_indent-t_none decorator_indent-b_5xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Берите и пользуйтесь
      </Text>
      <div
        className={cnLinks('List', [
          themeClassNames.color.invert,
          'tpl-grid tpl-grid_m-ratio_1-1-1',
        ])}
      >
        <a
          href="https://consta-uikit.vercel.app/"
          className={cnLinks('Card', { view: 'Storybook' })}
        >
          <div className={cnLinks('CardContent')}>
            <IconStorybook size="m" view="primary" className={cnLinks('Logo')} />
            <Text
              className={cnLinks('CardTitle', ['decorator decorator_indent-b_s'])}
              size="xl"
              weight="bold"
              lineHeight="s"
            >
              Витрина компонентов и документация
            </Text>
            <Text
              className={cnLinks('CardDescription', ['decorator decorator_indent-b_xl'])}
              size="l"
              as="p"
            >
              Как использовать дизайн-систему, темы и описание компонентов. Тут можно поиграться
              с размерами, цветами и другими параметрами компонентов.
            </Text>
          </div>
          <div className={cnLinks('CardFooter')}>
            <Button size="s" view="clear" iconLeft={IconCopy} iconSize="m" onlyIcon />
            {More}
          </div>
        </a>

        <a href="https://www.figma.com/@Consta" className={cnLinks('Card', { view: 'Figma' })}>
          <div className={cnLinks('CardContent')}>
            <IconFigma size="m" view="primary" className={cnLinks('Logo')} />
            <Text
              className={cnLinks('CardTitle', ['decorator decorator_indent-b_s'])}
              size="xl"
              weight="bold"
              lineHeight="s"
            >
              Библиотека в Figma
            </Text>
            <Text
              className={cnLinks('CardDescription', ['decorator decorator_indent-b_xl'])}
              size="l"
              as="p"
            >
              Набор компонентов для создания макетов проекта в Figma Community. Отправьте эту ссылку
              дизайнеру — он разберётся.
            </Text>
          </div>
          <div className={cnLinks('CardFooter')}>
            <Button size="s" view="clear" iconLeft={IconCopy} iconSize="m" onlyIcon />
            {More}
          </div>
        </a>

        <a
          href="https://github.com/gazprom-neft/consta-uikit"
          className={cnLinks('Card', { view: 'Github' })}
        >
          <div className={cnLinks('CardContent')}>
            <IconGithub size="m" view="primary" className={cnLinks('Logo')} />
            <Text
              className={cnLinks('CardTitle', ['decorator decorator_indent-b_s'])}
              size="xl"
              weight="bold"
              lineHeight="s"
            >
              React-библиотека
            </Text>
            <Text
              className={cnLinks('CardDescription', ['decorator decorator_indent-b_xl'])}
              size="l"
              as="p"
            >
              NPM пакет с библиотекой на React, TypeScript и PostCSS. Отправьте эту ссылку фронтенд
              разработчику — он знает, что с ней делать.
            </Text>
          </div>
          <div className={cnLinks('CardFooter')}>
            <Button size="s" view="clear" iconLeft={IconCopy} iconSize="m" onlyIcon />
            {More}
          </div>
        </a>
      </div>
    </section>
  );
};
