
metrics= require('./metrics')
express = require('express')
app = express()


app.set('port', 1342)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get(
  '/', 
  (req, res) => res.render('home.ejs')
)

app.get('/metrics.json', (req, res) => {
    metrics.get((err, data) => {
      if(err) throw err
      res.status(200).json(data)
    })
  })
  
app.get(
  '/hello/:name', 
  (req, res) => res.render('hello.ejs', {name: req.params.name})
)
  
app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)
