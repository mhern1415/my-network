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
            default:
                return state;
    }
}