import './ShowroomSlider.css';

import React from 'react';

import { cn } from '@/utils/bem';

type Props = {
  rows: React.ReactNode[];
};

const cnShowroomSlider = cn('ShowroomSlider');

export const ShowroomSlider: React.FC<Props> = ({ rows }) => {
  return (
    <div className={cnShowroomSlider()}>
      {rows.map((row, index) => (
        <div key={index} className={cnShowroomSlider('Row')}>
          <div className={cnShowroomSlider('Group')}>
            {row}
            {row}
          </div>
        </div>
      ))}
    </div>
  );
};
