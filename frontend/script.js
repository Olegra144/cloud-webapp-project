async function sendRequest() {

    const name =
        document.getElementById("nameInput").value;

    const response = await fetch(
        `https://YOUR_BACKEND.azurewebsites.net/api/hello?name=${name}`
    );

    const data = await response.text();

    document.getElementById("result").innerText = data;
}
