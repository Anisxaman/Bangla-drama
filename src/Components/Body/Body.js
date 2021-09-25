import React, { useEffect, useState } from 'react';
import "./Body.css"

const Body = () => {



    // const [products, setProducts] = useState([]);
    // const [cart, setcart] = useState([]);

    const[actor,setActor]=useState([]);


    useEffect(() => {

        fetch("./products.JSON")
        .then(res=>res.json())
        .then(data=>console.log(data));
       
      
    }, [])


    // fetch("./products.JSON")
    // .then(res=>res.json())
    // .then(data=>{
    //     setProducts(data);
    //     setdisplayProducts(data);


























    return (
        <>





























            
        </>
    );
};

export default Body;