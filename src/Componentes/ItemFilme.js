import {
    Button,
    Item,
} from 'semantic-ui-react'

function ItemFilme({ imgUrl, titulo, ano }) {
    return (
        <Item>
            <Item.Image
                size='tiny'
                src= {imgUrl} 
            />
            <Item.Content>
                <Item.Header>{titulo}</Item.Header>
                <Item.Meta>Ano: {ano}</Item.Meta>
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