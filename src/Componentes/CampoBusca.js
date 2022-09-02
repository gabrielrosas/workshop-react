import {
    Button,
    Input,
} from 'semantic-ui-react'

function CampoBusca() {
    
    return (
        <Input action fluid placeholder='Busca...'>
            <input />
            <Button content="Pesquisar" icon='search' />
        </Input>
    )
}

export default CampoBusca;