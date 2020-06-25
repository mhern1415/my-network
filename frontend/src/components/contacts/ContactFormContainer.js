import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';

class ContactFormContainer extends React.Component {



render() {
    return (
        <div>
            <h3>Add Contact</h3>
            <ContactForm />
        </div>
    )
}


}

export default ContactFormContainer;