// отключил правило так как нужно подключить стили из пресетов
/* eslint-disable no-unused-vars */
import './Theme_color_tupoilDefault.css';
import './Theme_font_gpnPromo.css';
import './Theme_size_gpnPromo.css';
import './Theme_space_gpnPromo.css';
import './Theme_control_gpnPromo.css';

import { IconFavorite } from '@consta/uikit/IconFavorite';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IconSun } from '@consta/uikit/IconSun';
// импортируем пресеты чтобы подключились стили к проекту
import {
  presetGpnDark,
  presetGpnDefault,
  presetGpnDisplay,
  ThemePreset,
} from '@consta/uikit/Theme';
import { combine, declareAction, declareAtom, map } from '@reatom/core';

import { n } from '@/utils/reatom';

const nTheme = n('theme');

export const presets = [
  {
    name: 'Газпром',
    value: 0,
    brandColor: '#0071B2',
  },
  {
    name: 'Тупойл',
    value: 1,
    brandColor: '#f90022',
  },
];
type Preset = typeof presets[number];
const presetDefault = presets[0];

export const colors = [
  {
    name: 'Светлая',
    icon: IconSun,
    value: 0,
  },
  {
    name: 'Тёмная',
    icon: IconMoon,
    value: 1,
  },
  {
    name: 'Промо',
    icon: IconFavorite,
    value: 2,
  },
];
type Colors = typeof colors[number];
const colorDefault = colors[0];

export const fonts = [
  { name: 'Промо', value: 'gpnPromo' },
  { name: 'По умолчанию', value: 'gpnDefault' },
];
type Font = typeof fonts[number];
const fontDefault = fonts[0];

export const sizes = [
  { name: 'Увеличеный', value: 'gpnPromo' },
  { name: 'По умолчанию', value: 'gpnDefault' },
];
type Size = typeof sizes[number];
const sizeDefault = sizes[0];

export const spaces = [
  { name: 'Воздушное', value: 'gpnPromo' },
  { name: 'По умолчанию', value: 'gpnDefault' },
];
type Space = typeof spaces[number];
const spaceDefault = spaces[0];

const colorsMods = [
  [
    {
      primary: 'gpnDefault',
      accent: 'gpnDark',
      invert: 'gpnDark',
    },
    {
      primary: 'gpnDark',
      accent: 'gpnDark',
      invert: 'gpnDefault',
    },
    {
      primary: 'gpnDisplay',
      accent: 'gpnDark',
      invert: 'gpnDefault',
    },
  ],
  [
    {
      primary: 'tupoilDefault',
      accent: 'tupoilDark',
      invert: 'tupoilDark',
    },
    {
      primary: 'tupoilDark',
      accent: 'tupoilDark',
      invert: 'gpnDefault',
    },
    {
      primary: 'tupoilDisplay',
      accent: 'tupoilDark',
      invert: 'tupoilDefault',
    },
  ],
] as const;

function getColorMod(preset: Preset, color: Colors): ThemePreset['color'] {
  return colorsMods[preset.value][color.value];
}

export const setColorAction = declareAction<Colors>(nTheme('setColorAction'));
export const setFontAction = declareAction<Font>(nTheme('setFontAction'));
export const setSizeAction = declareAction<Size>(nTheme('setSizeAction'));
export const setSpaceAction = declareAction<Space>(nTheme('setSpaceAction'));
export const setPresetAction = declareAction<Preset>(nTheme('setPresetAction'));

export const presetAtom = declareAtom<Preset>(nTheme('presetAtom'), presetDefault, (on) =>
  on(setPresetAction, (state, preset) => preset),
);

export const colorAtom = declareAtom<Colors>(nTheme('colorAtom'), colorDefault, (on) =>
  on(setColorAction, (state, color) => color),
);

export const fontAtom = declareAtom<Font>(nTheme('fontAtom'), fontDefault, (on) =>
  on(setFontAction, (state, font) => font),
);

export const sizeAtom = declareAtom<Size>(nTheme('sizeAtom'), sizeDefault, (on) =>
  on(setSizeAction, (state, size) => size),
);

export const spaceAtom = declareAtom<Space>(nTheme('spaceAtom'), spaceDefault, (on) =>
  on(setSpaceAction, (state, space) => space),
);

export const themeAtom = map(
  combine([presetAtom, colorAtom, fontAtom, sizeAtom, spaceAtom]),
  ([preset, color, font, size, space]) => ({
    color: getColorMod(preset, color),
    control: 'gpnPromo',
    font: font.value,
    size: size.value,
    space: space.value,
  }),
);
