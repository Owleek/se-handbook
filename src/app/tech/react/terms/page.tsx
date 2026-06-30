import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Terms'>
      <NoteItem>
        <p>
          <b>Batching</b> - актуальное объединение setState в реакт появилось в
          18 версии, когда батчинг объединяет вызовы setState в один рендер
          независимо от того где вызваны эти setState. <br />
          Однако сам по себе батчинг в рамках React обработчиков событий типа
          onСlick, onChange был с самого появления React.
        </p>
        <br />
        <p>
          <b>Сравнение State</b> - Для примитивов state сравнивается по
          значению, а для ссылочных типов по ссылке, если ссылка или значение не
          изменилась, перерендера не произойдет!
        </p>
      </NoteItem>
    </Note>
  );
}
