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

