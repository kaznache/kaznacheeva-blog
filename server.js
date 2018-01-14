const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');
const app = express();
const db = require('./db');
const cors = require('cors');
const postsController = require('./controllers/posts');

const uri = 'mongodb://user:q8RgfRH2aN19PwCj@clusterapi-shard-00-00-brazq.mongodb.net:27017,clusterapi-shard-00-01-brazq.mongodb.net:27017,clusterapi-shard-00-02-brazq.mongodb.net:27017/test?ssl=true&replicaSet=ClusterAPI-shard-0&authSource=admin'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', express.static(path.resolve(__dirname, 'public')));

/* Последние посты в виде массива объектов */
app.get('/api/posts', postsController.all);

/* Создаёт новый пост в блоге. Возвращает созданную запись с ​​ID */
app.post('/api/posts', postsController.create);

/* Выдаёт один пост из блога с данным ID */
app.get('/api/posts/:id', postsController.findById);

/* Обновление поста с данным ID */
// app.put('/api/posts/:id', postsController.update);

/* Удаляет единственный пост блога с данным ID. Возвращает этот пост */
app.delete('/api/posts/:id', postsController.delete);


db.connect(uri, (err) => {
  if (err) {
    return console.log(err);
  }
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
})