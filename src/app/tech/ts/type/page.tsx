import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Type & Interface'>
        <NoteItem>
          <p>Отличия type и interface:</p>
          <p>
            type может почти все то же что умеет и interface, а возможностей у
            interface значительно меньше, тем не менее interface удобнее
            использовать для ООП ввиду того что он использует тот же синтаксис
          </p>
          <p>
            Например: один интерфейс может расширять другой ключевым словом
            extends: secondType extends firstType
          </p>
          <p>
            Аналогия для type это пересечение: secontype & firstType, по этому
            для работы с наследованием удобнее использовать interface, так же
            можно добавить и то что оф док сообщает что extends под капототм
            работает быстрее чем пересечение
          </p>
          <p>
            Единственное чего не умеет type - это расширять тот же тип повторной
            декларацией (возникнет ошибка), а interface может:
          </p>
          <pre>
            {`
interface One {
   value: number
}
interface One {
   name: string
}
// итого:
interface One {
    value: number
    name: string
}

//в type возникнет ошибка:
type Two = {a: number}
type Two = {b: string}
//так сделать не получится.
`}
          </pre>
          <p>
            Следовательно interface может быть опасен, так как мы можем случайно
            расширить то что не планировали
          </p>
          <p>
            interface не может создавать типы для литералов, кортежей, шаблонных
            строк и тд
          </p>
          <p>
            По этому для описание объектных структур используют interface, а для
            всего остального type
          </p>
        </NoteItem>
      </Note>
    </>
  );
}
