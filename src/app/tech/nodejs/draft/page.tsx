'use client';

import React, { useEffect } from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  useEffect(() => {}, []);

  return (
    <Note title='Draft'>
      <NoteItem>
        <p>Модули проекта запускает именно nodejs</p>
        <p>npm != nodejs</p>
        <p>
          когда пишем npm run dev - npm запускает скрипт из package json и
          передает выполнение команды из скрипт в node, и уже node с переданными
          аргументами запускает файл скрипта
        </p>
      </NoteItem>
    </Note>
  );
}
