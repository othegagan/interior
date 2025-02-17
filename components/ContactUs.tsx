'use client';

import { submitContactForm } from '@/server/action';
import { useState } from 'react';
import { Button } from './ui/button';
import { InView } from './ui/in-view';
import SubTitle from './ui/sub-title';

export default function ContactUs() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: ''
    });

    function validateField(name: string, value: string) {
        let error = '';

        if (name === 'fullname') {
            if (!value) {
                error = 'Full Name is required';
            } else if (value.length < 3) {
                error = 'Full Name must be at least 3 characters long';
            } else if (/\d/.test(value)) {
                error = 'Full Name cannot contain numbers';
            }
        }

        if (name === 'email') {
            if (!value) {
                error = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = 'Email is invalid';
            }
        }

        if (name === 'phone') {
            if (!value) {
                error = 'Phone number is required';
            } else if (!/^\d{10}$/.test(value)) {
                error = 'Phone number must be 10 digits';
            }
        }

        if (name === 'message') {
            if (!value) {
                error = 'Message is required';
            }
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
        return error === '';
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault(); // Prevent default form submission

            // Access form data
            const form = e.target as HTMLFormElement;
            const data = {
                fullname: form.fullname.value,
                email: form.email.value,
                phone: form.phone.value,
                message: form.message.value
            };

            // Validate form data
            const isValid = Object.keys(data).every((key) => validateField(key, data[key as keyof typeof data]));
            if (!isValid) {
                return;
            }

            // Set loading state to true when the form submission starts
            setLoading(true);

            const response = await submitContactForm(data);

            if (response) {
                form.reset(); // Reset form fields
                alert('Thank you for your message. We will get back to you soon!');
            }
        } catch (error) {
            console.error(error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        validateField(name, value);
    }

    return (
        <div id='contact' className=' overflow-hidden'>
            <div className='container mx-auto grid items-start gap-8 px-6 py-16 lg:grid-cols-2'>
                <div className='hidden h-full w-full lg:block'>
                    <img src='/others/why-choose-img-2.jpg' alt='' className='h-full w-full object-cover object-center' />
                </div>
                <div className='flex flex-col gap-6'>
                    <SubTitle text='Get in touch' variant='primary' style={{ animationDelay: '0.2s' }} />
                    <InView
                        variants={{
                            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 0.3, ease: 'linear' }}>
                        <h2 className='section-title'>
                            We would love to hear <br />
                            <span className='text-primary'>from you</span>
                        </h2>
                    </InView>

                    <p className='max-w-[500px]'>
                        Let's bring your vision to life — reach out to us today and start creating the space you've always dreamed of!
                    </p>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                            <div>
                                <input
                                    type='text'
                                    name='fullname'
                                    className='input w-full'
                                    placeholder='Full Name *'
                                    onChange={handleChange}
                                />
                                {errors.fullname && <p className='text-red-500'>{errors.fullname}</p>}
                            </div>
                            <div>
                                <input type='tel' name='phone' className='input w-full' placeholder='Phone' onChange={handleChange} />
                                {errors.phone && <p className='text-red-500'>{errors.phone}</p>}
                            </div>
                        </div>

                        <div className='w-full'>
                            <input type='text' name='email' className='input w-full' placeholder='Email *' onChange={handleChange} />
                            {errors.email && <p className='text-red-500'>{errors.email}</p>}
                        </div>

                        <div className='w-full'>
                            <textarea
                                name='message'
                                placeholder='Message *'
                                className='input max-h-20 min-h-20 w-full'
                                rows={2}
                                onChange={handleChange}
                            />
                            {errors.message && <p className='text-red-500'>{errors.message}</p>}
                        </div>

                        <Button effect='gooeyLeft' className=' w-full' type='submit' disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
