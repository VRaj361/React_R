import React, { useState } from 'react'
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { Slider } from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#2874f0',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 17,
        width: 17,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 5,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;

    return (
        <SliderThumb {...other}>
            {children}
        </SliderThumb>
    );
}
export const MaterailUISlider = () => {
    // const [value1, setValue1] =([]);
    const [value1, setValue1] = useState([])
    const handleChangeflip = (e, newValue) => {

        console.log(newValue)
        setValue1(newValue)
    }
    return (
        <>
            <Box sx={{ width: 300, margin: 8 }}>
                <AirbnbSlider
                    components={{ Thumb: AirbnbThumbComponent }}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    defaultValue={[10, 40]}
                    onChange={handleChangeflip}
                />
                <h1>flip kart </h1>
                <h3>Min Value</h3>{value1[0]}<br></br>
                <h3>Max Value</h3>{value1[1]}
            </Box>
        </>
    )
}
