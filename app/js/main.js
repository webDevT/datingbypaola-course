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



function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


const tabIndex = getQueryParam('tab');

if (tabIndex !== null) {
    const index = parseInt(tabIndex, 10);
    if (!isNaN(index) && index >= 0 && index < tabs.length) {
        switchTab(index);
    }
}



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

const nextLessonButton = document.querySelector('.next-lesson-wrapper');

if (nextLessonButton) {
    nextLessonButton.addEventListener('click', function() {
        scrollToTop();
    });
}

//start progres element 
window.onload = function() {
    const progressElement = document.getElementById('progress');
    const completedLessons = parseInt(progressElement.getAttribute('data-completed'));
    const totalLessons = parseInt(progressElement.getAttribute('data-total'));

    updateProgressBar(completedLessons, totalLessons);
};

function updateProgressBar(completedLessons, totalLessons) {
    const progressBar = document.getElementById('progress-bar');
    const lessonsCompletedText = document.getElementById('lessons-completed');
    const totalLessonsText = document.getElementById('total-lessons');

    let progressPercentage = (completedLessons / totalLessons) * 100;
    progressBar.style.width = progressPercentage + '%';

    lessonsCompletedText.textContent = completedLessons;
    totalLessonsText.textContent = totalLessons;
}

//end progres element