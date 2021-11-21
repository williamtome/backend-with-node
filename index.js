const express = require('express')
const app = express()
const port = 3001

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')
const vendorsRouter = require('./routes/vendors')

/*app.use((req, res, next) => {
  console.log("passou por aqui.");
  res.send('não chama nada mais.')
});*/
app.use('/', indexRouter)
app.use('/clients', clientsRouter)
app.use('/vendors', vendorsRouter)

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
