import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

export default function DisplayBalances() {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance size='tiny' color='green' title='Income' value='2500.53'/>
            </Grid.Column>
            <Grid.Column>
             <DisplayBalance size='tiny' color='red' title='Expenses' value='623.20' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}