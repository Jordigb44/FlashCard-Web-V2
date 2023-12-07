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

router.post('/add', (req, res) => {
  const pregunta = req.body.pregunta;
  const newPregunta = preguntasService.addPregunta(pregunta);

  // Puedes redirigir a la página de detalles o hacer algo más aquí
  res.redirect(`/detalle/${newPregunta.id}`);
});

router.post('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pregunta = req.body.pregunta;
  const updatedPregunta = preguntasService.updatePregunta(id, pregunta);

  if (updatedPregunta) {
    res.redirect(`/detalle/${id}`);
  } else {
    res.status(404).redirect(`/error/${id}/Elemento no encontrado`);
  }
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

export default router;
