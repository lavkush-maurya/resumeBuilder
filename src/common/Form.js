import * as React from 'react';
import './Form.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import Header from '../components/header/header';
import { signInWithGoogle } from '../firebase';
import GoogleButton from 'react-google-button';
export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {

    return (
        <>
        <Header />
            <div className='flex main'>
                
                <div className="heading-container">
                    <h3>
                        {title} Form
                    </h3>
                </div>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className='flex'
                >
                    <TextField
                        id="email"
                        label="Enter the Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="password"
                        label="Enter the Password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>

                <Button title={title} handleAction={handleAction} />
                <GoogleButton onClick={signInWithGoogle} className="my-2"/>
            </div>
        </>
    );
}