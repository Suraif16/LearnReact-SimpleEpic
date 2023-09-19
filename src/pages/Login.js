import React from 'react'
import StandardLayout from "../components/layout/StandardLayout";
import Input from '../components/forms/Input';
import FormLink from '../components/forms/FormLink';
import PasswordInput from '../components/forms/PasswordInput';
import {Formik, Form,} from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

// Yup Validation Schema

const loginValidation = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email Address is Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is Required')
})

const LOGIN_DATA = {
    email: '',
    password: ''
}

function Login() {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState(LOGIN_DATA);
    const {email, password} = loginForm;

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const loginSubmit = () => {
        //TODO: Necessary backend calling for the authentication
        navigate('/');
    }
    
  return (
    <div>
        <StandardLayout>
        <div  className='h-screen px-[200px]'>
            <div className='flex items-center justify-center'>
                <div className='w-[400px]'>
                    <p className='font-bold text-4xl pb-2'>Sign In</p>
                    <p className='pb-3'>Please enter your credentials</p>
                    <Formik enableReinitialize initialValues={{email, password}} validationSchema={loginValidation}
                    //TODO: Define on Submit handler
                    onSubmit={loginSubmit}
                    >
                    {(formik) => (
                        <Form className='flex flex-col gap-2'>
                            <Input 
                                key='email'
                                type='email' 
                                name='email' 
                                placeholder='Enter your email'
                                onChange={handleOnChange}
                                />
                            <PasswordInput 
                                name='password' 
                                key='password'
                                placeholder='Enter your password'
                                onChange={handleOnChange}
                            />
                            <button type='submit' className='bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all ease-in-out'>Sign-In</button>
                        </Form>
                    )}
                    </Formik>
                    <div className='flex flex-col gap-2 text-center my-6'>
                        <FormLink name="Forgot Password?" path="/"/>
                        <p>Don't have an account? <FormLink name="Create account" path="/"/></p>
                    </div>
                </div>
            </div>
        </div>
        </StandardLayout>
    </div>
  )
}
// We are going to use certain packages like formik. yup for authentication stuff
export default Login
