const propiedadesAlquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      bathrooms: 2,
      costo: 2000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar.",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      bathrooms: 3,
      costo: 2500,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      bathrooms: 2,
      costo: 2200,
      smoke: false,
      pets: false,
    },
    {
      nombre: "departamento completo para toda la familia",
      src: "assets/img/alquiler_1.jpeg",
      descripcion:
        "Seguro y temperado departamento, ideal para vacaciones en Hoh Rain Forest.",
      ubicacion: "666 Wood Street, Treetown, USA 9184",
      habitaciones: 3,
      bathrooms: 2,
      costo: 2700,
      smoke: false,
      pets: true,
    },
    {
      nombre: "elegante casa en pleno bosque Porcupine Mountains",
      src: "assets/img/alquiler_2.jpeg",
      descripcion:
        "Descanza en Porcupine Mountains Wilderness State Park, golf, piscina, pesca y más",
      ubicacion: "199 Noplace, Forestown, MNP 6125 ",
      habitaciones: 2,
      bathrooms: 2,
      costo: 4000,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Luminoso apartamento cerca del mar",
      src: "assets/img/alquiler_3.jpeg",
      descripcion:
        "Apartamento cerca del mar, con Smart Home Automation System, Alexa, amplio patio con bajada a la playa",
      ubicacion: "2320 Navagio Beach, SouthSween, LA 7823",
      habitaciones: 5,
      bathrooms: 3,
      costo: 3000,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Apartamento silencioso en pleno centro",
      src: "assets/img/alquiler_4.jpeg",
      descripcion:
        "Apartamento minimalista de lujo, silencioso y con una excelente conectividad",
      ubicacion: "8078 Maimonides, Miami, MC 64289",
      habitaciones: 1,
      bathrooms: 1,
      costo: 1500,
      smoke: true,
      pets: false,
    },
  ];
  
  const propiedadesVenta = [
    {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 1,
      bathrooms: 2,
      costo: 195000,
      subsidio: false,
      estacionamiento: true,
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
      ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      bathrooms: 1,
      costo: 200100,
      subsidio: true,
      estacionamiento: false,
    },
    {
      nombre: "Penthouse de lujo con terraza panorámica",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
      ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      bathrooms: 3,
      costo: 3005000,
      subsidio: false,
      estacionamiento: true,
    },
    {
      nombre: "Departamento elegante para familia distinguida",
      src: "assets/img/venta_1.jpeg",
      descripcion:
        "Seguro y temperado departamento, espacioso, con aislación interna y externa de primera calidad.",
      ubicacion: "666 Gold Street, Hightstown, NJ 9144",
      habitaciones: 4,
      bathrooms: 2,
      costo: 1005000,
      subsidio: false,
      estacionamiento: true,
    },
    {
      nombre: "Elegante casa en las cercanias de Porcupine Mountains",
      src: "assets/img/venta_2.jpeg",
      descripcion:
        "Casa en las cercania de uno de los bosques más hermosos del mundo, elige calidad de vida",
      ubicacion: "90 Noplace, Forestown, MNP 6125 ",
      habitaciones: 2,
      bathrooms: 2,
      costo: 935000,
      subsidio: true,
      estacionamiento: true,
    },
    {
      nombre: "Luminosa casa estilo japones",
      src: "assets/img/venta_3.jpeg",
      descripcion:
        "Casa templada, amplio patio interno, zona loft en el mismo recinto",
      ubicacion: "2320 Navagio Beach, SouthSween, LA 7823",
      habitaciones: 5,
      bathrooms: 3,
      costo: 985000,
      subsidio: true,
      estacionamiento: true,
    },
    {
      nombre: "Casa de lujo estilo europeo, con patio de ensueño",
      src: "assets/img/venta_4.jpeg",
      descripcion:
        "Casona de estilo mansión europea, en barrio de lujo, con mobiliario incluido",
      ubicacion: "908 Esav House, Miami, MC 64899",
      habitaciones: 7,
      bathrooms: 3,
      costo: 1975000,
      subsidio: true,
      estacionamiento: true,
    },
  ];

  export { propiedadesAlquiler, propiedadesVenta };
