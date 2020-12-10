import './ThemeControls.css';

import React, { useState } from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { IconProps } from '@consta/uikit/Icon';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IconSun } from '@consta/uikit/IconSun';
import { Text } from '@consta/uikit/Text';

import { cn } from '@/utils/bem';

const cnControls = cn('ThemeControls');

type ItemCG = string;
type ItemCGIcon = {
  name: string;
  icon?: React.FC<IconProps>;
};

const ColorThemes = [
  {
    name: 'Светлая',
    icon: IconSun,
  },
  {
    name: 'Тёмная',
    icon: IconMoon,
  },
  {
    name: 'Промо',
    icon: IconMoon,
  },
];
const FontThemes = ['Промо', 'По умолчанию'];
const SizeThemes = ['Увеличенный', 'По умолчанию'];
const SpaceThemes = ['Воздушнее', 'По умолчанию'];

export const ThemeControls: React.FC = () => {
  const [fontTheme, setFontTheme] = useState<ItemCG | null>(FontThemes[0]);
  const [sizeTheme, setSizeTheme] = useState<ItemCG | null>(SizeThemes[0]);
  const [spaceTheme, setSpaceTheme] = useState<ItemCG | null>(SpaceThemes[0]);
  const [colorTheme, setColorTheme] = useState<ItemCGIcon | null>(ColorThemes[0]);

  return (
    <div className={cnControls()}>
      <div className={cnControls('PresetList')}>
        <Text
          className={cnControls('Title', ['decorator decorator_indent-b_xl'])}
          size="3xl"
          weight="bold"
          as="h3"
          lineHeight="xs"
        >
          Пресеты
        </Text>
        <button
          className={cnControls('Preset', { checked: true })}
          style={{ ['--brandColor' as any]: '#0071B2' }}
        >
          Газпром нефть
        </button>
        <button className={cnControls('Preset')} style={{ ['--brandColor' as any]: '#00c365' }}>
          Казахтелешмон
        </button>
        <button className={cnControls('Preset')} style={{ ['--brandColor' as any]: '#f90022' }}>
          Тупойл
        </button>
      </div>
      <div className={cnControls('Settings')}>
        <Text
          className={cnControls('Title', ['decorator decorator_indent-b_xl'])}
          size="3xl"
          weight="bold"
          as="h3"
          lineHeight="xs"
        >
          Параметры
        </Text>

        <div className={cnControls('Item', ['decorator decorator_indent-b_l'])}>
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="xl"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Цветовая тема
          </Text>
          <ChoiceGroup
            name="ColorThemes"
            value={colorTheme}
            onChange={({ value }) => setColorTheme(value)}
            items={ColorThemes}
            getLabel={(item) => item.name}
            getIcon={(item) => item.icon}
            size="l"
            width="full"
            onlyIcon={true}
            multiple={false}
            className={cnControls('ChoiceGroup')}
          />
        </div>

        <div className={cnControls('Item', ['decorator decorator_indent-b_l'])}>
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="xl"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Шрифт
          </Text>
          <ChoiceGroup
            name="FontThemes"
            value={fontTheme}
            onChange={({ value }) => setFontTheme(value)}
            items={FontThemes}
            getLabel={(item) => item}
            size="l"
            width="full"
            multiple={false}
            className={cnControls('ChoiceGroup')}
          />
        </div>

        <div className={cnControls('Item', ['decorator decorator_indent-b_l'])}>
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="xl"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Размер текста
          </Text>
          <ChoiceGroup
            name="SizeThemes"
            value={sizeTheme}
            onChange={({ value }) => setSizeTheme(value)}
            items={SizeThemes}
            getLabel={(item) => item}
            size="l"
            width="full"
            multiple={false}
            className={cnControls('ChoiceGroup')}
          />
        </div>

        <div className={cnControls('Item', ['decorator decorator_indent-b_l'])}>
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="xl"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Пространство
          </Text>
          <ChoiceGroup
            name="SpaceThemes"
            value={spaceTheme}
            onChange={({ value }) => setSpaceTheme(value)}
            items={SpaceThemes}
            getLabel={(item) => item}
            size="l"
            width="full"
            multiple={false}
            className={cnControls('ChoiceGroup')}
          />
        </div>
      </div>
    </div>
  );
};
