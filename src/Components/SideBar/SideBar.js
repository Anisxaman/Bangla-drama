// import React, { useState } from 'react';
import "./SideBar.css"

const SideBar = (props) => {
    const{budget,name }=props.info;

    const {passAll}=props;
    
    console.log(props)
let Total=0;

for(const total of passAll){
    Total=Total+total.budget;
    // console.log(total.budget);

}


props.display(Total);













// const{totalBudget}=props;




// console.log(totalBudget);

// const stored=[];


// const displayTotal=()=>{


//     for(const key of totalBudget ){
//         console.log(key["id"]);
//         const addedProduct=products.find(product=>product.key===key);
//     }

// }

// const storedCart=[];

// console.log(saveCart);
// for(const key in saveCart){
//     console.log(key,saveCart[key]); //key aikhane property.
//     console.log(saveCart[key]); //key aikhane property.

//     console.log(key);
//   //   console.log(products);
//   const addedProduct=products.find(product=>product.key===key); //---key related value kuje nea
//   if(addedProduct){
//       const quantity=saveCart[key];
//       console.log(addedProduct);
//       addedProduct.quantity=quantity;//quality namer property add kora hoiase.
//     storedCart.push(addedProduct);

    
//   }








    





    return (
        <>

            
       
            <div className="card py-5 PriceBoard Hover position">
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
                        


                        <h2 className="card-title text-danger fw-bold">Info Board</h2>
                        {/* <h5 ><span className="fs-4 text-primary fw-bold">Actor Added:</span>{<br/>} {} </h5> */}
                        <h5 ><span className="fs-4 text-primary fw-bold">Actor Added:</span>{<br/>} {name} </h5>



                        {/* {
                            passAll.map>{name=>

                            }
                        } */}
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

                        <p className='fs-4'> <span  className="fw-bold ">Budget:</span> {budget} </p>
                        <p className='fs-4'> <span  className="fw-bold ">Total Budget:{<br/>}</span> {Total} </p>
                        <a href="/s" className="btn btn-primary px-5">Details</a>
                    </div>
                    </div>

            
           

       
            
        </>
    );
};

export default SideBar;