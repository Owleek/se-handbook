import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Sort'>
      <NoteItem>
        <p>
          Bubble Sort - нигде не используется (только для понимания того почему
          O(n²) плохо)
        </p>
        <p>Insertion Sort - хорош на почти отсортированных данных</p>
        <p>
          Merge Sort - хорош на больших данных и гарантирует что будет только
          O(n Log n) и не изменится
        </p>
        <p>
          Quick sort - тоже используется на больших данных, но без гарантий
          Merge Sort, поскольку в некоторых случаях может из O(n Log n)
          превратиться в O(n^2), но в действительности он хорошо использует кеш
          и работает быстрее чем Merge Sort
        </p>
        <p>
          TimSort - гибрид Merge Sort и Insertion Sort, работает лучше каждого
          по отдельности исходя из входяших данных
        </p>
        <p>
          Под капотом JS - движок при сортировке выбирает оптимальный алгоритм.
          <br />
          маленький массив → Insertion Sort <br />
          большой → Quick Sort <br />
          где-то Merge Sort <br />
          где-то вообще TimSort <br />
        </p>
      </NoteItem>
    </Note>
  );
}
