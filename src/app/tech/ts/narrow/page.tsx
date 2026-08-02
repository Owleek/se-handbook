import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Narrowing'>
        <NoteItem>
          <p>
            Способок сужения типов достаточно много, зачастую это обычные if,
            после которого ts уже понимает с каким типом он работает и выдает
            подсказки
          </p>
          <p>
            В if могут быть проверки на тип, на само значение, на наличие поля в
            объете, так же можно для классов есть obj instanceof class, и любые
            другие проверки
          </p>
          <p>
            Сужение типов очень крутой механизм, который позволяет выделить
            предметную область типами, позволяет отделить типы от других типов
          </p>
          <p>
            пример: допустим мы имеем некий объединяющий интерфейс Сar который
            является объединением разных интерфейсов (разных брендов
            автомобилей), у каждого бренда могут быть свои уникальные поля и
            методы, но могут быть и общии для всех брендов (discriminated union
            - каждый интерфейс содержит свои уникальные поля, но в так же в них
            есть общее для всех одинаковое поле с разным литеральным значением
            например поле type: {`'bmw'`} type: {`'lada'`}, за счет которых и
            будет провродиться отсекаение ts-ом остальных интерфейсов, а ), в
            таком cлучае, когда мы ставим условие на выявление одного
            уникального свойства бренда, мы сразу отсекаем все остальные бренды
            и ts подсказывает только те поля и методы которые доступны
            отобранному бренду
          </p>
        </NoteItem>
      </Note>
      <Note title='Type guards'>
        <NoteItem>
          <p>Есть встроенные и самописные</p>
          <p>Встроенные:</p>
          <br />
          <p>
            typeof <br />
            instanceof <br />
            in <br />
            discriminated union <br />
          </p>
          <br />
          <p>Cамописные:</p>
          <p>Мы можем писать свои вспомогательные type guards</p>
          <p>например:</p>
          <pre>
            {`
interface Car {
  width: number
  maxspeed: number
}

interface Person {
  age: number
  name: string
}


function isCar(value: Car | Person): value is Car {
    return 'maxSpeed' in value && 'width' in value;
}


function isPerson(value: Car | Person): value is Person {
    return 'age' in value && 'name' in value;
}


ПОЧЕМУ не 

function isSomething(value: Car | Person): boolean {
    return booleanType
}

потому что boolean не говорит о том что это именно Сar или Person, 
сужения не происходит потому что ts не знает какое value 
пришло на вход, связано ли оно вообще с нужным нам типом
следовательно при попытке c boolean:

function fn(data: Car | Person): {
    if (isCar(data)) {
        data.maxSpeed. //Error: Property 'maxSpeed' does not exist on type 'Car | Person'
    }
}

а type guard связывает булево значение с нужным типом, так мы получаем сужение типов и подсказки

`}
          </pre>
        </NoteItem>
      </Note>
    </>
  );
}
