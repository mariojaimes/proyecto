alert("Funciona como una tienda a la que se le añaden productos");
let carrito=[];
var edo = true;
while (edo) {
    let articulo=prompt("Ingresa tu producto");
    if (articulo.length>=1) {
        carrito.push(articulo);
        let añadir =prompt("Si para añadir")
        if (añadir== si || añadir==Si || añadir==SI) {
            
        }else{
            var edo=false;
        }
        
    }else{
        var estado=false;
        var vacio=prompt("añade algo la siguiente vez");
        }
    }
    console.log(Carrito);
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i]);
        
    }