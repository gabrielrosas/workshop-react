import {
    Button,
    Item,
} from 'semantic-ui-react'

function ItemFilme() {
    return (
        <Item>
            <Item.Image
                size='tiny'
                src= "https://react.semantic-ui.com/images/wireframe/image.png"
            />
            <Item.Content>
                <Item.Header>Titulo</Item.Header>
                <Item.Meta>Ano: 2022</Item.Meta>
                <Item.Extra>
                    <Button.Group>
                        <Button icon="star outline" />
                        <Button icon="star outline" />
                        <Button icon="star outline" />
                        <Button icon="star outline" />
                        <Button icon="star outline" />
                    </Button.Group>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default ItemFilme;