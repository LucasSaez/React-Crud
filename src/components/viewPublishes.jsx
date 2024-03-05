import axios from 'axios';
import { useState, useEffect } from 'react';



const URL = 'http://localhost:3000/api/publishes';




const ShowPublishes = () => {


  const [publishes, setPublishes] = useState([])

  useEffect(() => {

    getPublishes(); //al renderizar la aplicacion, muestre los datos traidos de esa funcion

  }, [])

  //metodo para mostrar todas las publicaciones
  const getPublishes = async () => {
    const res = await axios.get(URL); //peticion asincrona hacia el backend
    setPublishes(res.data.publishes) //seteo los datos hacia un nuevo estado

    console.log(res.data.publishes)


  }



  return (
    <>
      <div className='container px-4 mt-5 text-center'>
        <div className='row gx-5 '>
          <div className='col'>
            {publishes.map((publish) => (

              <div className="card" key={publish.id}>
               
                <div className="card-body">
                  <h5 className="card-title">{publish.description}</h5>
                  <p className="card-text">{publish.location}</p>
                  <p className='card-text'>{publish.date}</p>
                  <p className='card-text'>{publish.userId}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>


    </>



  )
}

export default ShowPublishes