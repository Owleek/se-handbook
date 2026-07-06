import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <React.Fragment>
      <Note title='useEffect'>
        <NoteItem>
          <p>
            Главной задачей useEffect является синхронизаци React с внешним
            миром (Запросы, Взаимодействие с DOM API)
          </p>
          <br />
          <p>
            Паттерн работы: useEffect вызывается после полной отрисовки в dom, а
            cleanup старого эффекта перед вызовом нового.
          </p>
          <p>{`React render => Commit => Paint => cleanup(old-useEffect) => useEffect`}</p>
          <br />
          <p>
            1. Массив зависимостей не передан: - вызов useEffect будет каждый
            рендер, и cleanup этого эффекта перед вызовом следующего.
          </p>
          <pre>
            {`
              useuseEffect(() => {
                return function cleanup() {
                    removing subscribtions
                }
              })
            `}
          </pre>
          <p>{`React render => Commit => Paint => cleanup(useEffect#1) => useEffect#2()`}</p>
          <br />
          <p>
            2. Передан пустой массив зависимостей: - вызов useEffect будет
            только при маунте компонента и его cleanup при анмаунте.
          </p>
          <pre>
            {`
              useuseEffect(() => {}, [])
            `}
          </pre>
          <p>{`React render => Commit => Paint => useEffect() => .... => destroy => Commit => Paint => cleanup(useEffect)`}</p>
          <br />
          <p>
            3. Переданы зависимости эффекта: - вызов useEffect будет только при
            изменении одной из зависимостей
          </p>
          <pre>
            {`
              useuseEffect(() => {}, [dependency1, dependency2])
            `}
          </pre>
          <p>{`React render => Commit => Paint => cleanup(useEffect#1) => useEffect#2()`}</p>
          <br />
          <p>React удаляет старый эффект за ненадобностью, и вызывает новый.</p>
        </NoteItem>
      </Note>
      <Note title='useLayoutEffect'>
        <NoteItem>
          <p>
            правила работы useLayoutEffect и useEffect одинаковые. <br />
            Отличается только момент их выполнения: <br />
            useLayoutEffect — до Paint; <br />
            useEffect — после Paint. <br />
            <br />
            useLayoutEffect — это возможность React выполнить код после
            изменения DOM, но до того, как он отдаст управление браузеру и тот
            начнет Paint
          </p>
          <br />
          <p>
            Он нужен в тех случаях, когда рендер зависит от реальных DOM-метрик.
            <br />
            Например подогнать размер контейнера под какой то элемент. <br />
            Если этого не сделать то будет мерцание(flicker), поскольку элемент
            на первом кадре отрисуется с какими то предустановленными значениями
            а уже на следующем будет скорректирован js, и эту разницу в кадрах
            пользователь заметит, чем и обуславливается мерцание. <br />
            Для этого и нужно импользовать useLayoutEffect, мы вклиниваемся в
            этап рендеринга и не даем показать неправильный кадр, а запускаем
            логику пересчета.
          </p>
        </NoteItem>
      </Note>
    </React.Fragment>
  );
}
