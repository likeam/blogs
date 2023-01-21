import jsonPlaceholder from "../api/jsonPlaceholder";


export const fetchPost = () =>  async dispath => {
        const response = await jsonPlaceholder.get('/posts')

    dispath({type: 'FETCH_POSTS', payload: response})
    }


