import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Functions'>
        <NoteItem>
          <pre>{`

interface ISum {
    (a: number, b: number): number
}

type TSum = (a: number, b: number) => number

const sum: ISum = function(a, b) {
    return a + b;
}

const sum2: TSum = (a, b) => {
    return a + b;
}

const sum3: (a: number, b: number) => number = (a, b) => a + b

const sum4 = (a: number, b:number): number => a + b

function sum5 (a: number, b:number): number {
    return a + b
}

const sayHello = (name: string): void => {
    console.log(name);
};

type TMultiply = typeof sum5

const mul: TMultiply = function (a, b) {
    return a * b
}

`}</pre>
          <p>Перегрузка функций:</p>
          <p>
            Описание перерегрузки говорит о том что в функцию аргументы можно
            передать в ином формате а так же возможен другой формат
            возвращаемого значения этой функции
          </p>
          <p>
            например в первом случае в функцию передается строка, а другом
            случае массив, и возвращаемое значение тоже может отличаться
          </p>
        </NoteItem>
      </Note>
      <Note title='Classes'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Objects'>
        <NoteItem>
          <p>Собственные типы в полях:</p>
          <pre>
            {`
type TUser = {
    [proizvolniykey: string]: number 
}
const user: TUser = {
    chototo: 2
}
        `}
          </pre>
        </NoteItem>
      </Note>
    </>
  );
}
