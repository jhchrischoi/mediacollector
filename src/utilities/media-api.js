import sendRequest from "./send-request";
const BASE_URL = '/api/media';

export async function mediaIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createMediaRequest(mediaData){
    return sendRequest(BASE_URL, "POST", mediaData)
}

export async function getMediaRequest(mediaId){
    return sendRequest(`${BASE_URL}/${mediaId}`) 
}

export async function deleteMediaRequest(mediaId){
    return sendRequest(`${BASE_URL}/${mediaId}`, "DELETE")
}

export async function updateMediaRequest(mediaId, mediaData){
    return sendRequest(`${BASE_URL}/${mediaId}`, "PUT", mediaData)
}