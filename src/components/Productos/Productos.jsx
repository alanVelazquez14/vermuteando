import { useState, useEffect } from "react";
import { useSearch } from "../../../SearchProvider";
import { datos } from "../../productosList";
import {
  ContainerProductos,
  ImagenProducto,
  ProductosStyled,
  TitleProductos,
} from "./ProductosStyled";

const Productos = () => {
  const { searchTerm } = useSearch(); // Obtener el searchTerm desde el contexto
  const [productosFiltrados, setProductosFiltrados] = useState(datos);

  // Usar useEffect para actualizar los productos filtrados cuando searchTerm cambie
  useEffect(() => {
    if (searchTerm === "") {
      setProductosFiltrados(datos); // Restaurar todos los productos cuando no hay búsqueda
    } else {
      const productosFiltrados = datos.filter((dato) =>
        dato.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProductosFiltrados(productosFiltrados); // Filtrar productos con el searchTerm
    }
  }, [searchTerm]); // Dependencia en searchTerm para hacer el filtro cuando cambie

  return (
    <div>
      <TitleProductos> • NUESTROS PRODUCTOS •</TitleProductos>
      <ContainerProductos>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto, id) => (
            <ProductosStyled key={id}>
              <ImagenProducto src={producto.image} alt={producto.name} />
              <h3>{producto.name}</h3>
              <p>{producto.description}</p>
              <p>$ {producto.price}</p>
            </ProductosStyled>
          ))
        ) : (
          <p>No hay publicaciones que coincidan con tu búsqueda.</p>
        )}
      </ContainerProductos>
    </div>
  );
};

export default Productos;
