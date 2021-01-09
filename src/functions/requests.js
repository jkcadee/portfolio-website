import axios from 'axios';

const contactUrl = process.env.REACT_APP_CONTACT_URL;

console.log(contactUrl);

export const sendContactMessage = (payload) => axios.post(contactUrl, payload);
