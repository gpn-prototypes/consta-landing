import './ThemeControls.css';

import React from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Text } from '@consta/uikit/Text';
import { useAction, useAtom } from '@reatom/react';

import { PresetList } from '@/components/PresetList/PresetList';
import {
  colorAtom,
  colors,
  fontAtom,
  fonts,
  presetAtom,
  presets,
  setColorAction,
  setFontAction,
  setPresetAction,
  setSizeAction,
  setSpaceAction,
  sizeAtom,
  sizes,
  spaceAtom,
  spaces,
} from '@/modules/theme';
import { cn } from '@/utils/bem';

const cnControls = cn('ThemeControls');

export const ThemeControls: React.FC = () => {
  const color = useAtom(colorAtom);
  const font = useAtom(fontAtom);
  const preset = useAtom(presetAtom);
  const size = useAtom(sizeAtom);
  const space = useAtom(spaceAtom);

  const setPreset = useAction(setPresetAction);
  const setColor = useAction(setColorAction);
  const setFont = useAction(setFontAction);
  const setSize = useAction(setSizeAction);
  const setSpace = useAction(setSpaceAction);

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
        <PresetList
          items={presets}
          value={preset}
          getLabel={(item) => item.name}
          getBrandColor={(item) => item.brandColor}
          onChange={({ value }) => setPreset(value)}
        />
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
            value={color}
            onChange={({ value }) => setColor(value)}
            items={colors}
            getLabel={(item) => item.name}
            getIcon={(item) => item.icon}
            size="l"
            width="full"
            multiple={false}
            className={cnControls('ChoiceGroup')}
            onlyIcon
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
            value={font}
            onChange={({ value }) => setFont(value)}
            items={fonts}
            getLabel={(item) => item.name}
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
            value={size}
            onChange={({ value }) => setSize(value)}
            items={sizes}
            getLabel={(item) => item.name}
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
            value={space}
            onChange={({ value }) => setSpace(value)}
            items={spaces}
            getLabel={(item) => item.name}
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
