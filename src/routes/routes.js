const routes = (app) => {
  app
    .route('/contact')
    .get((req, res) => res.send('GET REQUEST 200'))
    .post((req, res) => res.send('POST REQUEST 200'))

  app
    .route('/contact/contactID')
    .put((req, res) => res.send('PUT request 200'))
    .delete((req, res) => res.send('DELETE 200'))
}

export default routes