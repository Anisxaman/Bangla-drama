import React from 'react';
import "./Cards.css"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee} from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core';
import {faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons'



const Cards = (props) => {
    const{HitMovie,budget,Award,name,CurrentMovie,Description}=props.passAll;


    
    return (
        <>

  <div className='col-lg-3  col-sm-6 col-12'>
  <div className="card mb-3 shadow rounded-3 Hover ">
        <img src={props.passAll.img} className="card-img-top setImg  " alt="" />
        <div className="card-body ">
         <div className="card-end">
         <h5 className="card-title fs-3 text">{name}</h5>
            <p><span className="text-success fw-bolder"> Hit Movies</span>:{HitMovie}</p>
            <p><span className="text-success fw-bolder"> Upcoming Movie:</span>:{CurrentMovie}</p>
            <p><span className="text-success fw-bolder"> Budget</span>:{budget}</p>
            <p><span className="text-success fw-bolder"> Award:</span>:{Award}</p>
            <p className="card-text"><span className="text-success fw-bolder"> Description:</span>{Description}</p>
         </div>
      <div className=" ">
                <div className="text-center"><button onClick={()=>props.addCart(props.passAll)} type="button" class="btn btn-outline-danger px-5">Add</button>

                    <div className='d-flex justify-content-between px-3'>
                        {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
                        <FontAwesomeIcon className='fs-2 text-info' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon  className='fs-2 text-danger'  icon={faTwitter}></FontAwesomeIcon>

                    </div>

                </div>
      </div>

        </div>
        </div>
  </div>
     
 
    
    



        

        





























            
        </>
    );
};

export default Cards;