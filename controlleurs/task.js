function get_all_tasks(res, res){
    client.query('select * from project_task', (err, val)=>{
        if(!err){
            client.end;
            return res.status(200).json(val.rows)
        }else{
            client.end;
            return res.status(400).json(err.message)
        }
    });
}

exports.get_task = get_all_tasks;