import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <React.Fragment>
      <Note title='Ref'>
        <NoteItem>
          <p>
            В тех случаях, когда нам по какой либо причине нужно получить ref
            дочернего компонента (например чтобы установить focus() из
            родительского компонента в дочерний input), то для этого в дочерний
            компонент из родительского нужно прокинуть этот ref.
          </p>
          <br />
          <p>ДО 19 React, было 2 варианта.</p>
          <p>1. передать реф стандартным способом</p>
          <pre>
            {`
<Child ref={childRef} />

const Child = forwardRef((props, ref) => { return <div>... });
          `}
          </pre>
          <p>
            но в таком случае React перехватывает ref (как и key). А для того
            чтобы его получить, React в коллбеке для forwardRef передает его
            вторым аргументом. <br />* почему не в пропе, ну потому что типа
            пропы одно, а ref это другое <br />
          </p>{' '}
          <br />
          <p>
            2. передать ref как в качестве пропса с другим наименованием ref
          </p>
          <pre>
            {`
<Button buttonRef={childRef} />
<Search searchRef={childRef} />
          `}
          </pre>
          <p>
            Способ очень хороший, поскольку не нужно оборачивать компонент
            forwardRef, но как будто теряем единообразность в названии ref
          </p>
          <br />
          <p>
            Но в 19 react, теперь ref передается обычным пропсом и не нужно
            использовать forwardRef
          </p>
          <pre>
            {`
const Child = (props) => {
 const {ref} = props;
}
          `}
          </pre>
          <br />
          <p>
            Во всех этих способах мы напрямую получаем ref ребенка и становимся
            зависимы от внутренней реализации
          </p>
          <p>
            Но этого можно избежать предоставив через ref внешнее API, вообще
            какое угодно API, не только focus()
          </p>
          <p>
            Для классовых чайлдов все было просто - устанавливая{' '}
            {`<Child ref={childRef} />`} <br />
            мы получаем методы экземпляра класса через: <br />
            childRef.current.save() <br />
            childRef.current.reload() <br />
            childRef.current.stop() <br />
            childRef.current.focus() <br />в то время классовый Child выглядит
            след образом:
          </p>
          <pre>
            {`
class Child extends React.Component {
    save() {}
    reload() {}
    stop() {}
    focus() {}
}
          `}
          </pre>
          <p>React присваивал childRef.current все методы экземпляра класса</p>
          <br />
          <p>
            Но в функциональном компоненте такого способа передачу наружу
            внутреннего API не было, и для этого создали хук useImperativeHandle
          </p>
          <br />
        </NoteItem>
      </Note>
      <Note title='useImperativeHandle'>
        <NoteItem>
          <p>
            useImperativeHandle - позволяет предоставлять внутренний API
            компонента наружу в функциональных компонентах
          </p>
          <br />
          <p>
            useImperativeHandle - записывает в ref.current все то что передаст
            компонент в объекте
          </p>
          <br />
          <p>
            В зависимостях можно указать в каких случаях объект API нужно
            перезаписать
          </p>
          <br />
          <pre>
            {`
const Search = forwardRef((props, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => {
      return {
          focus() {
              inputRef.current.focus()
          }
          clear() {
              inputRef.current.value = ''
          }
          log() {
              console.log(someData)
          }
      }
    }, [someData])

    return <input ref={inputRef} />
})
            `}
          </pre>
          <p>В React 19 forwardRef уже использовать не нужно</p>
        </NoteItem>
      </Note>
    </React.Fragment>
  );
}
