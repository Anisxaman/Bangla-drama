import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import SideBar from '../SideBar/SideBar';
import "./Body.css"

const Body = () => {


    // const [products, setProducts] = useState([]);

    const [actors, setactors] = useState([]);

    const [budget, setBudget] = useState([])

    useEffect(() => {

        fetch("./data.JSON")
        .then(res=>res.json())
        .then(data=>setactors(data))
       
    }, [])

    console.log(actors)

const addCart=(get)=>{
    console.log(get);

    setBudget(get);

            }


      









    return (
        <>



        <div className="row">

                <div className="col-2 backImg">
                    <div>
                    <SideBar
                    passAll={budget}
                    
                    
                    ></SideBar>

                    </div>


                </div>




            <div className="col-10 main">
                <div className="row container ">
                    {
                    actors.map(actor=><Cards 

                        key={actor.id}
                        passAll={actor}
                        addCart={addCart}


                    
                    
                    
                    
                    ></Cards>)





                }
                    
                </div>

            </div>


            {/* <Cards></Cards> */}



         









        </div>





        





        



























           
        </>
    );
};

export default Body;