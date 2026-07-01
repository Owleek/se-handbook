import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='useEffect & useLayoutEffect'>
      <NoteItem>
        <p>-- useEffect --</p>
        <p>
          Главной задачей useEffect является синхронизаци React с внешним миром
          (Запросы, Взаимодействие с DOM API)
        </p>
        <br />
        <p>
          Паттерн работы: useEffect вызывается после полной отрисовки в dom, а
          cleanup старого эффекта перед вызовом нового.
        </p>
        <p>{`React render => Commit => Paint => cleanup(old-useEffect) => useEffect`}</p>
        <br />
        <div>
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
        </div>
        <br />
        <div>
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
        </div>
        <br />
        <div>
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
        </div>
      </NoteItem>
    </Note>
  );
}
