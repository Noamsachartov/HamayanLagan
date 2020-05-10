// nav bar collapse closer
function closer(){
    var x= document.getElementById("btoggler");
    x.click();
    };
function toggler() {
    var imglogo = document.getElementById("logo-ani");
    var hrabout = document.getElementById("hr-about");
    imglogo.classList.add("logo-about");
    hrabout.classList.add("hr-about-animation");
}
// smoth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function contacttoggler() {
    var hr1 = document.getElementById("hr-cont");
    hr1.classList.add("hr-contact");
}

function toggleTitle1(){
    var Discount_btn= document.getElementById("home-tab");
    var New_btn= document.getElementById("profile-tab");
    Discount_btn.classList.add("toggle-Weight");
    New_btn.classList.remove("toggle-Weight");
}

function toggleTitle2(){
    var Discount_btn= document.getElementById("home-tab");
    var New_btn= document.getElementById("profile-tab");
    New_btn.classList.add("toggle-Weight");
    Discount_btn.classList.remove("toggle-Weight");
}

function remove_catalog1(){
    var catalog1 = document.getElementById("catalog1");
    var catalog2 = document.getElementById("catalog2")
    var btn_cat1 = document.getElementById("btnToggleCatalog1");
    var btn_cat2 = document.getElementById("btnToggleCatalog2");
    catalog1.classList.remove("togglerBtnCatalog");
    catalog2.classList.add("togglerBtnCatalog");
    btn_cat1.classList.add("togglerBtnCatalog")
    btn_cat2.classList.remove("togglerBtnCatalog");
}

function remove_catalog2(){
    var catalog1 = document.getElementById("catalog1");
    var catalog2 = document.getElementById("catalog2")
    var btn_cat1 = document.getElementById("btnToggleCatalog1");
    var btn_cat2 = document.getElementById("btnToggleCatalog2");
    catalog1.classList.add("togglerBtnCatalog");
    catalog2.classList.remove("togglerBtnCatalog");
    btn_cat1.classList.remove("togglerBtnCatalog")
    btn_cat2.classList.add("togglerBtnCatalog");
} 

// change position of dropdown when scroll
function changePositionDrop(){
    var btn = document.getElementById("dropposition");
    btn.classList.add("btnpos");
    btn.classList.remove("btnbeforeafterpos");

}
function removechangepos(){
    var btn = document.getElementById("dropposition");
    btn.classList.remove("btnpos");
    btn.classList.add("btnbeforeafterpos");
}

// Fix the functullity of catalog dropdown, active issue.
$('.dropdown-menu a').click(function (e) {
e.preventDefault();
var currentActive = $(this).closest(".dropdown-menu").find('.active');
currentActive.removeClass('active');
});

