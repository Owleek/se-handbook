import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Storage'>
      <NoteItem>
        <p>В браузере предусмотрены несколько механизмов хранения информации</p>
        <br />
        <p>
          Cookies Storage (4kb) - хранится только самая нужная для каждого
          запроса информация
        </p>
        <br />
        <p>
          LocalStorage (5-10mb)- хранится в браузере постоянно, нужно для
          хранения состояния интерфеса
        </p>
        <p>
          SessionStorage (5-10mb)- хранение данных на время открытой вкладки.
          пример: черновик комментария, или многошаговая форма, или некоторые
          временные фильтры
        </p>
        <br />
        <p>
          Indexed DB (Гигабайты на диске)- большое хранилище для хранения
          сложных структур данных, хранения состояния всего приложения и прочих
          больших данных (историю чата веб-мессенджера)
        </p>
        <br />
        <p>
          Cache storage - в котором можно хранить кеш сохраненный в service
          worker, нужен для хранения различных ресурсов для offline-приложений
        </p>
        <br />
        <p>Http Cache storage - это http кеш управялемый браузером. </p>
        <p>
          - js <br />
          - css <br />
          - images <br />
          - http responses <br />
        </p>
      </NoteItem>
    </Note>
  );
}
