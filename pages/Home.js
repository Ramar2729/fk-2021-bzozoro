function createHomePage () {
    var homePage = `<div id="homeContainer"></div>`;
    document.getElementById('main').innerHTML = homePage;
    var homeCtn = document.getElementById('homeContainer');
    homeCtn.innerHTML += '<h1>Hello, welcome to frond end awards 2021</h1>'
    homeCtn.innerHTML += `<div id='slide-container'></div>`
    createSlide3(document.getElementById("slide-container"));
}