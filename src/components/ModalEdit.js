import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

export default function ModalEdit({ 
    isOpen,
    setIsOpen,
    description, 
    value,
    isExpense, 
    setDescription, 
    setValue, 
    setIsExpense
 }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm 
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)} >Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Confirm Changes</Button>
            </Modal.Actions>
        </Modal>
    )
}