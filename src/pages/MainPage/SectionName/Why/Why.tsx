import './Why.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';

import Reason1_1x from '../../../../images/Reason_1_1x.jpg';
import Reason1_2x from '../../../../images/Reason_1_2x.jpg';
import Reason1_3x from '../../../../images/Reason_1_3x.jpg';
import Reason2_1x from '../../../../images/Reason_2_1x.jpg';
import Reason2_2x from '../../../../images/Reason_2_2x.jpg';
import Reason2_3x from '../../../../images/Reason_2_3x.jpg';
import Reason3_1x from '../../../../images/Reason_3_1x.jpg';
import Reason3_2x from '../../../../images/Reason_3_2x.jpg';
import Reason3_3x from '../../../../images/Reason_3_3x.jpg';
import Reason4_1x from '../../../../images/Reason_4_1x.jpg';
import Reason4_2x from '../../../../images/Reason_4_2x.jpg';
import Reason4_3x from '../../../../images/Reason_4_3x.jpg';

import { cn } from '@/utils/bem';

const cnWhy = cn('Why');

const Reason = (props: {
  image1x?: string | undefined;
  image2x?: string | undefined;
  image3x?: string | undefined;
  lead?: string | undefined;
  text?: string | undefined;
}) => {
  return (
    <div className={cnWhy('Reason')}>
      <img
        src={props.image1x}
        srcSet={`${props.image1x} 1x, ${props.image2x} 2x, ${props.image3x} 4x`}
        className={cnWhy('Image')}
        alt=""
      />
      <Text size="2xl" as="p" view="secondary">
        <Text size="2xl" as="span" weight="bold">
          {props.lead}
        </Text>
        {props.text}
      </Text>
    </div>
  );
};

export const Why: React.FC = () => {
  return (
    <section className={cnWhy(null, ['Container Section'])}>
      <Text
        className={cnWhy('Title', ['decorator decorator_indent-t_none decorator_indent-b_5xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Зачем вам дизайн&#8209;система?
      </Text>
      <div className="tpl-grid tpl-grid_m-ratio_1-1 tpl-grid_col-gap_full tpl-grid_row-gap_full">
        <Reason
          image1x={Reason1_1x}
          image2x={Reason1_2x}
          image3x={Reason1_3x}
          lead="Запускать продукты быстрее и дешевле. "
          text="Часть работы по созданию интерфейса уже сделана — в рамках нашей дизайн‑системы."
        />
        <Reason
          image1x={Reason2_1x}
          image2x={Reason2_2x}
          image3x={Reason2_3x}
          lead="Просто проверять гипотезы. "
          text="Вы сможете собрать прототип интерфейса, показать пользователям и проверить, что в интерфейсе всё понятно — до начала разработки."
        />
        <Reason
          image1x={Reason3_1x}
          image2x={Reason3_2x}
          image3x={Reason3_3x}
          lead="Только лучшие практики. "
          text="Мы проверяем работу компонентов в реальных продуктах нашей компании и выбираем наилучшие варианты. Постоянно добавляем в библиотеку новые компоненты и улучшаем то, что есть."
        />
        <Reason
          image1x={Reason4_1x}
          image2x={Reason4_2x}
          image3x={Reason4_3x}
          lead="Довольные пользователи. "
          text="Проще осваивать новое, когда продукты компании выглядят похоже и построены по сходным принципам. А вам — меньше доработок и затрат на поддержку продукта."
        />
      </div>
    </section>
  );
};
