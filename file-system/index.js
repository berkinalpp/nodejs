import {readFile,writeFile,appendFile,unlink} from 'fs'

writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
if(err) console.log(err) 
console.log('Employees verisi eklendi');
});

appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 2000}', 'utf8', (err) => {
    if(err) console.log(err) 
    console.log('Yeni employees verisi eklendi.');
    });

readFile('employees.json', 'utf8', (err,data) => {
    if(err) console.log(err)
    console.log(data)
})

unlink('employees.json', (err) => {
    if(err) console.log(err)
    console.log('Dosya başarıyla silindi ')
})