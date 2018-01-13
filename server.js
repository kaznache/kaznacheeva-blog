const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');
const app = express();
const db = require('./db');
const cors = require('cors');
const postsController = require('./controllers/posts');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', express.static(path.resolve(__dirname, 'public')));

/* Последние посты в виде массива объектов */
app.get('/api/posts', postsController.all);

/* Создаёт новый пост в блоге. Возвращает созданную запись с ​​ID */
app.post('/api/posts', postsController.create);

/* Выдаёт один пост из блога с данным ID */
app.get('/artists/:id', postsController.findById);

/* Обновление поста с данным ID */
// app.put('/artists/:id', postsController.update);

/* Удаляет единственный пост блога с данным ID. Возвращает этот пост */
app.delete('/artists/:id', postsController.delete);


db.connect('mongodb://localhost:27017/blogapi', (err) => {
  if (err) {
    return console.log(err);
  }
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
})