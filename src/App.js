import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const api = "https://fakestoreapi.com/products";
  const [productos, setProductos] = useState();
  const fetchApi = async () => {
    const response = await fetch(api);
    console.log(response.status);
    const responseJSON = await response.json();
    setProductos(responseJSON);
  };

  const deleteData = async () =>{
    const response = await fetch(api, {
        method: 'DELETE', 
    });
 
   const data = await response.json( );
    console.log(data);
 };
 deleteData();

 

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Fake Store API</h1>
        <button>+</button>
      </div>

      <div className="ContainerStore">
        {!productos
          ? "Loading..."
          : productos.map((producto, index) => {
              return (
                <div key={index} className="Card">
                  <img src={producto.image} />
                  <h1>{producto.title}</h1>
                  <button>Eliminar</button>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default App;
