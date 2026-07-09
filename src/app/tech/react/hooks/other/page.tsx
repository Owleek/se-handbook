import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <React.Fragment>
      <Note title='[R16.8] useDebugValue'>
        <NoteItem>
          <p>
            Он просто выводит передаваемую в него информацию в React Dev Tools,
            Components, сегменте хуков, рядом с нашим кастомным хуком в котором
            мы его вызываем <br />
            Просто вспомогательная информация для нас самих
          </p>
          <pre>
            {`
export function useOwnHook() {
    const [someData, setSomeData] = useState(...)
    
    useDebugValue('just simple string');
    
    //или можно передать форматтер вторым аргументом

    useDebugValue(someData, (someData) => \`\${someData.name} \${someData.adress}\`);
    
    return someData;
}
...
React Dev tools
hooks:
OwnHook: "just simple string", "sasha st. petersburg"
 state: someData
            `}
          </pre>
        </NoteItem>
      </Note>
      <Note title='[R18] useId'>
        <NoteItem>
          <p>
            useId - генерирует уникальный стабильный id для связывания label и
            штзге, aria-* атрибутов
          </p>
          <br />
          <p>
            Не подходит для key или данных поскольку id берется из fiber дерева,
            и может меняться
          </p>
          <br />
          <p>
            Сделали для того чтобы не было миссгидрации когда использовали
            всякие math.random
          </p>
        </NoteItem>
      </Note>
      <Note title='[R18] useSyncExternalStore'>
        <NoteItem>
          <p>
            Если есть внешний store, который живет вне React, то React сам
            гарантирует, что во время рендера будет использована консистентная
            версия данных. Если store изменился в неподходящий момент, React
            корректно перерендерит компонент.
          </p>
          <p>Zustand, Mobx</p>
        </NoteItem>
      </Note>
      <Note title='[R18] useInsertionEffects'>
        <NoteItem>
          <p>
            Позволяет вставить CSS в DOM до выполнения обычных эффектов и до
            layout.
          </p>
          <p>CSS-in-JS библиотеки (Emotion, styled-components и т.п.)</p>
        </NoteItem>
      </Note>
    </React.Fragment>
  );
}
