import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Command line interface'>
      <NoteItem>
        <p>Командная строка - это shell-оболочка для запуска программ</p>
        <p>
          Таким образом, когда в командную строку вводится например git commit
          -m {'something'}, тогда shell парсит эту строку на токены:
        </p>
        <p>git</p>
        <p>commit</p>
        <p>-m</p>
        <p>{'something'}</p>
        <p>количество пробелов не важно, они равны 1-му пробелу</p>
        <p>
          Тогда shell запускает программу git и передает ей все полученные
          токены, и тогда уже программа решает как быть с этими токенами
          (аргументами)
        </p>
        <p>
          Маркировка флагов у cmd общепринятая для всех программ: {`- или --`}
          <br />
          - сокращенная запись, -v, <br />
          -- длинная и читаемая, --version
        </p>
      </NoteItem>
    </Note>
  );
}
