import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Next'>
      <NoteItem>
        <p>Причины</p>
        <p>Генерация / Flow / technologies</p>
        <p>Hydration</p>
        <p>Webhooks</p>
        <p>Сборка</p>
        <p>Deployment</p>
      </NoteItem>
    </Note>
  );
}
