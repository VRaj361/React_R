import { Fab, IconButton } from '@material-ui/core'
import { DeleteForever, Fingerprint } from '@material-ui/icons'
import Button from '@mui/material/Button';
import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Slider } from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';
import PropTypes from 'prop-types';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function valuetext(value) {
    return `${value}°C`;
}


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

AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
};

export const MaterailUIBasic = () => {
    const [value, setValue] = React.useState([20, 37]);
    const [value1, setValue1] = React.useState([]);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const handleChangeflip=(e,newValue)=>{
        
        console.log(newValue)
        setValue1(newValue)
    }



    return (
        <div>
            {/* <Box sx={{ height: 200, width: 200, backgroundColor: 'blue', color: "white", '&:hover': { backgroundColor: "pink" } }}>

                <Button >Click</Button>



            </Box>
            <Button variant="text" >Text</Button>
            <Button variant="contained" color="error" >Contained</Button>
            <Button variant="outlined" color="primary" startIcon={<DeleteForever />}>Outlined</Button>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>
            <Fab color="primary" aria-label="add">
                <Fingerprint />
            </Fab>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item><input type="text" placeholder='enter name'></input></Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>2</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>3</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>4</Item>
                </Grid>
            </Grid> */}

            {/* slider like flipkart */}


            <Box sx={{ width: 300, margin: 8 }}>
                {/* <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={{ color: "blue" }}
                    step={100}
                    min={100}
                    max={1000}
                    defaultValue={100}
                    marks
                /> */}



                <AirbnbSlider
                    components={{ Thumb: AirbnbThumbComponent }}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    defaultValue={[10, 40]}
                    onChange={handleChangeflip}
                />





            </Box>
            {/* <br></br>
            {value[0]}<br></br>
            {value[1]} */}
            
            <h1>flip kart </h1>
            <h3>Min Value</h3>{value1[0]}<br></br>
            <h3>Max Value</h3>{value1[1]}

            <Box>
                
            </Box>





        </div>
    )
}
