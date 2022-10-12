import { useState } from 'react' //importando useState

import {
    Button,
    Input,
} from 'semantic-ui-react'

function CampoBusca({ loading, search }) { //Recebendo novas propriedades
    const [termo, setTermo] = useState('') //Criando estado para o campo de busca

    //Função para chamar a busca
    const submit = () => {
        search(termo)
    }

    //Função de evento onChange do campo de busca
    const onChange = (event) => {
        setTermo(event.target.value)
    }

    //Passando as propriedades para os campanentes da tela
    return (
        <Input action fluid onChange={onChange} value={termo} placeholder='Busca...' disabled={loading}>
            <input />
            <Button content="Pesquisar" icon='search' loading={loading} onClick={submit}/>
        </Input>
    )
}

export default CampoBusca;