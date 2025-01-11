SELECT employee.first_name, employee.last_name,
FROM employee
LEFT JOIN role.title AS role 
FROM role
ON role.id = employee.id
depatment.name
FROM department
LEFT JOIN department.name AS department
ON department.id = role.id 
ORDER BY employee.id;

