import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import "./Body.css"

const Body = () => {


    // const [products, setProducts] = useState([]);

    const [actors, setactors] = useState([]);
     const [budget, setBudget] = useState([])
     const [info, setinfo] = useState([])
     const [value, setValue] = useState([])


    //  console.log(budget.length);

    useEffect(() => {

        fetch("./data.JSON")
        .then(res=>res.json())
        .then(data=>setactors(data))
       
    }, [])



//   const handleAddProduct=(product)=>{
//       const newCart=[...budget,product]
//       console.log(newCart);
//   }

    // console.log(actors)

const addCart=(get)=>{
    // console.log(get);
    const newCart=[...budget,get]
    // console.log(newCart);

    setBudget(newCart);
    setinfo(get);

            }
const display=(value)=>{
    setValue(value);
    
}
      









    return (
        <>
            <Header display={value}></Header>




        <div className="row">

                <div className="col-2 backImg">
                    <div>
                    <SideBar
                    passAll={budget}
                    totalBudget={actors}
                    info={info}
                    display={display}
                    
                    
                    ></SideBar>

                    </div>


                </div>




            <div className="col-10 main">
                <div className="row container ">
                  {actors.map(actor=><Cards 

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