import React from 'react';
import { getContacts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ContactShow extends React.Component {

componentDidMount(props){
    this.props.getContacts();
}


renderList = () => {
    
    const myContacts = this.props.contacts.filter(contact => contact.id === this.props.match.params.id);
    return myContacts.map(contact => {
        return (
            <div className="item" key={contact.id}>
                <div className="content">
                    <p>{contact.date}</p>
                    <div id="title">
                        <div>Contact Name: {contact.contact_name}</div>
                        <Link to={`/contacts/${contact.id}`}>{contact.contact_name}</Link>
                        <ul>
                            <li>Relationship: {contact.relationship}</li>
                            <li>Current Company: {contact.current_company}</li>
                            <li>Job Title: {contact.job_title}</li>
                            <li>LinkedIn Url: {contact.linkedin_url}</li>
                            <li>Other Url: {contact.other_url}</li>
                            <li>USERID: {contact.userId}</li>
                        </ul>
                        <div><img src={contact.linkedin_url} alt={`${this.props.title}'s picture`}  className="img-responsive" /></div>
                        <div><a href={"mailto:" + contact.other_url}>email</a></div>
                        <Link to={`/contacts`} onClick={() => this.props.deleteContact(contact.id)}> Delete </Link>

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
        loading: state.contactReducer.loading,
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, {getContacts})(ContactShow);