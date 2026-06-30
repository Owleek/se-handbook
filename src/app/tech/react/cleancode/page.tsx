import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Terms'>
      <NoteItem>
        <p>
          Производные данные хранить в state - антипаттерн, должен быть единый
          источник истины, по этому вместо
          <pre>
            {`
            const [users, setUsers] = useState([...]);
            const [filteredUsers, setFilteredUsers] = useState([]);
             `}
          </pre>
          использовать
          <pre>
            {`
            const [users, setUsers] = useState([...]);
            const filteredUsers = users.filter(u => u.active)
             `}
          </pre>
        </p>
      </NoteItem>
    </Note>
  );
}
