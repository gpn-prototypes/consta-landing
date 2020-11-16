import React from 'react';
import { Text } from '@consta/uikit/Text';

import { cn } from '@/utils/bem';

const cnHeroScreen = cn('HeroScreen');

export const HeroScreen: React.FC = () => {
  return (
    <div className={cnHeroScreen()}>
      <Text
        className={cnHeroScreen('Text')}
        size="3xl"
        weight="bold"
        as="h1"
        lineHeight="2xs"
        align="center"
      >
        Consta — дизайн-система для быстрой разработки интерфейса.
      </Text>
    </div>
  );
};
