import { Fab, IconButton } from '@material-ui/core'
import { DeleteForever, Fingerprint } from '@material-ui/icons'
import Button from '@mui/material/Button';
import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FormGroup, Slider } from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';



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


//switch
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
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

    const handleChangeflip = (e, newValue) => {

        console.log(newValue)
        setValue1(newValue)
    }



    const [colorBack, setcolorBack] = useState('black')
    const func1=()=>{
        if(colorBack==='black'){
            setcolorBack('white')
        
        }else{
            setcolorBack('black') 
        }   
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

            <Box sx={{ width: 300, height: 300, backgroundColor: `${colorBack}` }}>
                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                        onChange={func1}
                    />
                </FormGroup>
            </Box>





        </div>
    )
}
