import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Deployment'>
      <NoteItem>
        <p>Deployment</p>
        <p>на CI - npm run build</p>
        <p>
          На сервер нужен артефакт .next <br />
          public/ <br />
          package.json <br />
          затем npm install чтобы получить /node_modules <br />
          затем npm run start <br />
          дальне Next сам будет заниматься оркестрацией серверных и клиентских
          компонентов
        </p>
      </NoteItem>
    </Note>
  );
}
