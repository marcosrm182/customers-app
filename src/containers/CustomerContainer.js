import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer';
import { deleteCustomer } from '../actions/deleteCustomer';
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {
    //<p>Datos del Cliente {this.props.customer.name}</p>

    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const { id } = values;
        return this.props.updateCustomer(id, values).then( r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    }

    handlOnBack = () => {
        this.props.history.goBack();
    }

    handleSubmitsuccess = () => {
        this.props.history.goBack();
    }

    handleOnDelete = id => {
        console.log(`handleOnDelete ${id}`);
        this.props.deleteCustomer(id).then(v => {
            this.props.history.goBack();
        });
    }

    renderCustomerControl = (isEdit, isDelete) => {
        if (this.props.customer) {
            const CustomerControl = isEdit ? CustomerEdit : CustomerData
            //Aki Don´t repeat Yourself
            // Tipo de componente determinado en ejecución
            return <CustomerControl {...this.props.customer}
                        onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleSubmitsuccess}
                        onBack={this.handlOnBack}
                        isDeleteAllow={!!isDelete}
                        onDelete={this.handleOnDelete} />
        }
        return null;
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ( { match: isEdit } ) => (
                <Route path="/customers/:dni/del" children={
                        ( { match: isDelete } ) => (
                            this.renderCustomerControl(isEdit, isDelete)
                        )
                } /> )
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
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerContainer));