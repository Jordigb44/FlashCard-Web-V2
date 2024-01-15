// indexRouter.js
import express from 'express';
import preguntasService from './preguntasService.js';

const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    preguntas: preguntasService.getPreguntas(),
  };

  res.render('index', data);
});

router.get('/detalle/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = {
    preguntas: preguntasService.getPreguntaById(id),
  };
  res.render('detalle', data);
});


router.get('/respuesta/:id', (req, res) => {
    const id = parseInt(req.params.id).toString();
    const data = {
      preguntas: preguntasService.getPreguntaById(id),
    };
    res.render('respuesta', data);
  });

router.get('/error/:id/:eror_mes', (req, res) => {
  const id = parseInt(req.params.id).toString();
  const data = {
    errores: {id: req.params.id,
              error_msg: req.params.eror_mes
              },
  };
  
  res.render('error404', data);
});

router.post('/addComentario/:id', (req, res) => {
    const id = parseInt(req.params.id).toString()
  const ComentarioNuevo = req.body.ComentarioNuevo;
  preguntasService.agregarComentario(id, ComentarioNuevo);
  res.redirect(`/detalle/${id}`)
});
router.post('/add2Pregunta/:id', (req, res) => {
  const id = parseInt(req.params.id).toString()
const { pregunta, respuesta, imagenPregunta, imagenRespuesta, tema, dificultad, comentarios} = req.body;
preguntasService.actualizar2Preguntas(id,  imagenPregunta, imagenRespuesta, pregunta, respuesta, dificultad, tema, comentarios);
res.redirect(`/detalle/${id}`)
});

router.post('/addPregunta', (req, res) => {
  const { pregunta, respuesta, imagenPregunta, imagenRespuesta, tema, dificultad, comentario } = req.body;

  // Comprabamos las entradas
  if (![pregunta].every(texto => typeof texto === 'string')) {
    res.status(404).redirect(`/error/nuevaPregunta/La pregunta introducida no es tipo texto`)
  }
  if (![respuesta].every(texto => typeof texto === 'string')) {
    res.status(404).redirect(`/error/nuevaPregunta/La respuesta no es de tipo texto`)
  }
  if (![tema].every(texto => typeof texto === 'string')) {
    res.status(404).redirect(`/error/nuevaPregunta/El tema introducido no es de tipo texto`)
  }
  if (!['baja', 'media', 'alta'].includes(dificultad.toLowerCase())) {
    res.status(404).redirect(`/error/nuevaPregunta/La dificultad seleccionada no es valido`)
  }
  const patronUrl = /^(https?):\/\/[^\s/$.?#].[^\s]*$/;
  if (![imagenPregunta].every(url => patronUrl.test(url))) {
    res.status(404).redirect(`/error/nuevaPregunta/La url de la imagen de pregunta no es una url valida`)
  }
  if (![imagenRespuesta].every(url => patronUrl.test(url))) {
    res.status(404).redirect(`/error/nuevaPregunta/La url de la imagen de respuesta no es una url valida`)
  }
  

  // Llamar al servicio de preguntas para agregar la pregunta
  const nueva_pregunta = {imagen_pregunta_url: imagenPregunta, imagen_respuesta_url: imagenRespuesta, pregunta: pregunta, respuesta: respuesta, tema: tema, dificultad: dificultad, comentarios: [comentario] }
  const addPregunta = preguntasService.addPregunta(nueva_pregunta);
  if(addPregunta){
    res.redirect("/")
  } else{
    res.status(404).redirect(`/error/nuevaPregunta/No se pudo agregar la nueva pregunta`)  }
});

router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id).toString();
  const deletedPregunta = preguntasService.deletePregunta(id);

  if (deletedPregunta) {
    // Puedes redirigir a la página principal o hacer algo más aquí
    res.redirect('/');
  } else {
    res.status(404).redirect(`/error/${id}/Elemento no encontrado`);
  }
});


router.get('/crearFlashcard', (req, res) => {
  res.render('crearFlashcard');
});


router.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id).toString();
  const pregunta = preguntasService.getPreguntaById(id);
  console.log(pregunta)
  res.status(302).render('editarFlashcard', pregunta);
});

router.post('/actualizarPregunta', (req, res) => {
  const {id, pregunta, respuesta, imagenPregunta, imagenRespuesta, tema, dificultad, comentarios } = req.body;

  // Llamar al servicio de preguntas para agregar la pregunta
  const actualizarPregunta = preguntasService.actualizarPregunta(id,pregunta, respuesta, imagenPregunta, imagenRespuesta, tema, dificultad, comentarios );
  if(actualizarPregunta){
    res.redirect("/")
  } else{
    res.status(404).redirect(`/error/nuevaPregunta/No se pudo agregar la nueva pregunta`)  }
  // Puedes redirigir a la página de detalles o hacer algo más aquí
  // res.redirect(`/detalle/${newPregunta.id}`); 
});

export default router;
