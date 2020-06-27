import React from 'react';
import { getContacts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ContactList extends React.Component {

componentDidMount(props){
    this.props.getContacts();
}


renderList = () => {
    return this.props.contacts.map(contact => {
        return (
            <div className="item" key={contact.id}>
                <div className="content">
                    <p>{contact.date}</p>
                    <div id="title">
                        <div>Contact Name: {contact.contact_name}</div>
                        <ul>
                            <li>Relationship: {contact.relationship}</li>
                            <li>Current Company: {contact.current_company}</li>
                            <li>Job Title: {contact.job_title}</li>
                            <li>LinkedIn Url: {contact.linkedin_url}</li>
                            <li>Other Url: {contact.other_url}</li>
                            <li>USERID: {contact.userId}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    })
}

render() {
    return (
        <div>
            {this.renderList()}
        </div>
    )
}

}

const mapStateToProps = state => {
    return {
        contacts: state.contactReducer.contacts,
        loading: state.contactReducer.loading
    }
}

export default connect(mapStateToProps, {getContacts})(ContactList);