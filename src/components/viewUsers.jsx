import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const URL = 'http://localhost:3000/api/users'
const URL_DELETE = 'http://localhost:3000/api/user/'



const ShowUsers = () => {

    const [users, setUser] = useState([]);
    const [userLogin, setUserLogin] = useState(null);



    useEffect(() => {
      
        getUsers(); //al renderizar la aplicacion, muestre los datos traidos de esa funcion

    }, [])

    //metodo para mostrar todos los usuarios
    const getUsers = async() => {
        const res = await axios.get(URL); //peticion asincrona hacia el backend
        setUser(res.data.users) //seteo los datos hacia un nuevo estado

        console.log(res.data.users)
      
    }


    //metodo para eliminar un usuario por su id
    const deleteUser = async(id) => {
        await axios.delete(`${URL_DELETE}${id}`) //elimino un usuario por su id
        getUsers();
    }
    

  return (
    <div>
        <div className="container">
           
            <div className="row mt-5">
                <div className="col">
                    <table className="table mt-3">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Publicaciones</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map ((user) => ( //recorro el arreglo que traigo de ese estado
                                <tr key={user.id} >
                                    <td>{user.username}</td>
                                    <td>

                                        <Link to={`/Publicaciones/${user.id}` } >Ver Publicaciones</Link>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} >Editar</Link>
                                        <button onClick={() => deleteUser(user.id)} className='btn btn-danger mx-4'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to={`/Publicaciones`} className='btn btn-info'>Ver todas las Publicaciones</Link>
        </div>

    </div>
  )

}

export default ShowUsers