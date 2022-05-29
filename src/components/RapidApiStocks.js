import axios from 'axios';
import React, { useState } from 'react'

export const RapidApiStocks = () => {
    const [data, setdata] = useState('')
    const getTopGainersData = async (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://nse-data1.p.rapidapi.com/near_fifty_two_week_low',
            headers: {
                'X-RapidAPI-Host': 'nse-data1.p.rapidapi.com',
                'X-RapidAPI-Key': '8569102040mshdca7113fca4e552p1ec64ajsn5a6f7f8d5494'
            }
        };

        axios(options).then(res => {
            console.log(res.data.body.dataLtpGreater20)
            setdata(res.data.body.dataLtpGreater20)
        })


    }
    return (
        <div>
            <form>
                {/* // <br></br>
                    // document.write(i.symbol)
                    // document.write(i.companyName)
                    // document.write(i.new52WHL)
                    // document.write(i.symbol) */}
                <input type="submit" onClick={(e) => { getTopGainersData(e) }} />
            </form>
            {data !== '' ?
                <table border="1">
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>CompanyName</th>
                            <th>New52WHL</th>
                            <th>Prev52WHL</th>
                            <th>PrevHLDate</th>
                        </tr>
                    </thead>


                    <tbody>
                        {data.map((e) => {
                            return (
                                <tr>
                                    <td>{e.symbol}</td>
                                    <td>{e.companyName}</td>
                                    <td>{e.new52WHL}</td>
                                    <td>{e.prev52WHL}</td>
                                    <td>{e.prevHLDate}</td>
                                </tr>
                            )
                        })

                        }
                    </tbody>

                </table>
                : null}
        </div>
    )
}
