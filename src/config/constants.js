export function GET_API_SECRET() {
    let API_SECRET = process.env.REACT_APP_API_SECRET;
    if (API_SECRET == undefined || API_SECRET == '')
        return 'secret'
    else
        return API_SECRET
}

export function GET_SCHEMA_ID() {
    let SCHEMA_ID = process.env.REACT_APP_SCHEMA_ID;
    if (SCHEMA_ID == undefined || SCHEMA_ID == '')
        return 'NONE'
    else
        return SCHEMA_ID
}


export function GET_PASSCODE() {
    let PASSCODE = process.env.REACT_APP_PASSCODE;
    return PASSCODE
}


export var PROXY_URL = 'https://cors-anywhere.herokuapp.com/'