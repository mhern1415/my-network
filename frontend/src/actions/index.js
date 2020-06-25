import { SIGN_IN, SIGN_OUT } from './types';
import contacts from '../apis/contacts';
import axios from 'axios'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

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