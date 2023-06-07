import sendRequest from "./send-request";
const BASE_URL = '/api/collections';

export async function collectionsIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createCollectionRequest(collectionData){
    return sendRequest(BASE_URL, "POST", collectionData)
}

export async function getCollectionRequest(collectionId){
    return sendRequest(`${BASE_URL}/${collectionId}`) 
}

export async function deleteCollectionRequest(collectionId){
    return sendRequest(`${BASE_URL}/${collectionId}`, "DELETE")
}

export async function updateCollectionRequest(collectionId, collectionData){
    return sendRequest(`${BASE_URL}/${collectionId}`, "PUT", collectionData)
}

// request in the front end
export async function personalCollectionRequest(){
    return sendRequest(`${BASE_URL}?currentUser=true`)
}

//To create the post request
// need to know 2 things:
// Id of each one
export async function addVideoToCollection(collectionId, mediaId){
    return sendRequest(`${BASE_URL}/${collectionId}/add-video/${mediaId}`, "POST")
}