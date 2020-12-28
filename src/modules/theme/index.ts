// отключил правило так как нужно подключить стили из пресетов
/* eslint-disable no-unused-vars */
import './Theme_color_tupoilDefault.css';
import './Theme_font_gpnPromo.css';
import './Theme_size_gpnPromo.css';
import './Theme_space_gpnPromo.css';
import './Theme_control_gpnPromo.css';

import {
  presetGpnDark,
  presetGpnDefault,
  presetGpnDisplay,
  ThemePreset,
} from '@consta/uikit/Theme';
import { declareAction, declareAtom } from '@reatom/core';

type Color =
  | {
      primary: 'gpnDefault';
      accent: 'gpnDark';
      invert: 'gpnDark';
    }
  | {
      primary: 'gpnDark';
      accent: 'gpnDark';
      invert: 'gpnDefault';
    }
  | {
      primary: 'gpnDisplay';
      accent: 'gpnDark';
      invert: 'gpnDefault';
    }
  | {
      primary: 'tupoilDefault';
      accent: 'tupoilDark';
      invert: 'tupoilDark';
    }
  | {
      primary: 'tupoilDark';
      accent: 'tupoilDark';
      invert: 'tupoilDefault';
    }
  | {
      primary: 'tupoilDisplay';
      accent: 'tupoilDark';
      invert: 'tupoilDefault';
    };

type Control = 'gpnPromo' | 'gpnDefault';
type Font = 'gpnPromo' | 'gpnDefault';
type Size = 'gpnPromo' | 'gpnDefault';
type Space = 'gpnPromo' | 'gpnDefault';

type AppTheme = {
  color: Color;
  control: Control;
  font: Font;
  size: Size;
  space: Space;
};

const presetTupoil: AppTheme = {
  color: {
    primary: 'tupoilDefault',
    accent: 'tupoilDark',
    invert: 'tupoilDark',
  },
  control: 'gpnPromo',
  font: 'gpnPromo',
  size: 'gpnPromo',
  space: 'gpnPromo',
};

const presetGpn: AppTheme = {
  color: {
    primary: 'gpnDefault',
    accent: 'gpnDark',
    invert: 'gpnDark',
  },
  control: 'gpnPromo',
  font: 'gpnPromo',
  size: 'gpnPromo',
  space: 'gpnPromo',
};

const themes = ['default', 'dark'] as const;
export type Theme = typeof themes[number];

export const mapTheme: Record<Theme, ThemePreset> = {
  default: presetTupoil,
  dark: presetGpnDark,
};

export const setColorAction = declareAction<Color>();
export const setControlAction = declareAction<Control>();
export const setFontAction = declareAction<Font>();
export const setSizeAction = declareAction<Size>();
export const setSpaceAction = declareAction<Space>();

export const themeAtom = declareAtom<AppTheme>(presetGpn, (on) => [
  on(setColorAction, (state, color) => ({ ...state, color })),
  on(setControlAction, (state, control) => ({ ...state, control })),
  on(setFontAction, (state, font) => ({ ...state, font })),
  on(setSizeAction, (state, size) => ({ ...state, size })),
  on(setSpaceAction, (state, space) => ({ ...state, space })),
]);
