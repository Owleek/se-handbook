import React from 'react';
import { Note, NoteItem, NoteTittle, NoteSubTittle } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Loop'>
      <NoteItem>
        <NoteSubTittle>
          return - внутри for или forEach завершает не цикл а текущую функцию <br />
          таким образом в случае forEach будет завершена анонимная функция callback переданная в forEach, 
          и дальше будет следующая итерация, цикл продолжится так как завершилась функция внутри одной итерации, 
          а вот при for () будет завершена основная функция и цикл гарантированно прервется из за того что завершилась функция
        </NoteSubTittle>
      </NoteItem>
    </Note>
  );
}
