const urlApi= "https://randomuser.me/api/?results=50";

const fetchData =() =>fetch(urlApi).then(response=> response.json())

export {fetchData};