const apikey = "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";
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector(".image-section");

const getImage = async () => {
    const option = {
        method: "POST",
        Headers:{
            "Authorization": `bearer ${apikey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: inputElement.value,
            n: 4,
            size: "1024x1024"
        })
    }
    try{
        const response = await fetch("https://api.openai.com/v1/images/generations", option);
        const data = await response.json()
        console.log(data);
        data.data.forEach(imageObject => {
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container")
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src",imageObject.url);
            imageContainer.append(imageElement);
            imageSection.append(imageContainer)
        })

    }catch (error){
        console.error(error)
    }
}



submitIcon.addEventListener('click',getImage);