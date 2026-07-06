import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <React.Fragment>
      <Note title='useTransition'>
        <NoteItem>
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
