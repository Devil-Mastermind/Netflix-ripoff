const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

option1.onmouseover = function() {
    icon1.style.color = "white";
    text1.style.color = "white";
}
option1.onmouseout = function() {
    icon1.style.color = "#999";
    text1.style.color = "#999";
}

option2.onmouseover = function() {
    icon2.style.color = "white";
    text2.style.color = "white";
}
option2.onmouseout = function() {
    icon2.style.color = "#999";
    text2.style.color = "#999";
}

option3.onmouseover = function() {
    icon3.style.color = "white";
    text3.style.color = "white";
}
option3.onmouseout = function() {
    icon3.style.color = "#999";
    text3.style.color = "#999";
}


const tabItem1 = document.getElementById("tab1");
const tabItem2 = document.getElementById("tab2");
const tabItem3 = document.getElementById("tab3");

option1.addEventListener("click", selectTab1);
option2.addEventListener("click", selectTab2);
option3.addEventListener("click", selectTab3);

function selectTab1() {
    removeBorders();
    removeShow();

    option1.classList.add('option-active');
    tabItem1.classList.add('show');
}

function selectTab2() {
    removeBorders();
    removeShow();

    option2.classList.add('option-active');
    tabItem2.classList.add('show');
}
function selectTab3() {
    removeBorders();
    removeShow();

    option3.classList.add('option-active');
    tabItem3.classList.add('show');
}

function removeBorders(){
    option1.classList.remove('option-acitve');
    option2.classList.remove('option-acitve');
    option3.classList.remove('option-acitve');
}

function removeShow(){
    tabItem1.classList.remove('show');
    tabItem2.classList.remove('show');
    tabItem3.classList.remove('show');
}


// function selectedItem(e){
//     removeBorder();
// 	removeShow();

//     this.classList.add('option-active');
//     const tabContentItem = document.querySelector(`#${this.id}`);
//     tabContentItem.classList.add('show');

// }

// function removeBorder() {
// 	tabItems.forEach(item => {
// 		item.classList.remove('option-active');
// 	});
// }

// function removeShow() {
// 	tabContentItems.forEach(item => {
// 		item.classList.remove('show');
// 	});
// }


// tabItem1.addEventListener('click', selectedItem);
// tabItem2.addEventListener('click', selectedItem);
// tabItem3.addEventListener('click', selectedItem);