import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

export default function NewEntryForm() {
    return (
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
        <ButtonSaveOrCancel />
      </Form>
    )
}

