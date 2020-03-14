export const fetchDogBreeds = async () => {
    const resp = await fetch('https://dog.ceo/api/breeds/list/all')
    const breedsResultsMap = new Map()
    if (resp.ok) {
        const data = await resp.json()
        const breeds = data.message

        for (let breed of Object.keys(breeds)) {
            const imagesResp = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
            let images = []
            if (imagesResp.ok) {
                const imagesJson = await imagesResp.json()
                images = imagesJson.message
            }
            breedsResultsMap[breed] = { secondary: breeds[breed], images }
        }
    }
    return breedsResultsMap;
}

