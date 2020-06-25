import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContactFormContainer from './contacts/ContactFormContainer'
import ContactListContainer from './contacts/ContactListContainer'
import ContactList from './contacts/ContactList'
import ContactShow from './contacts/ContactShow'
import Header from './Header'
import Footer from './Footer'
import ContactEditContainer from './contacts/ContactEditContainer'
import ContactDelete from './contacts/ContactDelete'



const App = () => {
    return (
        <div className="ui component">  
            <BrowserRouter>
                <div>
                <Header />
                <Route path="/" exact component={ContactListContainer}/>
                <Route path="/contacts" exact component={ContactListContainer}/>
                <Route path="/contacts/new" exact component={ContactFormContainer}/>
                <Route path="/contacts/edit" exact component={ContactEditContainer}/>
                <Route path="/contacts/show" exact component={ContactShow}/>
                <Route path="/contacts/delete" exact component={ContactDelete}/>
                </div>
            </BrowserRouter>
        <div>
        <Footer />
        </div>
        </div>
    )
}

export default App;