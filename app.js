let btn = document.getElementById("apod-btn");
let apodImage = document.getElementById("apod-image");
let desc = document.getElementById("description");

btn.addEventListener('click', ()=>{
    sendApiRequest();
});

async function sendApiRequest(){
    let API_KEY = 'bdEGU1QkUUkeD4ghVmYsgojABstcMOQ7GhsT7OCQ';
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    let data = await response.json()
    useApiData(data);
    console.log(data);
}

function useApiData(data){
    apodImage.innerHTML = `<img src="${data.url}" alt="NASA APOD" >`;
    desc.textContent = `${data.explanation}`
}