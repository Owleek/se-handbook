import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Префексные и постфиксные операторы инкремента и декремента'>
      <NoteItem>
        <p>
          ++x — увеличивает число и сразу возвращает <br />
          x++ — сначала возвращает x, а после того как уже вернул, увеличивает
          <br />
          <br />
          Разберем на примере: <br />
          <br />
          const x = 1 <br />
          const y = ++x + x++ + --x <br />
          const y = 2 + 2 + 2
        </p>
      </NoteItem>
    </Note>
  );
}
