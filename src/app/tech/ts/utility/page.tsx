import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Partial'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Required'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Pick'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Omit'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Record'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Readonly'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Exclude'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Extract'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='NonNullable'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='ReturnType'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Parameters'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Awaited'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Other'>
        <NoteItem>
          <p>
            InstanceType <br />
            ConstructorParameters <br />
            ThisParameterType <br />
            OmitThisParameter <br />
            ThisType <br />
            Uppercase <br />
            Lowercase <br />
            Capitalize <br />
            Uncapitalize
          </p>
        </NoteItem>
      </Note>
    </>
  );
}
