// preguntasService.js
let preguntas = [
  { id: 1, pregunta: "¿Cuanto es 2+2?", respuesta: "La respuesta es 4", tema: "3", dificultad: "baja", comentarios: []},
  { id: 2, pregunta: "¿Quien es el CEO de SpaceX?", respuesta: "El CEO de SpaceX es Elon Musk", tema: "6", dificultad: "alta"},
  { id: 3, pregunta: "¿Cuanto es 2*2?", respuesta: "La respuesta es 4", tema: "9", dificultad: "media"},
  { id: 4, pregunta: "¿Cuál es la capital de Francia?", respuesta: "La capital de Francia es París", tema: "7", dificultad: "media"},
  { id: 5, pregunta: "¿En qué año se fundó la ONU?", respuesta: "La ONU fue fundada en 1945", tema: "8", dificultad: "alta"},
  { id: 6, pregunta: "¿Cuál es el símbolo químico del oro?", respuesta: "El símbolo químico del oro es Au", tema: "5", dificultad: "media"},
  { id: 7, pregunta: "¿Quién escribió 'Cien años de soledad'?", respuesta: "Gabriel García Márquez escribió 'Cien años de soledad'", tema: "4", dificultad: "alta"},
  { id: 8, pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "El río más largo del mundo es el río Amazonas", tema: "2", dificultad: "alta"},
  { id: 9, pregunta: "¿En qué año llegó el hombre a la luna por primera vez?", respuesta: "El hombre llegó a la luna por primera vez en 1969", tema: "6", dificultad: "alta"},
  { id: 10, pregunta: "¿Cuál es la fórmula química del agua?", respuesta: "La fórmula química del agua es H2O", tema: "5", dificultad: "baja"},
  { id: 11, pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "La Mona Lisa fue pintada por Leonardo da Vinci", tema: "4", dificultad: "alta"},
  { id: 12, pregunta: "¿Cuál es la montaña más alta del mundo?", respuesta: "La montaña más alta del mundo es el Monte Everest", tema: "2", dificultad: "alta"},
  { id: 13, pregunta: "¿Qué planeta es conocido como el planeta rojo?", respuesta: "Marte es conocido como el planeta rojo", tema: "9", dificultad: "media"},
  { id: 14, pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?", respuesta: "La Segunda Guerra Mundial comenzó en 1939", tema: "8", dificultad: "alta"},
  { id: 15, pregunta: "¿Cuál es el órgano más grande del cuerpo humano?", respuesta: "La piel es el órgano más grande del cuerpo humano", tema: "1", dificultad: "media"}
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
