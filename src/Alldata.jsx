import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Rickandmortyap from './Rickandmortyap';

function Alldata() {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/?page=2')
            .then(function (response) {
                // handle success
                console.log(response.data.results);
                setdata(response.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
            <div className='main-sec' >
                <div className='container'>
                    <div className='row'>
                        {
                            data.map((item) => {
                                return (
                                    <>
                                        <div className='col-6'>
                                            <Rickandmortyap data={item} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alldata