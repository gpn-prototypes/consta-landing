import './Theme_color_tupoil.css';
import './Theme_font_gpnPromo.css';
import './Theme_size_gpnPromo.css';
import './Theme_space_gpnPromo.css';
import './Theme_control_gpnPromo.css';

import { presetGpnDark, presetGpnDefault, ThemePreset } from '@consta/uikit/Theme';
import { declareAction, declareAtom } from '@reatom/core';

const themes = ['default', 'dark'] as const;
export type Theme = typeof themes[number];

export const mapTheme: Record<Theme, ThemePreset> = {
  default: presetGpnDefault,
  dark: presetGpnDark,
};

export const setThemeAction = declareAction<Theme>();
export const themeAtom = declareAtom<Theme>(themes[0], (on) =>
  on(setThemeAction, (state, payload) => payload),
);
