import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                MyNetwork
            </Link>
            <div className="center menu">
                <Link to="/contacts/new" className="item">
                    Add Contact
                </Link>
            </div>
            <div className="right menu">
                <Link to="/contacts/all" className="item">
                    All Contacts
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;