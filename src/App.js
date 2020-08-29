import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from "react-s-alert";
import Home from "./Components/PainelAvisos/Home";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = "";

    }


    render() {
        return (
            <Container fluid>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
                <Alert stack={{limit: 5, spacing: 0}} />
            </Container>
        );
    }
}
export default App;
