precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function calcularPago(incremento)
{

      unidad = Number(document.querySelector(".cantidad").innerHTML)
      unidad = unidad + incremento
      if(unidad < 0) { unidad = 0 }
      document.querySelector(".cantidad").innerHTML = unidad

      total = precio * unidad
      document.querySelector(".valor-total").innerHTML = total
}