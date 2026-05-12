import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Cookies'>
      <NoteItem>
        <p>Flow</p>
        <p>Сессионные и постоянные</p>
        <p>Аттрибуты</p>
        <p>3rd party и замена</p>
      </NoteItem>
    </Note>
  );
}
