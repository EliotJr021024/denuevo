// Array con los textos y nombres de las imágenes para cada mes
const meses = [
  {
    image: "mes1.jpg",
    title: "El comienzo de una gran historia juntos -popochis-",
    text: "Primera vez que viniste a mi casa, no puedo explicar como me senti ese dia,sentia ese nervio aunque no lo pareciera,no sabia donde meterme,simplemente estaba viviendo el momento"
          
  },
  {
    image: "mes2.jpg",
    title: "Dia De Mi Cumpleaños",
    text: "Me puso demasiado feliz que fueras a mi cumpleaños y no solo eso cuando vi que me habias traido un regalo no sabia donde meterme de la felicidad que tenia,no estaba acostumbrado a que me regalaran cosas -esa foto es hermosa-"
  },
  {
    image: "mes3.jpg", 
    title: "i love it",
    text: "Son de esos dias que no sabes porque pero fue un dia muy especial"
  },
  {
    image: "mes4.jpg",
    title: "Dia de Atraciones",
    text: "Fue algo muy lindo,estar casi muriendome del miedo pero estando a tu lado me calmaba y sentia la resposabilidad de estar ahi fuerte aunque por dentro estaba mas cagado que quien sabe."
  },
  {
    image: "mes5.jpg",
    title: "Dia de fotos in playa",
    text: "Fue algo muy lindo que vivi al lado tuyo, el tomarte fotos, cuando estuve en la playa senti traquilidad y felicidad de estar junto a ti, pude apreciar mucho tu belleza y tu esencia ."
  },
  {
    image: "mes6.jpg",
    title: "Saliditas casuales",
    text: "Me encanto estar ahi contigo,era mucho de ayuda el poder estar contigo y salir de la cotidianidad en la que estaba atado en ese momento PD: me encanto cuando me tomaste foto desprevenido, me senti muy amado ."
  },
  {
    image: "mes7.jpg",
    title: "Regalo de amor",
    text: "JAJJAJAJA fue un lio tener todo encubierto mucho tiempo,pero era necesario para que te llevaras tu sorpresa y no podia estar mas nervioso cuando te la iba a dar, sentia una felicidad por saber que te iba hacer feliz a ti."
  },
  {
    image: "mes8.jpg",
    title: "Perfect.",
    text: "simplemente perfect."
  },
  {
    image: "mes9.jpg",
    title: "Difrazes",
    text: "Me encanta estar contigo porque me haces hacer cosas que nunca habia hecho y haces que vea la vida de una forma diferente simplemente gracias Julie ."
  },
  {
      image: "mes12.jpg",
      title: "Julie te amo",
      text: "Gracias por hacerme vivir mi triste y amargada vida,muchas de mis experiencias te las debo a ti y gracias enserio por todo"
      
  },
  {
    image: "mes13.jpg",
    title: "Mi Modelo Profesional",
    text: "Me encanta mirar esta foto porque me recuerda lo afortunado que soy estando contigo,eres muy hermosa amor enserio nunca pienses lo contrario,desmaquillada,despeinada,recien despierta,durmiendo,como sea en todas las etapas que te he visto siempre has sido la mujer mas hermosa, amor te amo  eres mi modelo favprita nunca se te olvide, te amo mucho que lo sepas.Nunca me arrepentire de haberte escrito ese -Holaa- Gracias por siempre estar ahi, aunque no te cuente todo lo que siento aveces lo unico que necesito es tu presencia y un abrazo tuyo para que me relaje de todos mis problemas. "
    
},

  
];


let mesActual = 0;  // Inicializamos en el mes 1

const imageElement = document.getElementById("image");
const textElement = document.getElementById("text");
const nextButton = document.getElementById("nextButton");
const collageContainer = document.getElementById("imageCollage");

// Función para mostrar el collage de imágenes
function mostrarCollage() {
  collageContainer.innerHTML = ""; // Limpiar el collage actual
  
  // Agregar imágenes al collage
  collageImages.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "Collage de imágenes";
    collageContainer.appendChild(img);
  });
}

// Función para actualizar la página con la información del mes
function mostrarMes() {
  const mes = meses[mesActual];
  imageElement.src = mes.image;
  textElement.innerHTML = `<h2>${mes.title}</h2><p>${mes.text}</p>`;
}

// Función para pasar al siguiente mes
function siguienteMes() {
  mesActual++;
  if (mesActual >= meses.length) {
    mesActual = 0;  // Si llegamos al final, reiniciamos al primer mes
  }
  mostrarMes();
}

// Evento para cambiar al siguiente mes cuando se presiona el botón
nextButton.addEventListener("click", siguienteMes);

// Inicializamos con el primer mes
mostrarMes();

// Mostrar el collage de imágenes
mostrarCollage();