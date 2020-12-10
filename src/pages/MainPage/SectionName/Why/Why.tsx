import './Why.css';

import React from 'react';
import { Text } from '@consta/uikit/Text';

import Reason1 from '../../../../images/Reason1.png';
import Reason2 from '../../../../images/Reason2.png';
import Reason3 from '../../../../images/Reason3.png';
import Reason4 from '../../../../images/Reason4.png';

import { cn } from '@/utils/bem';

const cnWhy = cn('Why');

const Reason = (props: {
  image?: string | undefined;
  lead?: string | undefined;
  text?: string | undefined;
}) => {
  return (
    <div className={cnWhy('Reason')}>
      <img src={props.image} className={cnWhy('Image')} alt="" />
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
    <section className={cnWhy(null, ['Container', 'decorator decorator_space-v_6xl'])}>
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
          image={Reason1}
          lead="Запускать продукты быстрее и дешевле. "
          text="Часть работы по созданию интерфейса уже сделана — в рамках нашей дизайн‑системы."
        />
        <Reason
          image={Reason2}
          lead="Просто проверять гипотезы. "
          text="Вы сможете собрать прототип интерфейса, показать пользователям и проверить, что в интерфейсе всё понятно — до начала разработки."
        />
        <Reason
          image={Reason3}
          lead="Только лучшие практики. "
          text="Мы проверяем работу компонентов в реальных продуктах нашей компании и выбираем наилучшие варианты. Постоянно добавляем в библиотеку новые компоненты и улучшаем то, что есть."
        />
        <Reason
          image={Reason4}
          lead="Довольные пользователи. "
          text="Проще осваивать новое, когда продукты компании выглядят похоже и построены по сходным принципам. А вам — меньше доработок и затрат на поддержку продукта."
        />
      </div>
    </section>
  );
};
