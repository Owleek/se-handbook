import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Class / Constructor / Prototype'>
      <NoteItem>
        <p>Cвойства</p>
        <p>C.prototyte</p>
        <p>this</p>
        <p>методы</p>
      </NoteItem>
    </Note>
  );
}
