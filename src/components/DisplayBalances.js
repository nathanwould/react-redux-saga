import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

export default function DisplayBalances({ incomeTotal, expenseTotal }) {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance size='tiny' color='green' title='Income' value={incomeTotal}/>
            </Grid.Column>
            <Grid.Column>
             <DisplayBalance size='tiny' color='red' title='Expenses' value={expenseTotal} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}