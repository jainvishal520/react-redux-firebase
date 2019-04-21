// const createProject = (project) => {
//     return {
//         type: 'ADD_PROJECT',
//         project
//     }
// }

export const createProject = (project) => {
    return (dispatch, getState) => {
        //pausing the dispatch
        //make async call to database
        //carry on with dispatch as normal
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}
