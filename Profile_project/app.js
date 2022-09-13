new hoverEffect({
    parent: document.querySelector('.img'),
    image1: './footer_bg_08.png',
    image2: './footer_bg_09.png',
    displacementImage:'./displacementImage2.jpg'
})  

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))