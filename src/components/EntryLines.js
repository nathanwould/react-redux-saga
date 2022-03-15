import { Container } from "semantic-ui-react";
import MainHeader from "./MainHeader";
import EntryLine from "./EntryLine";

export default function EntryLines({ entries, deleteEntry, editEntry }) {
    return (
        <Container>
            <MainHeader title='History' type='h3' />
            {entries.map((entry) => (
              <EntryLine 
                key={entry.id}
                {...entry}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
              />
            ))
            }
        </Container>
    )
};
