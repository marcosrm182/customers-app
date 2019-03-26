import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';

class CustomerContainer extends Component {
    //<p>Datos del Cliente {this.props.customer.name}</p>

    handleSubmit = values => {
        console.log(JSON.stringify(values));
    }

    handlOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ( { match } ) => {
                const CustomerControl = match ? CustomerEdit : CustomerData
                //Aki Don´t repeat Yourself
                // Tipo de componente determinado en ejecución
                return <CustomerControl {...this.props.customer}
                            onSubmit={this.handleSubmit}
                            onBack={this.handlOnBack} />
            }
        } />
    )


    render() {
        return (
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()} >
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, null)(CustomerContainer));