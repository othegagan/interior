'use server';

import axios from 'axios';

interface ContactFormData {
    fullname: string;
    email: string;
    phone: string;
    message: string;
}

export async function submitContactForm(data: ContactFormData) {
    try {
        const url = 'https://script.google.com/macros/s/AKfycbzl-5wIYTOCBs8We03oZdvLrE6bSey2FnJOLLaylhuXDDEucIhPiPtMYRJgHF00RJl97Q/exec';

        // Send data to the Google Apps Script Web App
        const response = await axios.post(url, data);

        return response.data;
    } catch (error) {
        throw new Error('There was an error submitting the form. Please try again.');
    }
}
