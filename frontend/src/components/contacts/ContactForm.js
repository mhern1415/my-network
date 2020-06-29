import React from 'react';
import ContactFormContainer from './ContactFormContainer';
import authReducer from '../../reducers/authReducer'
import { connect } from 'react-redux';

class ContactForm extends React.Component {
    
    constructor(props) {
        super(props)

        this.state={
            contact_name: '',
            relationship: '',
            current_company: '',
            job_title: '',
            date: '',
            linkedin_url: '',
            other_url: '',
            userId: ''            

        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit(event){
        event.preventDefault();

        var request = {
            contact_name: this.state.contact_name,
            userId: this.props.currentUserId,
            relationship: this.state.relationship,
            current_company: this.state.current_company,
            job_title: this.state.job_title,
            date: this.state.date,
            linkedin_url: this.state.linkedin_url,
            other_url: this.props.currentUserEmail
          }      
        
        this.props.addContact(request, this.props.history)
        this.setState({
            contact_name: '',
            relationship: '',
            current_company: '',
            job_title: '',
            date: '',
            linkedin_url: '',
            other_url: '',
            user_id: ''
            
        })
    }

    render() {
        return(
            <div>
                <div>
                    <form onSubmit={(event) => this.handleOnSubmit(event)}>
                        <div className="field">
                            <label>Contact Name</label>
                            <input
                            name="contact_name"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="John Smith"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Relationship</label>
                            <input
                            name="relationship"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="Friend"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Current Company</label>
                            <input
                            name="current_company"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="Google"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Job Title</label>
                            <input
                            name="job_title"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="Software Developer"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Date of First Contact</label>
                            <input
                            name="date"
                            type="date"
                            value={this.state.date}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="05/25/20"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>LinkedIn Profile</label>
                            <input
                            name="linkedin_url"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="linkedin.com"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <div className="field">
                            <label>Other URL</label>
                            <input
                            name="other_url"
                            type="text"
                            value={this.state.text}
                            onChange={(event) => this.handleOnChange(event)}
                            placeholder="facebook.com"
                            required
                            autoComplete="off"
                            />
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

///<div className="field">
   ///                         <label>User ID</label>
      ///                      <input
         ///                   name="user_id"
            ///                type="integer"
               ///             value={this.props.currentUserId}
                  ///          onChange={(event) => this.handleOnChange(event)}
                     ///       placeholder="facebook.com"
                        ///    required
                           /// autoComplete="off"
                            ////>
                        ///</div>

const mapStateToProps = state => {
    return {
        currentUserId: state.auth.userId,
        currentUserEmail: state.auth.userEmail
};
};

export default connect(mapStateToProps)(ContactForm);