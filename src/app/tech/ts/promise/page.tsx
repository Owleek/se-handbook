import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Promise'>
        <NoteItem>
          <p>Объект промиса выглядит следующим образом:</p>
          <pre>
            {`
 [[PromiseState]]: "pending"
 [[PromiseResult]]: value
 [[PromiseFulfillReactions]] (then)
 [[PromiseRejectReactions]] (cath, finnaly)
 [[PromiseIsHandled]]


 По сути дела, Promise<something> означает что мы получит объект промиса в котором result-ом будет являться something


 interface User {
   id: number
   name: string
 }

 т.е если есть некая асинхронная функция которая через определенное время возвращает нам пользователя

 async function getUser(): Promise<User> {
   //  ......
   return {
      id: 3,
      name: 'Alice'
   }
 }

 тогда в value у нас будет именно этот объект 

getUser.then( result => {
  // этот result будет тем объектом
}) 
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Fetch'>
        <NoteItem>
          <p>
            В случае же с fetch, мы получаем объект промиса результатом которого
            является HTTP объект Response
          </p>
          <pre>
            {`
fetch выглядит примерно следующим образом:

declare function fetch(
    input: RequestInfo | URL,
    init?: RequestInit
): Promise<Response>

TypeScript знает интерфейс Response из DOM type definitions:

interface Response {
    readonly body: ReadableStream<Uint8Array> | null;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly status: number;
    json(): Promise<any>;
    text(): Promise<string>;
    // ...
}

tsconfig обычно присутствуют DOM-типы:

{
  "compilerOptions": {
    "lib": ["ES2022", "DOM"]
  }
}
`}
          </pre>
        </NoteItem>
      </Note>
    </>
  );
}
