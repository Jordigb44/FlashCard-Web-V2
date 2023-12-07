// preguntasService.js
let preguntas = [
  { id: 1, pregunta: "¿Cuanto es 2+2?", respuesta: "La respuesta es 4", tema: "3", dificultad: "baja"},
  { id: 2, pregunta: "¿Quien es el CEO de SpaceX?", respuesta: "El CEO de SpaceX es Elon Musk", tema: "6", dificultad: "alta"},
  { id: 3, pregunta: "¿Cuanto es 2*2?", respuesta: "La respuesta es 4", tema: "9", dificultad: "media"},

  // ... otras preguntas
];

const preguntasService = {
  getPreguntas: () => {
    return preguntas;
  },

  getPreguntaById: (id) => {
    return preguntas.find((pregunta) => pregunta.id === id);
  },

  addPregunta: (pregunta, respuesta) => {
    const newId = preguntas.length + 1;
    const newPregunta = { id: newId, pregunta, respuesta };
    preguntas.push(newPregunta);
    return newPregunta;
  },

  updatePregunta: (id, pregunta, respuesta) => {
    const index = preguntas.findIndex((p) => p.id === id);
    if (index !== -1) {
      preguntas[index].pregunta = pregunta;
      preguntas[index].respuesta = respuesta;
      return preguntas[index];
    }
    return null;
  },

  deletePregunta: (id) => {
    const index = preguntas.findIndex((p) => p.id === id);
    if (index !== -1) {
      const deletedPregunta = preguntas.splice(index, 1)[0];
      return deletedPregunta;
    }
    return null;
  },
};

export default preguntasService;
