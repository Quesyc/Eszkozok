var mysql = require('mysql');

class sql
{
    constructor()
    {
        this.connection = mysql.createConnection(
        {
            host    : 'localhost',
            user    : 'quesyc',
            password: 'quesyc',
            database: 'eszkozok'
        });
    }

    query(command)
    {
        return new Promise((resolve, reject) =>
        {
            this.connection.connect();

            this.connection.query(command, function (err, result)
            {
                if (err) { return reject(err); }
                resolve(result);
            });
            this.connection.end();
        });
    }
}

module.exports = sql;