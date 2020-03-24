const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
/* Métodos HTTP:
 GET: Buscar uma Informação do BACK-END
 POST: Criar uma Informação no Back-END
 PUT: Alterar uma Informação no Back-End
 DELETE: Deletar uma Informação no Back-end
 */

 /*Tipos de Parametros:
 Query Params: Parametros nomeados na rota apos o simbolo da interrogação geralmenta
 servem para filtro, navegação.
 Route Params: Parâmetros utilizados para identificar recursos.
 Request Body:Utilizado para Criar ou alterar Recursos.
 */
/*
    SQL: MySQL, SQLite, PostgreSql, Oracle, SQL Server.
    NOSQL: MongoDB, CouchDB.
*/
/*
    DRIVER: Select * FROM users
    Query Builder: table('users').select(*).where
*/
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333)