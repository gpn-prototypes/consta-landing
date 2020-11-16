import './App.css';
import './wtpr.css';

import React, { useEffect } from 'react';
import { cnTheme, Theme } from '@consta/uikit/Theme';
import { useAtom } from '@reatom/react';

import { mapTheme, themeAtom } from '@/modules/theme';
import { cn } from '@/utils/bem';

const cnApp = cn('App');

export const App: React.FC = ({ children }) => {
  const theme = useAtom(themeAtom);

  useEffect(() => {
    const mods = {
      ...mapTheme[theme],
      color: mapTheme[theme].color.primary,
    };

    document.querySelector('html')?.setAttribute('class', cnTheme(mods));
  }, [theme]);

  return (
    <Theme className={cnApp()} preset={mapTheme[theme]}>
      {children}
    </Theme>
  );
};
