import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function SingleData() {


    const { id } = useParams()
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
            <div className='container d-flex justify-content-center align-items-center'>
                <div>
                    <img src={data.image} alt="" style={{height:'300px',marginTop:'20px'}}/>
                </div>
                <div>
                    <li className='lis1' style={{ listStyle: 'none' }}>{data.name}</li>
                    <ul className='d-flex flx'>
                        <li style={{ listStyle: 'none' }} className={`round ${(data.status === "Alive") ? 'green' :
                            (data.status === "Dead") ? 'red' : 'grey'
                            } flx1  

                        `} ></li>
                        <li className=' flx2 ' style={{ listStyle: 'none' }}>  {data.status}-{data.species}</li>

                    </ul>
                    {/* <li className='lis' style={{ listStyle: 'none' }}>Last known location:</li>
                    <li  className='lis1' style={{ listStyle: 'none' }}>{data.location.name}</li> */}
                    <li className='lis' style={{ listStyle: 'none' }}>First seen in:</li>
                    <li className='lis1' style={{ listStyle: 'none' }}>{data.created}</li>
                    <li className='lis' style={{ listStyle: 'none' }}>type :</li>
                    <li className='lis1' style={{ listStyle: 'none' }}>{data.type}</li>
                   


                </div>
            </div>


        </>
    )
}

export default SingleData