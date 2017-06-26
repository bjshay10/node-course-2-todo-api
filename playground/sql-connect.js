const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const expect = require('expect');
const sql = require('mssql');

const config = {
    user: 'oampurmi',
    password: 'acohayty',
    server: 'bssqls11.mesa.k12.co.us',
    database: 'umra',
     options: {encrypt: false}
};

sql.connect(config).then( () => {
    return sql.query`select * from lanaccounts `
    // return sql.query`INSERT INTO lanaccounts (id, full_name, username, password) VALUES ('00002','BJ TEST 2','bjshay102', 'bjshay102')`;
}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

sql.on('error', err => {
    console.log(err);
});

// const connection = new Connection(config);
// connection.on('connect', (err) => {
//     if (err) {
//          return console.log('Unable to connect', err);
//     }
//     console.log('Connected');

//     executeStatement();
//     insertStatement(); 
// });

// executeStatement = () => {
//     console.log('query statment');
//     var sql = 'select * from lanaccounts';

//     var request = new Request(sql, (err,rowCount) => {
//         if (err) {
//             return console.log(err);
//         } else {
//             console.log(rowCount);
//         }
//     });

//     connection.execSql(request);
//     request.on('done', () => {
//         console.log('test done');
//     });

// };

// insertStatement = () => {
//     var sql = `INSERT INTO lanaccounts (id, full_name, username, password) VALUES ('00001','BJ TEST','bjshay10', 'bjshay10')`;

//     var request = new Request(sql, (err) => {
//         if(err) {
//            return console.log(err);
//         } else {
//             console.log(sql);
//         }
//     });

//     connection.execSql(request);
// };



// const connection = new sql.Connection(config, function(err) {
//     if (err) {
//         return console.log('Unable to connect: ', err);
//     } else {
//         console.log('Connected');
//     }
// });

