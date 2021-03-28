import { addNewContact } from '../controllers/controller'

const routes = (app) => {
  app
    .route('/contact')
    .get(
      (req, res, next) => {
        // middleware
        console.log(`request from ${req.originalUrl}`)
        console.log(`request type ${req.method}`)
        next()
      },
      (req, res, next) => {
        res.send('GET REQUEST 200')
      }
    )
    .post(addNewContact)

  app
    .route('/contact/contactID')
    .put((req, res) => res.send('PUT request 200'))
    .delete((req, res) => res.send('DELETE 200'))
}

export default routes
