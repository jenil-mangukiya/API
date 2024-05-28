import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Rickandmortyap = ({ data }) => {
    
   
    return (
        <>


            <div class="card">
                <div className='bgcolor d-flex'>
                    <img src={data.image} alt="" />

                    <div class="container2">
                        <div class="li">
                            <Link style={{textDecoration:'none',color:'#fff'}} to={`/single-data/${data.id}`}>{data.name}</Link>
                        </div>
                        <div className='d-flex'>
                            <div class={`round ${(data.status === "Alive") ? 'green' :
                                (data.status === "Dead") ? 'red' : 'grey'
                                }   

                        `} ></div>
                            <div class="lili" >{data.status}-{data.species}</div>
                        </div>
                        <div class="lil">Last known location:</div>
                        <div class="lili">{data.location.name}
                        </div>
                        <div class="lil">First seen in:</div>
                        <div class="lili">{data.created}</div>
                    </div>
                </div>
            </div>




        </>
    )

}

export default Rickandmortyap