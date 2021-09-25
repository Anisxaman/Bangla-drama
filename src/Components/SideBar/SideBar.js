import React from 'react';
import "./SideBar.css"

const SideBar = (props) => {

    let totalBudget=0;

//    console.log(props);
    

const updateTotal=()=>{
    // if(isNaN(!totalBudget)){
    //     totalBudget=totalBudget+props.passAll.budget;
    //     return totalBudget;

    // }
    totalBudget=totalBudget+props.passAll.budget;
        return totalBudget;
 


}








    return (
        <>

            
       
            <div className="card py-5 PriceBoard">
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <h2 className="card-title text-danger fw-bold">Info Board</h2>
                        <h5 ><span className="fs-4 text-primary fw-bold">Actor Added:</span>{<br/>} {props.passAll.name} </h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

                        <p className='fs-4'> <span  className="fw-bold ">Budget:</span> {props.passAll.budget} </p>
                        <p className='fs-4'> <span  className="fw-bold ">Total Budget:{<br/>}{updateTotal()}</span>  </p>
                        <a href="/s" className="btn btn-primary px-5">Details</a>
                    </div>
                    </div>

            
            {/* <div className="col-10">

            </div> */}

       
            
        </>
    );
};

export default SideBar;