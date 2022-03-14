import { Container, Header, Segment, Statistic, Grid, Icon, Form, Button } from 'semantic-ui-react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
// import '../node_modules/semantic-ui-css/semantic.css';

function App() {
  return (
    <Container>
      <MainHeader title={'Budget'} type='h1'/>

      <DisplayBalance size='small' title='Your Balance' value='2500.53' />
      
      <DisplayBalances />

      <MainHeader title='History' type='h3' />
      <EntryLine description='income' value='$10'/>

      <MainHeader title='Add New Transaction' type='h3' />
      <NewEntryForm />

    </Container>
  );
}

export default App;
