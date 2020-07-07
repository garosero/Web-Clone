const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));

/*
 classList-> DOM을 다루는 클래스.
 해당 element에 클래스를 선언-추가하여 원하는 이벤트를 실행시키도록.
 element.className으로 클래스를 지정하면 다른 클래스 사용하지 못하므로
 classList로 여러개의 클래스를 추가하여 사용


*/