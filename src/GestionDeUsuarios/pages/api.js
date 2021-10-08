const callApi = async () => {
    const response = await fetch("http://localhost:3002/api/users");
    const data = await response.json();
    return data;
}

export default callApi;