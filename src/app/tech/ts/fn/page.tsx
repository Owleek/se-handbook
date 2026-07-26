import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
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
      </NoteItem>
    </Note>
  );
}
