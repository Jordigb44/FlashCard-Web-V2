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
    const id = parseInt(req.params.id);
    const data = {
      preguntas: preguntasService.getPreguntaById(id),
    };
    res.render('respuesta', data);
  });

router.get('/error/:id/:eror_mes', (req, res) => {
  const id = parseInt(req.params.id);
  const data = {
    errores: {id: req.params.id,
              error_msg: req.params.eror_mes
              },
  };
  
  res.render('error404', data);
});

router.post('/addComentario/:id', (req, res) => {
    const id = parseInt(req.params.id)
  const ComentarioNuevo = req.body.ComentarioNuevo;
  preguntasService.agregarComentario(id, ComentarioNuevo);
  res.send(`-${ComentarioNuevo}-`)

  // Puedes redirigir a la página de detalles o hacer algo más aquí
  // res.redirect(`/detalle/${newPregunta.id}`); -${dificultad}-  const dificultad = req.body.dificultad;
});
router.post('/addPregunta', (req, res) => {
  const { pregunta, respuesta, imagenPregunta, imagenRespuesta, tema, dificultad, comentarios } = req.body;

  // Llamar al servicio de preguntas para agregar la pregunta
  const addPregunta = preguntasService.addPregunta(imagenPregunta, imagenRespuesta, pregunta, respuesta, tema, dificultad, comentarios);
  if(addPregunta){
    res.redirect("/")
  } else{
    res.status(404).redirect(`/error/nuevaPregunta/No se pudo agregar la nueva pregunta`)  }
  // Puedes redirigir a la página de detalles o hacer algo más aquí
  // res.redirect(`/detalle/${newPregunta.id}`); 
});

router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
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
  const id = parseInt(req.params.id);
  const pregunta = preguntasService.getPreguntaById(id);
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
