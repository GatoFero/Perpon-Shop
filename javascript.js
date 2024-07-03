$(document).ready(function(){

    fetch(`productos.json`)
    .then(response => response.json())
    .then(data =>{

        var productos = '';

        for(var i = 0; i < 20; i++){
            var producto = data.productos[i];

            productos += 
                `<div class="card-producto" nombre="${producto.busqueda}" marca="${producto.marca}" categoria="${producto.categoria}" colleccion="${producto.colleccion}">
                    <div class="productoImg-descripcion" style="background: url(${producto.fotoProducto}) right no-repeat; background-size: cover;">
                    </div>
                    <div class="codigo-barras">
                        <h2><strong>CodID</strong><br>${producto.id}</h2> <!-- id -->
                    </div>
                    <div class="ver-todo">
                        <h2><i class="fa-regular fa-eye"></i></h2>
                    </div>
                    <div class="medidas">
                        <h2>Meds <i class="fa-solid fa-ruler"></i></h2>
                        <div class="descripcion">
                            <h2><strong>Alt</strong><br>${producto.alto}cm</h2> <!-- descripcion -->
                            <h2><strong>Anch</strong><br>${producto.ancho}cm</h2> <!-- descripcion -->
                            <h2><strong>Prof</strong><br>${producto.profundidad}cm</h2> <!-- descripcion -->
                        </div>
                    </div>
                    <div class="producto-info">

                        <section class="nombre-colleccion">
                            <h1>${producto.nombreProducto}</h1> <!-- nombre -->
                            <h2><strong>Colleccion:</strong> ${producto.colleccion}</h2> <!-- colleccion -->
                        </section>

                        <section class="marca-categoria">
                            <h2><strong>Marca: </strong>${producto.marca}</h2> <!-- marca -->
                            <h2><strong>Catg: </strong>${producto.categoria}</h2> <!-- categoria -->
                        </section>

                        <section class="stock-disponibilidad">
                            <h2><strong>Envio: </strong>${producto.envio}</h2> <!-- disponibilidad -->
                            <h2><strong>Stock: </strong>${producto.stock}</h2> <!-- stock -->
                        </section>

                        <section class="precio">
                            <h2><strong>Price: </strong>${producto.precio}</h2> <!-- precio -->
                        </section>

                        <section class="botonesCompra">
                            <a href="#">Agregar</a>
                        </section> 
                    
                    </div>
                </div>`
        }
        document.getElementById('productos').innerHTML = productos;
    })

    $('#productos').on('mouseenter', '.botonesCompra', function() {
            $(this).closest('.card-producto').find('.producto-info, .productoImg-descripcion').css('border-color', '#ff5d8b');
        }).on('mouseleave', '.botonesCompra', function() {
            $(this).closest('.card-producto').find('.producto-info, .productoImg-descripcion').css('border-color', '');
        });

        $('#productos').on('mouseenter', '.ver-todo', function() {
            $(this).closest('.card-producto').find('.producto-info, .codigo-barras, .medidas').css('opacity', '0');
        }).on('mouseleave', '.ver-todo', function() {
            $(this).closest('.card-producto').find('.producto-info, .codigo-barras, .medidas').css('opacity', '1');
        });

    $('.botonMarca').click(function(){
        var filtro = $(this).text();
        $('.card-producto').each(function(){
            $(this).attr('marca') !== filtro? $(this).hide() : $(this).show(); 
        });
    })
    $('.botonCategoria').click(function(){
        var filtro = $(this).text();
        $('.card-producto').each(function(){
            $(this).attr('categoria') !== filtro? $(this).hide() : $(this).show(); 
        });
    })
    $('.botonColleccion').click(function(){
        var filtro = $(this).text();
        $('.card-producto').each(function(){
            $(this).attr('colleccion') !== filtro? $(this).hide() : $(this).show();  
        });
    })

    $('.busqueda input').on('keyup', function() {
        var busqueda = $(this).val().toLowerCase();
        $('.card-producto').hide().filter(function() {
            return $(this).attr('nombre').includes(busqueda);
        }).show();
    });
})