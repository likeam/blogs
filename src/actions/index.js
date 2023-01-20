import jsonPlaceholder from "../api/jsonPlaceholder";


export const fetchPost = () => {

    const response =  jsonPlaceholder.get('/posts')

    return{
        type: 'FETCH_POSTS',  
        payload: response
   
    };
};

