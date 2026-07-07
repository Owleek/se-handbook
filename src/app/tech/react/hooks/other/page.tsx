import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <React.Fragment>
      <Note title='useDebugValue'>
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
    </React.Fragment>
  );
}
