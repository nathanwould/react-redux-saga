import { Button } from "semantic-ui-react"

export default function ButtonSaveOrCancel() {
    return (
        <Button.Group 
          style={{
            marginTop: 20
          }}
        >
          <Button danger>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
    )
}