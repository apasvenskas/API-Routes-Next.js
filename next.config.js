const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            // can use the following to only add data to development server
            // will need to adjust the mongodb server in the contact file as well. 
            env:{
                mongodb_username: 'audrius13toto',
                password: 'RJxYjbompAOnYiO5',
                mongodb_clustername: 'cluster2',
            } ,
        };
    }
    return {
        env:{
            mongodb_username: 'audrius13toto',
            password: 'RJxYjbompAOnYiO5',
            mongodb_clustername: 'cluster2',
            // might be an issue
            mongodb_database: 'NEXT BLOG',
        },
    };
}; 
