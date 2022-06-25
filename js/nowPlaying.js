let result;
export async function getApi() {
    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0cd92cbd67230c972df7a07a3cd42ac5&language=en-US&page=1');
    let objectApi = await response.json();
    let result = objectApi.results;
    console.log(result);
}
export function displayNowPlaying() {
    // let imageCard = $('.cards .image-card img');
    // let captionCard = $('.cards .caption img')
    let x = $('.cards .caption img')
    let pathImg = result[0].backdrop_path
    console.log(pathImg);
    // $('#cardMovie .row').html(``)
}
