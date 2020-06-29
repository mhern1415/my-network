import { destroyContact } from '../actions';

export const deleteContact = (id, history) => {
    return (dispatch) => {
        destroyContact(id).then(() => dispatch(removeContact(id)))
    }
    history.push('/')
}


export const removeContact = (id) => ({type: 'DELETE_CONTACT'})

export default (state = {contacts: [], loading: false}, action) => {
    switch (action.type){
        case "LOADING_CONTACTS":
            return {
              ...state,
              loading: true
            }
          case "LOADED_CONTACTS":
            return {
              ...state,
              loading: false,
              contacts: action.payload
            }
        case "ADD_CONTACT":
            return {
                ...state,
                loading: false,
                contacts: [...state.contacts, action.contact]
            }
        case "DELETE_CONTACT":
            const contacts = state.contacts.filter(contact => contact.id !==action.id)
            return {
                ...state,
                contacts
            }
            default:
                return state;
    }
}