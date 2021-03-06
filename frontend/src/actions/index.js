import { SIGN_IN, SIGN_OUT } from './types';
import contacts from '../apis/contacts';
import axios from 'axios'

export const signIn = (userId, userEmail) => {
    return {
        type: SIGN_IN,
        payload: userId,
        payloadEmail: userEmail
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const getContacts = () => {
    return dispatch => {
        dispatch({type: "LOADING_CONTACTS"});
        return fetch ('http://localhost:3002/contacts')
        .then(resp => resp.json())
        .then(contacts => dispatch({type: "LOADED_CONTACTS", payload: contacts}))
    }
}


export const addContact = (contact, history) => {
    return dispatch => {
      return fetch('http://localhost:3002/contacts', {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({contact})
      }).then(resp => resp.json())
        .then(contact => {
            dispatch({type: "ADD_CONTACT", contact})
            history.push('/contacts')
        }
      )
    }
  }

  export const destroyContact = (id) => {
      return fetch(`http://localhost:3002/contacts/${id}`, {
          method: 'DELETE',
          headers: {
              'Accept': 'applications/json',
              'Content-Type': 'application/json'
          }
      })
  }