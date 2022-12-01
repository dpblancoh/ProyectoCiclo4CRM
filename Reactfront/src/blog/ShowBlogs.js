import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'


const CompShowBlogs = () => {
    
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear Nuevo Cliente<i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Empresa</th>
                                <th>Nit</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Email</th>
                                <th>Departamento</th>
                                <th>Ciudad</th>
                                <th>Cargo</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog, index) => (
                                <tr key={ index }>
                                    <td> { blog.empresa } </td>
                                    <td> { blog.nit } </td>
                                    <td> { blog.nombres} </td>
                                    <td> { blog.apellidos } </td>
                                    <td> { blog.direccion } </td>
                                    <td> { blog.email } </td>
                                    <td> { blog.departamento} </td>
                                    <td> { blog.ciudad} </td>
                                    <td> { blog.cargo} </td>
                                    <td> { blog.accion} </td>
                                    <td>
                                        <Link to={`/edit/${blog._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowBlogs