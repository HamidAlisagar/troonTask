import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {useHistory} from "react-router-dom";

function DetailCharacter() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLodaing] = useState(true);
  const history=useHistory();

  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((response) => response.json())
      .then((charaters) => {
        setData(charaters);
        setLodaing(false);
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });
      // eslint-disable-next-line
  }, []);
  

  const handleBack=()=>{
    
    history.push("/");


  }
 
  if (loading) return <h2>Loading ....</h2>;
  return (
    <div>
 <button onClick={handleBack} className="btn btn-light" style={{marginTop:20, marginLeft:10}}>Go Back</button>
 <div className="card" style={{width:400 ,marginTop:0 , marginLeft:100}}> 
 <h3>Character Detail</h3>
  <img src={data.imageUrl} className="card-img-top" alt={data.image}/>
  <div className="card-body">
    <h5 className="card-title">Name:  {data.fullName}</h5>
    <p className="card-text"> Faimly: {data.family} </p>
    <p className="card-text"> Title:  {data.title}</p>
    
  </div>
</div>
    </div>
  );
}

export default DetailCharacter;
