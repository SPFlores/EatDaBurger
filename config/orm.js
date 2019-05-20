// const db = require('./connection.js')

// const printQuestionMarks = num => {
//   let arr = []

//   for (let i = 0; i < num; i++) {
//     arr.push('?')
//   }

//   return arr.toString()
// }

// const objToSql = ob => {
//   // column1=value, column2=value2,...
//   let arr = []

//   for (let key in ob) {
//     arr.push(key + '=' + ob[key])
//   }

//   return arr.toString()
// }

// // orm.all(milkshakes, () => {})

// let orm = {
//   all: function (tableInput, cb) {
//     let queryString = 'SELECT * FROM ' + tableInput + ';'
//     db.query(queryString, function (err, result) {
//       if (err) {
//         throw err
//       }
//       cb(result)
//     })
//   },
//   // vals is an array of values that we want to save to cols
//   // cols are the columns we want to insert the values into
//   create: function (table, cols, vals, cb) {
//     let queryString = 'INSERT INTO ' + table

//     queryString += ' ('
//     queryString += cols.toString()
//     queryString += ') '
//     queryString += 'VALUES ('
//     queryString += printQuestionMarks(vals.length)
//     queryString += ') '

//     console.log(queryString)

//     db.query(queryString, vals, function (err, result) {
//       if (err) {
//         throw err
//       }
//       cb(result)
//     })
//   },
//   // objColVals would be the columns and values that you want to update
//   // an example of objColVals would be {name: panther, sleepy: true}
//   update: function (table, objColVals, condition, cb) {
//     let queryString = 'UPDATE ' + table

//     queryString += ' SET '
//     queryString += objToSql(objColVals)
//     queryString += ' WHERE '
//     queryString += condition

//     console.log(queryString)
//     db.query(queryString, function (err, result) {
//       if (err) {
//         throw err
//       }
//       cb(result)
//     })
//   }
// }

// module.exports = orm
