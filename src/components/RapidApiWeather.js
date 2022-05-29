import React, { useState } from 'react'
import axios from 'axios'
export const RapidApiWeather = () => {
    
    const [city, setcity] = useState('')
    const [data, setdata] = useState('')


    const getWeatherData = async (e) => {

        e.preventDefault();

        var config = {
            method:'GET',
            url:"https://community-open-weather-map.p.rapidapi.com/weather",
            params:{
                q:city
            },
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': '8569102040mshdca7113fca4e552p1ec64ajsn5a6f7f8d5494'
            }
        }

        axios(config).then(res=>{
            setdata(res.data)
        })

    }
    return (
        <div>

            <form>
                <input type="text"  onChange={(e) => setcity(e.target.value)} />
                <input type="submit" onClick={(e)=>{getWeatherData(e)}} />
            </form>

            {
                data !== ''?
                data.weather[0].main
                :null
            }
            {
                data !== ''?
                data.main.humidity
                :null
            }
        </div>
    )
}
