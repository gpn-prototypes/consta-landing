import './FAQ.css';

import React, { useState } from 'react';
import { IconAdd } from '@consta/uikit/IconAdd';
import { Text } from '@consta/uikit/Text';

import { cn } from '@/utils/bem';

const cnFAQ = cn('FAQ');

const questions = [
  {
    title: 'Для каких задач подходит дизайн-система?',
    answer: (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Для разработки пользовательских интерфейсов цифровых продуктов.
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это может быть интранет, личный кабинет, инструмент для мониторинга какой-то системы,
          управления оборудованием, совместной работы или что-то ещё.
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это может быть продукт, который открывают на ноутбуке, офисном компьютере или видеостене.
          Версии для мобильных приложений пока нет.
        </Text>
        <Text as="p" size="xl">
          Дизайн-система разрабатывается для продуктов «Газпром нефти», но на самом деле она
          универсальная: использовать может кто угодно.
        </Text>
      </>
    ),
  },
  {
    title: 'Это только для новых продуктов?',
    answer: (
      <Text as="p" size="xl">
        Не обязательно. Если ваш продукт уже работает, можно постепенно перевести его на
        дизайн-систему. Сначала потребуются дополнительные усилия, но потом будет проще поддерживать
        и соблюдать консистентность.
      </Text>
    ),
  },
  {
    title: 'А если мы работаем с подрядчиками?',
    answer: (
      <Text as="p" size="xl">
        Отлично, отправьте им ссылку на 
        <Text
          as="a"
          view="link"
          href="https://consta-uikit.vercel.app/?path=/story/common-about--page"
          size="xl"
        >
          описание дизайн-системы
        </Text>
        . Все ресурсы публичные, можно использовать и «внутри» компании, и «снаружи».
      </Text>
    ),
  },
];

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Accordion: React.FC<AccordionProps> = (props) => {
  const { title, children, className } = props;

  const [isExpand, setExpand] = useState(0);

  const toggleExpand = () => {
    if (!isExpand) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <div
      className={cnFAQ('Accordion', { view: !isExpand ? 'collapsed' : 'expanded' }, [className])}
    >
      <div className={cnFAQ('Question')} onClick={() => setExpand(toggleExpand)}>
        <Text size="2xl">{title}</Text>
        <IconAdd size="m" view="secondary" className={cnFAQ('CollapseIcon')} />
      </div>
      <div className={cnFAQ('Answer')}>{children}</div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className={cnFAQ(null, ['Container', 'Section'])}>
      <Text
        className={cnFAQ('Title', ['decorator decorator_indent-t_none decorator_indent-b_5xl'])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Частые вопросы и решения
      </Text>
      <div className={cnFAQ('Questions')}>
        {questions.map((question, index) => {
          const id = `${question.title} ${index}`;
          return (
            <Accordion key={id} title={question.title}>
              {question.answer}
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};
