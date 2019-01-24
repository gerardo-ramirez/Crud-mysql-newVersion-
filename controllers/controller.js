
const controller ={}
const myConnection = require('./../models/connection');
controller.list = (req,res)=>{
    myConnection.query('SELECT * FROM customer', (err,data)=>{
        if(err){
            console.log('error en controllers.js')
        }else{
            res.render('index.ejs',{
                data
            });
        }
    })

};
controller.agregar = (req,res)=>{
    const data = req.body;
    myConnection.query('INSERT INTO customer set ?',[data], (error,dato)=>{
        res.redirect('/')

    });
};

controller.borrar = (req,res)=>{
    const {id}= req.params;
    myConnection.query('DELETE FROM customer WHERE id = ?',[id], (err, dato)=>{
        res.redirect('/')
    })

};

controller.buscar = (req,res)=>{
    const {id}= req.params;
    myConnection.query('SELECT * FROM customer WHERE id = ?',[id],(err,conn)=>{
        res.render('cambio.ejs', {
            data:conn[0]
        })
    });
};
controller.update = (req,res)=>{
    const {id} = req.params;
    const dato = req.body;
    myConnection.query('UPDATE customer set ? WHERE id = ?',[dato, id], (err,dato)=>{
        res.redirect('/');
    });
}
module.exports = controller;