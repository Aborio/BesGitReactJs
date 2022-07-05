import productos from "../utils/productos";

export const CustomFetch = (time,task) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time );
    });
}


export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id));
        }, 200 );
    });
}






    