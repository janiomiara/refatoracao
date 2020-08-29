import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import Moment from 'moment';
import {Btnzoom, Ckeck, Nav, Tabela, Td, Title, Tr, Zom} from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Api from './../../Conexao/conexao'



class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pregao: [
                {hora: '08:00', status: 'ABERTO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},
                {hora: '09:00', status: 'ENCERRADO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},
                {hora: '10:00', status: 'FECHADO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},
                {hora: '08:00', status: 'ABERTO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},
                {hora: '09:00', status: 'ENCERRADO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},
                {hora: '10:00', status: 'FECHADO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},
                {hora: '08:00', status: 'ABERTO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},
                {hora: '09:00', status: 'ENCERRADO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},
                {hora: '10:00', status: 'FECHADO', cod: '122019', cod_02: '12358', empresa: 'wavecode'},


                ],
            zoom: 30,
            icon: true,
            timeNow: this.timeNow()
        }
    }



    listar_favoritosStar = () => {
        Api.get("/licitacoes/licitacoes_dia/",).then((response) => {
           console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    };

    componentDidMount() {


        this.listar_favoritosStar()

        setInterval(() => {
            this.setState({
                timeNow: this.timeNow(),
            });
        }, 1000);
    }

    timeNow() {
        return Moment().format('hh:mm:ss');
    }

    hangleZoomIncremente = () => {
        if (this.state.zoom !== 100) {
            this.setState({zoom: this.state.zoom + 5})
        }
    }

    hangleZoomDecremente = () => {
        if (this.state.zoom !== 0) {
            this.setState({zoom: this.state.zoom - 5})
        }
    }

    handleSonoro = () => {
        this.setState({icon: !this.state.icon})
    }


    dataAtual = () => {
        let data = new Date();
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();
        if (dia < 10) {
            dia = '0' + String(dia) + '/'
        } else {
            dia = String(dia) + '/'
        }
        if (mes < 10) {
            mes = '0' + String(mes) + '/'
        } else {
            mes = String(mes) + '/'
        }
        return dia + mes + ano
    }

    render() {
        return (
            <Container fluid>
                <Nav>
                    <Zom>
                        <div>ZOOM:&nbsp;&nbsp;
                            <Btnzoom onClick={() => this.hangleZoomIncremente()} background={'#0b486e'}>+</Btnzoom>
                            <span style={{fontSize: '15px'}}>&nbsp;&nbsp;&nbsp;{this.state.zoom}%&nbsp;&nbsp;</span>
                            <Btnzoom onClick={() => this.hangleZoomDecremente()} background={'#503960'}>-</Btnzoom>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            AVISO SONORO:&nbsp;&nbsp;
                            <Ckeck onClick={() => this.handleSonoro()}
                                   background={this.state.icon ? '#488f06' : '#6c6c6a'}>
                                <FontAwesomeIcon icon={this.state.icon ? 'bell' : 'bell-slash'}/></Ckeck>
                        </div>
                    </Zom>
                    <Title><h1>AVISOS DE LICITAÇÃO </h1></Title>
                    <Zom>
                        <span style={{fontSize: '35px'}}><FontAwesomeIcon icon="clock"
                                                                          color={'#32514f'}/>&nbsp;{this.timeNow()}</span><br/>
                        <span style={{fontSize: '19px'}}><FontAwesomeIcon icon="calendar-alt"
                                                                          color={'#32514f'}/>&nbsp;{this.dataAtual()}</span>
                    </Zom>
                </Nav>
                <Row style={{marginTop: '130px'}}>
                    <Tabela class="table table-striped table-hover">
                        <tbody>
                        {this.state.pregao.map((pregao) => {
                            return(
                                <Tr status={pregao.status} background-color={pregao.status} size={ this.state.zoom + 'px'}>
                                    <Td width={'40px'} status={pregao.status}></Td>
                                    <Td>{pregao.hora}</Td>
                                    <Td color={pregao.status}>{pregao.status}</Td>
                                    <Td>{pregao.cod}</Td>
                                    <Td>{pregao.cod_02}</Td>
                                    <Td>WAVECODE</Td>
                                </Tr>
                            )
                        })}
                        </tbody>
                    </Tabela>
                </Row>
            </Container>

        );
    }
}

export default Home;
