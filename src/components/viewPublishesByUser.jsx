import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const URL = 'http://localhost:3000/api/publishes/'
const URL_DELETE = 'http://localhost:3000/api/publish/'




const ShowPublishByUser = () => {


  const [publishes, setPublishes] = useState([])

 const {id} = useParams()
 console.log('ID de usuario:', id);

  useEffect(() => {

    getPublishByuser(); 

  }, [])

    //metodo para mostrar todas las publicaciones
    const getPublishByuser = async () => {

      
        const res = await axios.get(URL+id);
        setPublishes(res.data.publish) //seteo los datos 

        console.log(res.data)


      

    }

    const deletePublish = async (id) => {
      
      const res = await axios.delete(URL_DELETE+id);
      getPublishByuser()

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
                </div>
                <Link to={`/edit-publish/${publish.id}`} className='btn btn-info'>Editar Publicacion</Link>
                <button onClick={() => deletePublish(publish.id)} className='btn btn-danger mt-3'>Eliminar</button>
              </div>
            ))}
          </div>

        </div>
        <Link to="/create-publish" className="btn btn-primary mt-2 mb-2">Crear nueva publicacion</Link>
      </div>

    </>



  )
}

export default ShowPublishByUser