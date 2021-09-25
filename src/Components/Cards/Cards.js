import React from 'react';
import "./Cards.css"

const Cards = (props) => {


    // console.log(props);


    
    return (
        <>

  <div className='col-3'>
  <div className="card mb-3 shadow rounded-3">
        {/* <img src={props.actor.img} className="card-img-top" alt="..."> */}
        <img src={props.passAll.img} className="card-img-top setImg  " alt="" />
        <div className="card-body ">
            <h5 className="card-title fs-3 text">{props.passAll.name}</h5>
            <p><span className="text-success fw-bolder"> Hit Movies</span>:{props.passAll.HitMovie}</p>
            <p><span className="text-success fw-bolder"> Budget</span>:{props.passAll.budget}</p>
            <p><span className="text-success fw-bolder"> Award:</span>:{props.passAll.Award}</p>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="text-center"><button onClick={()=>props.addCart(props.passAll)} type="button" class="btn btn-outline-danger px-5">Add</button>
</div>

        </div>
        </div>
  </div>
     
 
    
    



        

        





























            
        </>
    );
};

export default Cards;