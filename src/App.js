import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [ description, setDescription ] = useState('');
  const [ value, setValue ] = useState('');
  const [ isExpense, setIsExpense ] = useState(true);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ entryId, setEntryId ] = useState(null);
  const [ total, setTotal ] = useState(0)
  const [ incomeTotal, setIncomeTotal ] = useState(0);
  const [ expenseTotal, setExpenseTotal ] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.map((entry) => (
      entry.isExpense ? 
        totalExpenses += entry.value 
        : totalIncome += entry.value
  ));
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpenses);
    setTotal(totalIncome - totalExpenses)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries])

  const deleteEntry = (id) => {
    const result = entries.filter(entry => (entry.id !== id))
    setEntries(result)
  };

  const addEntry = () => {
    const result = entries.concat({ 
      id: entries.length+1, 
      description, 
      value, 
      isExpense 
    })
    setEntries(result)
  };

  const editEntry = (id) => {
    if(id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  };

  const resetEntry = () => {
    setDescription('');
    setIsExpense(true);
    setValue('');
  };

  return (
    <Container>
      <MainHeader title={'Budget'} type='h1' />

      <DisplayBalance size='small' title='Your Balance' value={total} />
      
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <EntryLines 
        entries={entries} 
        deleteEntry={deleteEntry} 
        editEntry={editEntry}
      />

      <MainHeader title='Add New Transaction' type='h3' />
      <NewEntryForm 
        addEntry={addEntry} 
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
       <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        addEntry={addEntry} 
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 300.00,
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.00,
    isExpense: true
  }
]