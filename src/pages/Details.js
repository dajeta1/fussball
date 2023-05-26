
import React, { useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context'
//import { Link } from 'react-router-dom'

function Details() {
  const {id} = useParams();
  let fussball = useContext(Context);
  const [fussballdata, setFussballdata] = useState()


  useEffect(() => {
    setFussballdata(fussball.filter(fussballdata => fussballdata.id === id)[0])
}, [id])


  return (
   <> 
   <section className="view-movie py-5 bg-light bg-gradient"> 
        
   <div className="container bg-blue">
    
       {
           fussballdata && 
           <div className="row">
               <div className="col-5">
                   <img src={fussballdata.photo} className="card-img-top" alt={fussballdata.name} />
               </div>
               <div className="col-6 offset-1">
                   <h2 className="mb-4">{fussballdata.name}</h2>
                   <p>
                       {fussballdata.description}
                   </p>
               </div>
           </div>
       }
   </div>
</section></>
  )
}

export default Details