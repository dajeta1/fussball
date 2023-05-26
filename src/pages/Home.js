import React, { useContext } from 'react'
import { Context } from '../Context'
import Card from './Card'


function Home() {
  let fussball = useContext(Context)
//  card = card.slice(0,4)
  return ( 
    <>
    <section className='foto'>
    <img src="https://tse2.mm.bing.net/th?id=OIP.d30gJWBxKZ617UNYTm-MNgHaDt&pid=Api&P=0&h=180" alt="foto"style={{'width' : '100%', 'height': '400px', 'overflow' : 'hidden'}} />
    </section>
    
    <section className='products'>
      <div className='container py-5'>
        <h2 className='mb-4  text-center'>Fussball Game</h2>
        <div className="row pb-10">
          {fussball && fussball.map(data => (
            <div key={data.id} className="col-3 pb-10">
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
 
    </>
  )
}

export default Home
