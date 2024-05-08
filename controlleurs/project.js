function get_all_project(req, res){
    client.query('select * from project_project', (err, val)=>{
        if(!err){
            client.end;
            return res.status(200).json(val.rows)
        }else{
            client.end;
            return res.status(400).json(err.message)
        }
    });
}

exports.get_projects = get_all_project;