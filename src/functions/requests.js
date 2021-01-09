import axios from 'axios';

// const contactUrl = process.env.REACT_APP_CONTACT_URL;

export const sendContactMessage = (payload) => axios.post("https://301bmpbe8a.execute-api.us-east-1.amazonaws.com/Test/contact_email_resource", payload);
