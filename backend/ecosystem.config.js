module.exports={
    apps:[
        {
            name:"inventory",
            script:"npm",
            args:"run dev",
            env:{
                NODE_ENV:"develoment",
                ENV_VAR1:"environment-variable"
            }
        }
    ]
}