import { Form, Segment, Checkbox } from "semantic-ui-react"

export default function EntryForm({
    description, 
    value,
    isExpense, 
    setDescription, 
    setValue, 
    setIsExpense
}) {
    return (
        <>
            <Form.Group>
                <Form.Input 
                    width={12}
                    label='Description'
                    icon='tags'
                    placeholder='new transaction'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <Form.Input 
                    width={4}
                    label='Value'
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} 
                />
            </Form.Group>
            <Segment compact>
                <Checkbox 
                    toggle
                    label='is expense'
                    checked={isExpense}
                    onChange={() => setIsExpense((prevState) => !prevState)}
                />
            </Segment>
        </>
    )
}