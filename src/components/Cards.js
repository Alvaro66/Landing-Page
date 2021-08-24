import react from "react";
const Cards =() =>{
    return(
        <div>
    <div className="card" style={{width:"18rem"}}>
    <img src="..." class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ducati 950 Sport</h5>
      <p className="card-text">Entra aqui y averigu sobre la nueva ducati 950 2021 en promocion de lanzamiento.</p>
      <a href="#" class="btn btn-primary">Aceptar</a>
    </div>
  </div>
  <div className="card" style={{width:"18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Ducati 1190</h5>
    <p className="card-text">La Clasica ducati de siempre con nuevas mejoras precios y mucho mas!</p>
    <a href="#" class="btn btn-primary">Ir a direccion</a>
  </div>
</div>
<div className="card" style={{width:"18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Servicio de Ayuda</h5>
    <p className="card-text">Contactanos cualquier duda , consulta o lo que quieras saber sobre ducati 2021.</p>
    <a href="#" class="btn btn-primary">Entra Aqui!</a>
  </div>
</div>
</div>

);
};
export default Cards
