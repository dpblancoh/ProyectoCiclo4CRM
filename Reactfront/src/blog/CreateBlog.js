import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompCreateBlog = () => {
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

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
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

  return (
    <div className="container">
      <div className="col">
        <thead className="createTheadBg">
          <h3>Crear Nuevo Cliente</h3>
        </thead>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Empresa</label>
            <input
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nit</label>
            <input
              value={nit}
              onChange={(e) => setNit(e.target.value)}
              type="number"
              className="form-control"
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
              type="number"
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
              type="imail"
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
            <label className="form-label">Cargo</label>
            <input
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </div>
    </div>
  )
}

export default CompCreateBlog;