// preguntasService.js
const preguntas = new Map();
let nextId = 0

const preguntasService = {
  getPreguntas: () => {
    return [...preguntas.values()];;
  },

  getPreguntaById: (id) => {
    return preguntas.get(id)
  },

  addPregunta: (newPregunta) => {
    let id = nextId++;
    preguntas.id = id.toString();
    preguntas.set(preguntas.id, newPregunta);
    return preguntas;
  },

  updatePregunta: (id, pregunta, respuesta) => {
    const preguntaToUpdate = preguntas.get(id);
    if (preguntaToUpdate) {
        preguntaToUpdate.pregunta = pregunta;
        preguntaToUpdate.respuesta = respuesta;
        return preguntaToUpdate;
    }
    return null;
  },

  deletePregunta: (id) => {
    return preguntas.delete(id);
  },

  actualizarPregunta: (id, imagen_pregunta_url, imagen_respuesta_url, pregunta, respuesta, dificultad) => {
    const preguntaToUpdate = preguntas.get(id);

    if (preguntaToUpdate) {
        preguntaToUpdate.pregunta = pregunta;
        preguntaToUpdate.respuesta = respuesta;
        preguntaToUpdate.imagen_pregunta_url = imagen_pregunta_url;
        preguntaToUpdate.imagen_respuesta_url = imagen_respuesta_url;
        preguntaToUpdate.dificultad = dificultad;
        
        return preguntaToUpdate;
    }

    return null;
  },

  agregarComentario: (id, nuevoComentario) => {
    const pregunta = preguntas.get(id);

    // Verifica si la pregunta existe
    if (pregunta) {
        // Agrega el nuevo comentario a la lista de comentarios de la pregunta
        pregunta.comentarios.push(nuevoComentario);
    } else {
        console.log("Pregunta no encontrada");
    }
  },

  actualizar2Preguntas: (id, imagen_pregunta_url, imagen_respuesta_url, pregunta, respuesta, dificultad, tema, nuevoComentario) => {
    const preguntaToUpdate = preguntas.get(id);

    // Verifica si la pregunta existe
    if (preguntaToUpdate) {
        // Actualiza los datos de la pregunta
        preguntaToUpdate.imagen_pregunta_url = imagen_pregunta_url;
        preguntaToUpdate.imagen_respuesta_url = imagen_respuesta_url;
        preguntaToUpdate.pregunta = pregunta;
        preguntaToUpdate.respuesta = respuesta;
        preguntaToUpdate.dificultad = dificultad;
        preguntaToUpdate.tema = tema;
        
        // Agrega el nuevo comentario a la lista de comentarios de la pregunta
        preguntaToUpdate.comentarios.push(nuevoComentario);
    } else {
        console.log("Pregunta no encontrada");
    }
  },

};

export default preguntasService;

preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Cuanto es 2+2?", respuesta: "La respuesta es 4", tema: "3", dificultad: "baja", comentarios: ["Prueba1", "Prueba2"] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Quien es el CEO de SpaceX?", respuesta: "El CEO de SpaceX es Elon Musk", tema: "6", dificultad: "alta", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Cuanto es 2*2?", respuesta: "La respuesta es 4", tema: "9", dificultad: "media", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Cuál es la capital de Francia?", respuesta: "La capital de Francia es París", tema: "7", dificultad: "media", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿En qué año se fundó la ONU?", respuesta: "La ONU fue fundada en 1945", tema: "8", dificultad: "alta", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Cuál es el símbolo químico del oro?", respuesta: "El símbolo químico del oro es Au", tema: "5", dificultad: "media", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Quién escribió 'Cien años de soledad'?", respuesta: "Gabriel García Márquez escribió 'Cien años de soledad'", tema: "4", dificultad: "alta", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "El río más largo del mundo es el río Amazonas", tema: "2", dificultad: "alta", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿En qué año llegó el hombre a la luna por primera vez?", respuesta: "El hombre llegó a la luna por primera vez en 1969", tema: "6", dificultad: "alta", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Cuál es la fórmula química del agua?", respuesta: "La fórmula química del agua es H2O", tema: "5", dificultad: "baja", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "La Mona Lisa fue pintada por Leonardo da Vinci", tema: "4", dificultad: "alta", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Cuál es la montaña más alta del mundo?", respuesta: "La montaña más alta del mundo es el Monte Everest", tema: "2", dificultad: "alta", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Qué planeta es conocido como el planeta rojo?", respuesta: "Marte es conocido como el planeta rojo", tema: "9", dificultad: "media", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?", respuesta: "La Segunda Guerra Mundial comenzó en 1939", tema: "8", dificultad: "alta", comentarios: [] })
preguntasService.addPregunta({imagen_pregunta_url: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-달에-앉아-우주-비행사의-만화-이미지-고품질-일러스트레이션.jpg", imagen_respuesta_url: "https://formacionparaformadores.com/wp-content/uploads/2015/01/Ser-Formador-preguntas-y-re-630x315.jpg", pregunta: "¿Cuál es el órgano más grande del cuerpo humano?", respuesta: "La piel es el órgano más grande del cuerpo humano", tema: "1", dificultad: "media", comentarios: [] })
