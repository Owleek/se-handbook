import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Data Base Caching'>
      <NoteItem>
        <p>PostgreSQL</p>
        <br />
        <p>ClickHouse</p>
        <br />
        <p>MongoDB</p>
        <br />
        <p>Индексы</p>
        <br />
        <p>materialized views</p>
        <br />
        <p>часть таблиц в Ram</p>
        <br />
      </NoteItem>
    </Note>
  );
}
