import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Data structure'>
      <NoteItem>
        <p>Обязательно знать</p>
        <br />
        <p>Массив</p>
        <p>Хеш-таблица / Словарь (Hash Map)</p>
        <p>Множества Map / Set</p>
        <p>Стек</p>
        <p>Очередь</p>
        <br />
        <p>Понимать принцип работы</p>
        <br />
        <p>Связный список</p>
        <p>Дерево</p>
        <p>Граф</p>
        <br />
        <p>Знать поверхностно</p>
        <p>Куча (Heap)</p>
        <p>Trie (префиксное дерево)</p>
        <p>Deque (двусторонняя очередь) </p>
        <p>Union Find (Disjoint Set)</p>
      </NoteItem>
    </Note>
  );
}
