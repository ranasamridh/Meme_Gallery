'use client';
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const logoLeft = 'https://imgs.search.brave.com/9CO3Omnuz7uebtjNLIMhDFWMz8ttM62Ygah8_9hHWa8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzgwLzA1LzQ2/LzM2MF9GXzE4MDA1/NDY1Nl9EWU9EeU4z/SGRSZFlMWnNUZnZo/THlkdDFNY0NXWFNP/YS5qcGc';
    const logoRight = 'https://imgs.search.brave.com/R7NN2upJveFLgCvlFXthUweJ4vUcoZfQvSIAWdPdc3A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvQWJv/dXQtTWUtUE5HLUhE/LnBuZw'; 

    return (
        <AppBar color="" position='static' >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={logoLeft} alt="logo" style={{ width: 200 }} />
                <a href="https://drive.google.com/file/d/1O_5nWHewt6Fp3EpZs3iGjZ4mKii_oT42/view?usp=sharing" >
                <img src={logoRight} alt="logo" style={{ width: 100 }} />
                </a>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
