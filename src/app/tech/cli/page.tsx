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

утилиты (*флаги)

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
      <Note title='Утилиты (*флаги)'>
        <NoteItem>
          <p>
            Флаг — это часть интерфейса конкретной CLI-программы, а не «флаг
            Linux».
          </p>
          <p>
            У Linux нет единого набора флагов, который работает для всех команд
          </p>
          <p>
            grep -i <br />
            curl -i <br />
            rm -i <br />
            Три разных программы и три потенциально разных значения -i
          </p>
          <p>Не существует отдельного списка «родных Linux-флагов»</p>
          <pre>
            {`
                Linux
                   │
          ┌────────┴────────┐
          │                 │
       shell            процессы
          │
    CLI environment
          │
   ┌──────┼──────┬──────┐
   ↓      ↓      ↓      ↓
   ls    grep    tar    curl
   │      │       │      │
 свои   свои    свои    свои
 flags  flags   flags   flags



           Linux distribution
                    │
        ┌───────────┴───────────┐
        │                       │
    Linux kernel              packages
                                │
              ┌─────────────────┼───────────────┐
              ↓                 ↓               ↓
          coreutils            tar           curl
              │
       ┌──────┼───────┐
       ↓      ↓       ↓
      cp      ls      rm
`}
          </pre>
          <p>Не все команды в терминале, являются отдельными файлами.</p>
          <p>cd, export, alias - обычно являются shell builtins.</p>
          <p>
            а: ls, cp, grep, tar - внешние утилиты, однако линкус дистрибутив
            поставляет их из коробки
          </p>
          <p>
            для проверки того к кому принадлежит пакет достаточно прописать
            команду:
          </p>
          <p>type утилита: type cd, type ls</p>
        </NoteItem>
      </Note>
    </>
  );
}
