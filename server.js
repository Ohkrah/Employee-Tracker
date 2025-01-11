const { log } = require('console');
const express = require('express');

const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express(); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
    {
        user: 'postgres',
        password: 'BobRo$$0427',
        host: 'localhost',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db`)
    
)

pool.connect();

//add an employee 
app.post('/api/add-employee', ({ body }, res) => {
    const sql = 
'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

pool.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.json({
        message: 'success',
        data: body
    });
});
});

//remove an employee

app.delete('/api/employee/:id', (req,res) => {
    
})