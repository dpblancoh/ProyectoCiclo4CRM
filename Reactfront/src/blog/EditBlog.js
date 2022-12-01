import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompEditBlog = () => {
  const [empresa, setEmpresa] = useState("");
  const [nit, setNit] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cargo, setCargo] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}${id}`, {
      empresa: empresa,
      nit: nit,
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      direccion: direccion,
      email: email,
      departamento: departamento,
      ciudad: ciudad,
      cargo: cargo,
    });
    navigate("/");
  };

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    const res = await axios.get(`${URI}${id}`);
    setEmpresa(res.data.empresa);
    setNit(res.data.nit);
    setNombres(res.data.nombres);
    setApellidos(res.data.apellidos);
    setTelefono(res.data.telefono);
    setDireccion(res.data.direccion);
    setEmail(res.data.email);
    setDepartamento(res.data.departamento);
    setCiudad(res.data.ciudad);
    setCargo(res.data.cargo);
  };

  return (
    <div className="container">
      <div className="col">
        <thead className="createTheadBg1">
          <h3>Editar Cliente</h3>
        </thead>
        <form onSubmit={update}>
          <div className="mb-3">
            <label className="form-label">Empresa</label>
            <input
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">                   
            <input
              value={nit}
              onChange={(e) => setNit(e.target.value)}
              type="text"
              className="form-control mt-1"
              placeholder="Nit"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombres</label>
            <input
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellidos</label>
            <input
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Direccion</label>
            <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Departamento</label>
            <input
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ciudad</label>
            <input
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Registrar</label>
            <input
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  )
}

export default CompEditBlog;
