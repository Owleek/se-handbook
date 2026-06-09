import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='App Builders'>
      <NoteItem>
        <p>
          Конфиг для сборки приложения нужно писать исходя из того какой тип
          ресурсов используется в проекте, и использоватать для него
          программу(плагин) обработчик, поскольку сам по себе webpack.js не
          понимает различные расширения и файлы
        </p>
        <p>
          .env &mdash; это файл содержащий переменные для окружения
          <br />в разработке будет .env.dev в котором HOST: localhost или еще
          какой в тесте будет .env.stagging в котором HOST: stagging.com:1213
          или еще какой в проде будет .env в котором HOST: app.com:123 или еще
          какой
        </p>
      </NoteItem>
    </Note>
  );
}
