import React, {Component} from 'react';

import {Button, Col, Container, Row, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faEdit, faDatabase} from '@fortawesome/free-solid-svg-icons'

import Modal from 'react-modal';
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

const customStyleCadastro = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)'
    },
    content: {
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#CFCFCF',
        backgroundColor: '#fff',
        width: '800px',
        height: '500px',
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        padding: '10px',
        boxShadow: '0 4px 25px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
};

const customStyleLoad = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)'
    },
    content: {
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#CFCFCF',
        backgroundColor: '#fff',
        width: '400px',
        height: '200px',
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        padding: '10px',
        boxShadow: '0 4px 25px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
};

const customStylesEX = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)'
    },
    content: {
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#CFCFCF',
        backgroundColor: '#fff',
        width: '25%',
        height: '25%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        padding: '10px',
        boxShadow: '0 4px 25px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
};

export class ModalSair extends Component {
    constructor() {
        super();
        this.state = {isActive: false,
                };
    }

    componentWillMount() {
        Modal.setAppElement("body");
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive

        })
    }


    render() {
        return (
            <span>
                <Button variant="danger" onClick={this.toggleModal} title="SAIR DO SISTEMA">SAIR</Button>
                <Modal style={customStyleLoad} className="fi" isOpen={this.state.isActive}
                       onRequestClose={this.toggleModal}>
                    <Container fluid={true} style={{height: '100%'}}>
                        <Row>
                            <Col md={12} fluid>
                               <h6>SAIR DO SISTEMA</h6>
                               <hr/>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12} className="text-center">
                                <b>Deseja sair do Sistema?</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center">
                                <hr/>
                                <Button variant="danger" onClick={this.toggleModal} className="text-center">
                                    NÃO
                                </Button>
                                <Button variant="primary" onClick={this.excluir_credencial} style={{marginLeft: '10px'}}
                                        className="text-center">
                                    SIM
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </span>
        );
    }
}


export class ModalCadastrarPortal extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
    }

    componentWillMount() {
        Modal.setAppElement("body");
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive

        })
    }

    render() {
        return (
            <span>
                <Button variant="primary" onClick={this.toggleModal} title="Cadastrar Portal"><FontAwesomeIcon
                    icon={faPlus}/>&nbsp;CADASTRAR PORTAL</Button>
                <Modal style={customStyleCadastro} className="fi" isOpen={this.state.isActive}
                       onRequestClose={this.toggleModal}>
                    <Container fluid={true} style={{height: '100%'}}>
                        <Row>
                            <Col md={12} fluid>
                               <h3>Cadastrar Portal</h3>
                               <hr/>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>Nome Portal</b>
                                        <Form.Control type="text" placeholder="Nome portal..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                             <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>URL</b>
                                        <Form.Control type="text" placeholder="Endereço web..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-right">
                                <Button variant="success" onClick={this.toggleModal} className="text-center">
                                    Cadastrar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </span>
        );
    }
}







export class ModalCadastrarCliente extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
    }

    componentWillMount() {
        Modal.setAppElement("body");
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive

        })
    }

    render() {
        return (
            <span>
                <Button variant="primary" onClick={this.toggleModal} title="Cadastrar Cliente"><FontAwesomeIcon
                    icon={faPlus}/>&nbsp;CADASTRAR CLIENTE</Button>
                <Modal style={customStyleCadastro} className="fi" isOpen={this.state.isActive}
                       onRequestClose={this.toggleModal}>
                    <Container fluid={true} style={{height: '100%'}}>
                        <Row>
                            <Col md={12} fluid>
                               <h3>Cadastrar Cliente</h3>
                               <hr/>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>Nome Responsável</b>
                                        <Form.Control type="text" placeholder="Nome..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                             <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>E-mail</b>
                                        <Form.Control type="email" placeholder="Email..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="formControlsSelect">
                                    <Form.Label>Select</Form.Label>
                                    <Form.Control componentClass="select" placeholder="select">
                                        <option value="Vendedor_1">select</option>
                                        <option value="Vendedor_2">select</option>
                                        <option value="Vendedor_3">select</option>
                                  </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-right">
                                <Button variant="success" onClick={this.toggleModal} className="text-center">
                                    Cadastrar
                                </Button>
                                <Button variant="danger" onClick={this.excluir_credencial} style={{marginLeft: '10px'}}
                                        className="text-center">
                                    Fechar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </span>
        );
    }
}


export class ModalCadastrarEmpresa extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
    }

    componentWillMount() {
        Modal.setAppElement("body");
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive

        })
    }

    render() {
        return (
            <span>
                <Button variant="primary" onClick={this.toggleModal} title="Cadastrar Empresa"><FontAwesomeIcon
                    icon={faPlus}/>&nbsp;CADASTRAR EMPRESA</Button>
                <Modal style={customStyleCadastro} className="fi" isOpen={this.state.isActive}
                       onRequestClose={this.toggleModal}>
                    <Container fluid={true} style={{height: '100%'}}>
                        <Row>
                            <Col md={12} fluid>
                               <h3>Cadastrar Empresa</h3>
                               <hr/>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>Razão Social</b>
                                        <Form.Control type="text" placeholder="Nome..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>CNPJ</b>
                                        <Form.Control type="text" placeholder="CNPJ..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                             <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>E-mail</b>
                                        <Form.Control type="email" placeholder="Email..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="formControlsSelect">
                                    <Form.Label>Select</Form.Label>
                                    <Form.Control componentClass="select" placeholder="select">
                                        <option value="Vendedor_1">Vendedor_1</option>
                                        <option value="Vendedor_2">Vendedor_2</option>
                                        <option value="Vendedor_3">Vendedor_3</option>
                                  </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-right">
                                <Button variant="success" onClick={this.toggleModal} className="text-center">
                                    Cadastrar
                                </Button>
                                <Button variant="danger" onClick={this.excluir_credencial} style={{marginLeft: '10px'}}
                                        className="text-center">
                                    Fechar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </span>
        );
    }
}


export class ModalCadastrarCombo extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
    }

    componentWillMount() {
        Modal.setAppElement("body");
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive

        })
    }

    render() {
        return (
            <span>
                <Button variant="primary" onClick={this.toggleModal} title="Cadastrar Combo"><FontAwesomeIcon
                    icon={faPlus}/>&nbsp;CADASTRAR COMBO</Button>
                <Modal style={customStyleCadastro} className="fi" isOpen={this.state.isActive}
                       onRequestClose={this.toggleModal}>
                    <Container fluid={true} style={{height: '100%'}}>
                        <Row>
                            <Col md={12} fluid>
                               <h3><FontAwesomeIcon icon={faDatabase}/>&nbsp;Cadastrar Combo</h3>
                               <hr/>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>Nome Combo</b>
                                        <Form.Control type="text" placeholder="Nome..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>Descrição</b>
                                        <Form.Control type="text" placeholder="Descrição completa.."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                             <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>E-mail</b>
                                        <Form.Control type="email" placeholder="Email..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="formControlsSelect">
                                    <Form.Label>Planos</Form.Label>
                                    <Form.Control componentClass="select" placeholder="Planos">
                                        <option value="Plano_1">Plano_1</option>
                                        <option value="Plano_2">Plano_2</option>
                                        <option value="Plano_3">Plano_3</option>
                                        <option value="Plano_4">Plano_4</option>
                                        <option value="Plano_5">Plano_5</option>
                                        <option value="Plano_6">Plano_6</option>
                                  </Form.Control>
                                </Form.Group>
                            </Col>
                             <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>Valor total</b>
                                        <Form.Control type="text" placeholder="Valor total.."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-right">
                                <Button variant="success" onClick={this.toggleModal} className="text-center">
                                    Cadastrar
                                </Button>
                                <Button variant="danger" onClick={this.excluir_credencial} style={{marginLeft: '10px'}}
                                        className="text-center">
                                    Fechar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </span>
        );
    }
}


export class ModalEditarCliente extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
    }

    componentWillMount() {
        Modal.setAppElement("body");
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive

        })
    }

    render() {
        return (
            <span>
                <Button variant="primary" onClick={this.toggleModal} title="Ediar Cliente"
                        style={{marginTop: "32px"}}><FontAwesomeIcon icon={faEdit}/></Button>
                <Modal style={customStyleCadastro} className="fi" isOpen={this.state.isActive}
                       onRequestClose={this.toggleModal}>
                    <Container fluid={true} style={{height: '100%'}}>
                        <Row>
                            <Col md={12} fluid>
                               <h3>Editar Cliente</h3>
                               <hr/>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>Nome Responsável</b>
                                        <Form.Control type="text" placeholder="Nome..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                             <Col md={12}>
                                <Form>
                                    <Form.Group>
                                        <b>E-mail</b>
                                        <Form.Control type="email" placeholder="Email..."/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="formControlsSelect">
                                    <Form.Label>Vendedor</Form.Label>
                                    <Form.Control componentClass="select" placeholder="select">
                                        <option value="Vendedor_1">Vendedor_1</option>
                                        <option value="Vendedor_2">Vendedor_2</option>
                                        <option value="Vendedor_3">Vendedor_3</option>
                                  </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-right">
                                <Button variant="success" onClick={this.toggleModal} className="text-center">
                                    Alterar
                                </Button>
                                <Button variant="danger" onClick={this.excluir_credencial} style={{marginLeft: '10px'}}
                                        className="text-center">
                                    Fechar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </span>
        );
    }
}


export class ModalExcluirEmpresas extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
    }

    componentWillMount() {
        Modal.setAppElement("body");
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive

        })
    }

    render() {
        return (
            <span>
                <Button variant="danger" onClick={this.toggleModal} title="EXCUIR USUÁRIO"
                        style={{textAlign: 'right', marginTop: '31px', marginLeft: "10px"}}><FontAwesomeIcon
                    icon={faTrash}/>
                </Button>
                <Modal style={customStylesEX} className="fi" isOpen={this.state.isActive}
                       onRequestClose={this.toggleModal}>
                    <Container fluid={true} style={{height: '100%'}}>
                        <Row>
                            <Col md={8}>
                               <h4><FontAwesomeIcon icon={faTrash}/>&nbsp;EXCLUIR REGISTRO</h4>
                               <hr/>
                            </Col>
                            <Col md={4} className="text-right">
                                <Button onClick={this.toggleModal} bsClass="btn btn-sm btn-outline" variant="danger"
                                        className="m-hover">
                                    X
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center">
                                <b>Deseja excluir o CLIENTE e as EMPREASAS cadastradas?</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="text-center">
                                <hr/>
                                <Button onClick={this.toggleModal} variant="danger" className="m-hover">
                                    NÃO
                                </Button>
                                <Button onClick={this.excluir_usuario} style={{marginLeft: '10px'}} variant="primary"
                                        className="m-hover">
                                    SIM
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </span>
        );
    }
}



