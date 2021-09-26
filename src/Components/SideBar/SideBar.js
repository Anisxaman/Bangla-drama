import "./SideBar.css"

const SideBar = (props) => {
    const{budget,name }=props.info;

    const {passAll}=props;
    
    console.log(props)
let Total=0;
// ---------------------------total budget part-------------------------
for(const total of passAll){
    Total=Total+total.budget;
    // console.log(total.budget);

}


// -------------------------------passing total value-------------------
props.display(Total);





    return (
        <>

            
       
            <div className="card py-5 PriceBoard Hover position">
                    <div className="card-body">
                        


                        <h2 className="card-title text-danger fw-bold">Info Board</h2>
                        
                        <h5 className="Tit"><span className="fs-4 text-primary fw-bold ">Actor Added:</span>{<br/>} {name} </h5>
                        <ul>
                            {
                                passAll.map(each=><li>Total:{each.name}</li>)
                            }
                        </ul>

                        <p className='fs-4'> <span  className="fw-bold ">Budget:</span> {budget} </p>
                        <p className='fs-4'> <span  className="fw-bold ">Total Budget:{<br/>}</span> {Total} </p>
                        <a href="/s" className="btn btn-primary px-5">Details</a>
                    </div>
                    </div>     
            
        </>
    );
};

export default SideBar;