import sendRequest from "./send-request";
const BASE_URL = '/api/movies';

export async function moviesIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createMovieRequest(movieData){
    return sendRequest(BASE_URL, "POST", movieData)
}

export async function getMovieRequest(movieId){
    return sendRequest(`${BASE_URL}/${movieId}`) 
}

export async function deleteMovieRequest(movieId){
    return sendRequest(`${BASE_URL}/${movieId}`, "DELETE")
}

export async function updateMovieRequest(movieId, movieData){
    return sendRequest(`${BASE_URL}/${movieId}`, "PUT", movieData)
}