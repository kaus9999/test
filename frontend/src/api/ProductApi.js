export const post = (hostname, data) => {
    return fetch(`http://${hostname}/api/product`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export const findAll = (hostname) => {
    return fetch(`http://${hostname}/api/product`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
    }).then(response => response.json());
}