import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <React.Fragment>
      <Note title='useTransition'>
        <NoteItem>
          <p>
            Эти хуки понижают приоритет некоторых задач, для того чтобы более
            важные выполнялись гладко и без лагов при проблемах с ux
          </p>
          <p>
            Таким образом отзывчивый ввод в поле поиска важнее немедленного
            рендереа большой страницы.
          </p>
          <p>
            Но зачастую в проектах стараются вообще не рендерить лишний раз
            крупные таблицы или длинные списки, устанавливается Debounce в 300мс
            чтобы лишний раз не выполнять работу напрасно, по этому эти 2 хука
            используются редко, используют только если все же осталась проблема
            с ux, а useDefferedValue вообще редко
          </p>
          <p>
            Используя startTransition и useDefferedValue мы говорим React что
            это действие не первой важности и его выполнение можно отложить если
            есть более важные задачи. (Это возможно благодаря Concurrent
            rendering)
          </p>
          <p>
            useTransition - используем тогда когда мы контролируем источник
            изменений, а когда не контролируем - useDefferedValue
          </p>
          <p>
            Используем хук useTransition чтобы получить isPending и реагировать
            на тяжелые пересчеты таблиц, а если рендер быстрый то просто
            импортируем startTransition без хука useTransition
          </p>
          <pre>
            {`
    const [isPending, startTransition] = useTransition();
    const handleClick = () => {
       doImportantThings()
       ....      
    
       startTransition(() => {
            менее приоритетная задача - ее можно отложить для более важной
            setTab("Analytics");
        });
    }
 
    <Tabs loading={isPending} />
          `}
          </pre>
        </NoteItem>
      </Note>
      <Note title='useDefferedValue'>
        <NoteItem>
          <p>
            Иногда бывают компоненты которые просто рендерят то что им передали,
            и в этом случае мы не управляем функцией изменяющей состояние, мы
            через пропс или контекст получаем только результат, и именно для
            такого случая это может понадобиться
          </p>
          <p>
            useDefferedValue почти не используют, а используют либо useDebounce
            либо startTransition
          </p>
          <pre>
            {`
    const deferredValue = useDeferredValue(value);
    const filtered = useMemo(() => {
        return heavyFilter(products, deferredValue);
    }, [deferredValue]);
          `}
          </pre>
        </NoteItem>
      </Note>
    </React.Fragment>
  );
}
