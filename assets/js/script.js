import {propiedadesAlquiler, propiedadesVenta} from './data.js';

let maxObject = document.querySelector("#all") ? 3 : 10;
const rowPropiedadesAlquiler = document.querySelector("#rowAlquiler");
const rowPropiedadesVenta = document.querySelector("#rowVenta");

const functionInner = (array, row) => {
  let alDom = '';
  array.slice(0, maxObject).forEach((elemento) => {
    const numeroHabitaciones =
    elemento.habitaciones > 1 ? "Habitaciones" : "Habitación";
    const numeroBathroom = elemento.bathrooms > 1 ? "Baños" : "Baño";
    let featureOne,  featureTwo;

    if (array == propiedadesAlquiler) {
      featureOne = elemento.smoke
        ? '<i class="fas fa-smoking"></i> Permitido fumar'
        : '<i class="fas fa-smoking-ban"></i> No se permite fumar';
      featureTwo = elemento.pets
        ? '<i class="fas fa-paw"></i> Mascotas permitidas'
        : '<i class="fas fa-ban"></i> No se permiten mascotas';
    } else if (array == propiedadesVenta) {
      featureOne = venta.subsidio
        ? '<i class="fa-solid fa-money-bill"></i> Vale con HCV'
        : '<i class="fa-solid fa-file-invoice-dollar"></i> Solo crédito con pie';
      featureTwo = venta.estacionamiento
        ? '<i class="fa-solid fa-car"></i> Estacionamiento propio'
        : '<i class="fa-solid fa-square-parking"></i> Estacionamiento de pago en la cuadra ';
    } else {
      console.log("código inesperado");
      return
    }

    const template = `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img
      src= ${elemento.src}
      class="card-img-top"
      alt="Imagen de la propiedad en alquiler"
    />
    <div class="card-body">
      <h5 class="card-title">
      ${elemento.nombre}
      </h5>
      <p class="card-text">
      ${elemento.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${elemento.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${elemento.habitaciones} ${numeroHabitaciones} |
        <i class="fas fa-bath"></i> ${elemento.bathrooms} ${numeroBathroom}
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${elemento.costo}</p>
      <p class="text-danger">
      ${featureOne}
      </p>
      <p class="text-success">
      ${featureTwo}
      </p>
    </div>
    </div>
    </div>
    `; 
    alDom += template;
  }); 
row.innerHTML += alDom;
};

rowPropiedadesAlquiler
? functionInner(propiedadesAlquiler, rowPropiedadesAlquiler)
: console.log('no corresponde mostrar casas en alquiler aquí');

rowPropiedadesVenta
? functionInner(propiedadesVenta, rowPropiedadesVenta)
: console.log('no corresponde mostrar casas en venta aquí');