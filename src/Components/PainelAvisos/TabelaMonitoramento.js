import React, {Component} from 'react';
import {Tabela, Td, Tr} from "./styles";


class TabelaMonitoramento extends Component {
    render() {
        return (
            <Tabela class="table table-striped table-hover">
                <tbody>
                <Tr background={'rgba(67,243,29,0.2)'}>
                    <Td width={'40px'} background={'#1e6e10'}></Td>
                    <Td>08:30</Td>
                    <Td color={'#1e6e10'}>ABERTO</Td>
                    <Td>122019</Td>
                    <Td>122358</Td>
                    <Td>WAVECODE</Td>

                </Tr>
                </tbody>
            </Tabela>
        );
    }
}



export default TabelaMonitoramento;
