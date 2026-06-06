'use client';

import React, { useEffect } from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  useEffect(() => {}, []);

  return (
    <Note title='Draft'>
      <NoteItem>
        <p>Dockerfile &mdash; инструкция для создания образа Docker image</p>
        <p>
          Docker image &mdash; установленные зависимости, готовый наобор файлов
          и прочего готовый к запуску
        </p>
        <p>
          Container &mdash; запущенный Docker image которы создал работающий
          изолированный мир
        </p>
      </NoteItem>
    </Note>
  );
}
