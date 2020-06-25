import React from 'react';
import ContactFormContainer from './ContactFormContainer';

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
            other_url: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.addContact(this.state, this.props.history)
        this.setState({
            contact_name: '',
            relationship: '',
            current_company: '',
            job_title: '',
            date: '',
            linkedin_url: '',
            other_url: ''
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

export default ContactForm;