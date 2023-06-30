let mysql = require('../../config/connection').pool
let queryGet = "SELECT e.employee_id,e.first_name,e.last_name,e.email,e.phone_number,e.hire_date,e.job_id,e.salary,e.department_id,e.created_at,e.update_at,d.name AS 'departmentName' FROM `employee`AS e,`department` AS d  WHERE e.department_id = d.dept_id ORDER BY(employee_id) DESC ";
let queryGetdept = "SELECT * FROM department";
let moment = require('moment')

exports.getEmpCount = (req,res) => {
    let final = 'SELECT COUNT(*) FROM employee'
    mysql.query((final),(err,result)=>{
        if(err){
           res.send({status:true,data:err}) 
       }else{
        let finalres = result.length ? result[result.length - 1]['COUNT(*)'] : 0;
        res.send({status:true,data:finalres})
       }
    })    
}

exports.getEmp = (req,res) => {
    let data = req.body;
    let final = queryGet+'LIMIT'+' '+data.limit+' '+'OFFSET'+' '+data.offset;
     mysql.query((final),(err,result)=>{
         if(err){
            res.send({status:true,data:err}) 
        }else{
         res.send({status:true,data:result})
        }
     })
}

exports.getdepartment = (req,res) =>{
    mysql.query((queryGetdept),(err,result)=>{
        if(err){
           res.send({status:true,data:err}) 
       }else{
        res.send({status:true,data:result})
       }
    })   
}
exports.saveEmp = (req,res) =>{
   let query = `INSERT INTO employee (first_name,last_name,email,phone_number,hire_date,job_id,salary,department_id,created_at,update_at) VALUES('${req.body.first_name}','${req.body.last_name}','${req.body.email}',${req.body.phone_number},'${moment(req.body.hire_date).format('YYYY-MM-DD')}','${req.body.job_id}',${req.body.salary},${req.body.department_id},'${moment(new Date()).format('YYYY-MM-DD')}','${moment(new Date()).format('YYYY-MM-DD')}')`;
    mysql.query((query),(err,result)=>{
        if(err){
           res.send({status:true,data:err}) 
       }else{
        res.send({status:true,data:result})
       }
    })   
}

exports.updateEmp = (req,res) =>{
    let qry = `UPDATE employee SET first_name = '${req.body.first_name}', last_name = '${req.body.last_name}', email = '${req.body.email}', phone_number = ${req.body.phone_number},hire_date = '${moment(req.body.hire_date).format('YYYY-MM-DD')}', job_id = '${req.body.job_id}', salary = ${req.body.salary}, department_id = ${req.body.department_id}  WHERE employee_id = ${req.body.employee_id}`;
    mysql.query((qry),(err,result)=>{
        if(err){
           res.send({status:true,data:err}) 
       }else{
        res.send({status:true,data:result})
       }
    })
}

exports.deleteEmp = (req,res) =>{
    let qry = `DELETE FROM employee WHERE employee_id = ${req.body.employee_id}`;
    mysql.query((qry),(err,result)=>{
        if(err){
           res.send({status:true,data:err}) 
       }else{
        res.send({status:true,data:result})
       }
    })
}
