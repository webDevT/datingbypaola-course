
const tabs = document.querySelectorAll('.tab');
const tabItems = document.querySelectorAll('.tab_item');


function switchTab(index) {
    tabs.forEach(function(t) {
        t.classList.remove('active');
    });

    tabs[index].classList.add('active');


    tabItems.forEach(function(item) {
        item.style.display = 'none';
    });

    tabItems[index].style.display = 'block';
}


tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        switchTab(index);
    });
});


tabItems.forEach(function(item, index) {
    const nextLessonWrapper = item.querySelector('.next-lesson-wrapper');
    
    if (nextLessonWrapper) {
        nextLessonWrapper.addEventListener('click', function() {
            if (index + 1 < tabs.length) {
                switchTab(index + 1);
            }
        });
    }
});


switchTab(0);

const buttons = document.querySelectorAll('.lesson-status-btn');
const lessonWrappers = document.querySelectorAll('.next-lesson-wrapper');

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {

        lessonWrappers[index].classList.toggle('active');
        button.classList.toggle('active');
        

        if (button.textContent.trim() === 'Mark As Complete') {
            button.textContent = 'Completed';
        } else {
            button.textContent = 'Mark As Complete';
        }
    });
});


// Функция для получения значения параметра из URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Получаем номер таба из URL
const tabIndex = getQueryParam('tab');

if (tabIndex !== null) {
    const index = parseInt(tabIndex, 10);
    if (!isNaN(index) && index >= 0 && index < tabs.length) {
        switchTab(index);
    }
}
