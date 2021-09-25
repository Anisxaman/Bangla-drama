import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import SideBar from '../SideBar/SideBar';

const Body = () => {


    // const [products, setProducts] = useState([]);

    const [actors, setactors] = useState([]);

    useEffect(() => {

        fetch("./data.JSON")
        .then(res=>res.json())
        .then(data=>setactors(data))
       
    }, [])

    console.log(actors)














    return (
        <>



        <div className="row">

                <div className="col-2">
                        <SideBar></SideBar>


                </div>




            <div className="col-10">
                <div className="row">
                    {
                    actors.map(actor=><Cards 

                        key={actor.id}
                        passAll={actor}


                    
                    
                    
                    
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