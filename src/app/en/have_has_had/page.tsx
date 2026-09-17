import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Have/Has/Had'>
        <p>
          Просто глагол, но его формы можно спутать с формами `to be` так как
          часто используются с ним
        </p>
        <p>Но все же эти формы глагола не являются формами to be</p>
        <NoteItem>
          <h1>Have / Has</h1>
          <br />
          <p>
            Have и Has - признак настояшего времени но форма меняется в
            зависимости от подлежащего (I/.../They)
          </p>
          <p>Для He/She/It используется Has</p>
          <p>Для остальных Have: I, you, we, they</p>
          <br />
          <p>ex: They have a problem</p>
          <p>ex: He has a problem</p>
        </NoteItem>
        <NoteItem>
          <h1>Had</h1>
          <br />
          <p>
            Если had в предложении является вспомогательным глаголом, то это
            всегда только V3 и никакие другие
            <br />
          </p>
          <p>
            Had - признак прошедшего времени, независит от подлежашего, для всех
            (I ... They) - had
          </p>
          <br />
          <p>ex: I had a car</p>
          <p>ex: He had a car</p>
        </NoteItem>
        <NoteItem>
          <h1>ВАЖНО!</h1>
          <br />
          <p>
            Выше показаны основные случае когда have/has/had является
            самостоятельным глаголом - который несет сильный смысл `иметь`
          </p>
          <p>
            Однако бывают и случаи, когда глагол является лишь вспомогательным:
          </p>
          <br />
          <p>I have eaten - Present Perfect (Я покушал - `только что`)</p>
          <p>He has eaten - Present Perfect (Он покушал - `только что`)</p>
          <p>He has eaten - Present Perfect (Он покушал - `только что`)</p>
          <p>I had eaten - Past Perfect (Я уже поел - `к тому моменту`)</p>
          <p>
            I had been eaten. - Past Perfect Passive (Past Perfect в
            страдательном залоге - `Я был съеден`)
          </p>
          <br />
          <br />
          <p>
            Поскольку форма глагола `to be` - been не используется
            самостоятельно, оно используется вместе с have/has/had
          </p>
          <p>have been - Present Perfect</p>
          <p>has been - Present Perfect</p>
          <p>had been - Past Perfect</p>
          <br />
          <p>
            Итог: <br />
            Возьмем произвольный глагол, его форма может меняться в зависимости
            от подлежащего в рамках одного и того же времени. <br />
            Теперь зафиксируем подлежащее, и изменим время, то и в этом случае
            форма глагола может измениться
          </p>
        </NoteItem>
        <NoteItem>
          <NoteItem>
            <p>
              V2 - сам говорит что это Past Simple, по этому ему не нужен
              вспоммагательный глагол (если вдруг взбрела мысль добавить had)
            </p>
            <p>
              V3 - в то время говорит что ему нужно вспомогательный глагол чтобы
              показать время, это может быть как настояшим, так и прошедшем и
              будущем
              <br />
              V1 - тоже не говорит о времени
            </p>
          </NoteItem>
        </NoteItem>
      </Note>
    </>
  );
}
