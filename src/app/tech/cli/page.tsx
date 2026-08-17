import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Draft'>
        <NoteItem>
          <p>
            <pre>
              {`
указатели

флаги

pwd
ls
cd
mkdir
cp
mv
rm

cat
less
head
tail

grep
find

|
>
>>

ps
top
kill

chmod
sudo

echo
export
printenv
PATH
which

curl
ssh
`}
            </pre>
          </p>
        </NoteItem>
      </Note>
      <Note title='Указатели'>
        <NoteItem>
          <p>
            ~ — домашняя директория пользователя <br />
            . — текущая директория <br />
            .. — родительская <br />
            / — корень файловой системы <br />
            .env — скрытый файл, потому что начинается с . <br />
          </p>
        </NoteItem>
      </Note>
    </>
  );
}
