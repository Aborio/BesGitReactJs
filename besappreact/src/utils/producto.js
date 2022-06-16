const producto = {
    id: 1,
    name: "Producto 1",
    image: "https://picsum.photos/200/300",
    stock: 7,
    precio: 100,
    descripcion: "Descripcion del producto 1"
    }

    const traerProducto = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(producto);
            }, 2000 );
        });
    }
export default traerProducto;