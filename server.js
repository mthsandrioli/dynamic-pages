const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req, res) {
  const about = {
    avatar: "https://avatars2.githubusercontent.com/u/65318852?s=460&u=47d05c7f39969bca17c86ea2f44cea182f418f20&v=4",
    name: "Matheus Andrioli",
    role: "Desenvolvedor iniciante",
    discription: 'Focado nas melhores tecnologias Web e Mobile em <a href="https://javascript.com" target="_blank">JavaScript</a>',
    links: [
      {
      name: "GitHub",
      url: "https://github.com/mthsandrioli/"
      },
      {
      name: "Twitter",
      url: "https://twitter.com/mths_andrioli/"
      }, 
      {
      name: "Linkedin",
      url: "https://linkedin.com/"
      }
    ]
  }

  return res.render('about', { about })
})

server.get('/topics', function(req, res) {
  return res.render('topics', { items: videos})
})

server.listen(5000, function() {
  console.log('server is running')
})