import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { addContact } from '../../actions'

class ContactFormContainer extends React.Component {



render() {
    return (
        <div>
            <h3>Add Contact</h3>
            <ContactForm addContact={this.props.addContact} history={this.props.history} />
        </div>
    )
}


}

export default connect(null, { addContact })(ContactFormContainer);