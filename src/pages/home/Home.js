import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, Button, FormGroup, Label, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
import Widget from '../../components/Widget/Widget';
import { loginUser } from '../../actions/user';
import microsoft from '../../assets/microsoft.png';

class Home extends React.Component {
    

    render() {

        return (
           <div>
               <p>Hola</p>
           </div>

        );
    }
}



export default withRouter(Home);

