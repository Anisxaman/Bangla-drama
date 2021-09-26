import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import "./Body.css"

const Body = () => {


    // const [products, setProducts] = useState([]);

    const [actors, setactors] = useState([]);
     const [budget, setBudget] = useState([])


    //  console.log(budget.length);

    useEffect(() => {

        fetch("./data.JSON")
        .then(res=>res.json())
        .then(data=>setactors(data))
       
    }, [])



    useEffect(() => {
console.log(budget);


       
    }, [budget])

    // console.log(actors)

const addCart=(get)=>{
    // console.log(get);

    setBudget(get);

            }


      









    return (
        <>
            <Header display="0"></Header>




        <div className="row">

                <div className="col-2 backImg">
                    <div>
                    <SideBar
                    passAll={budget}
                    totalBudget={actors}
                    
                    
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


        </div>





        





        



























           
        </>
    );
};

export default Body;