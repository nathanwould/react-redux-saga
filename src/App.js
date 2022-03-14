import { Container, Header, Segment, Statistic, Grid, Icon, Form, Button } from 'semantic-ui-react';
// import '../node_modules/semantic-ui-css/semantic.css';

function App() {
  return (
    <Container>

      <Header as='h1'>Budget</Header>

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>$2,500.53</Statistic.Value>
      </Statistic>
      
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic 
                size='tiny' 
              >
                <Statistic.Label style={{textAlign: 'left'}}>
                  Income:
                </Statistic.Label>
                <Statistic.Label style={{color: 'green'}}>
                  $1,045.50
                </Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic 
                size='tiny' 
              >
                <Statistic.Label style={{textAlign: 'left'}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Label style={{color: 'red'}}>
                  $623.50
                </Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Thing</Grid.Column>
            <Grid.Column width={3}>Value</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' />
              <Icon name='trash' />
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add New Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input 
            width={12}
            label='Description'
            icon='tags'
            placeholder='new transaction' 
          />
        <Form.Input 
          width={4}
          label='Value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
        />
        </Form.Group>
        <Button.Group style={{
          marginTop: 20
        }}
        >
          <Button danger>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
