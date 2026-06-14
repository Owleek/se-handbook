import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Next'>
      <NoteItem>
        <p>Причины</p>
        <p>Генерация / Flow / technologies</p>
        <p>Сборка</p>
        <p>Hydration</p>
        <p>Архитектура</p>
      </NoteItem>
    </Note>
  );
}
