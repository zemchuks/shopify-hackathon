document.addEventListener('DOMContentLoaded', function() {
    const nameCase = document.querySelector('.name-case');
    const dropdownPopup = document.querySelector('.dropdown-popup');
    const bellCase = document.querySelector('.bell-case');
    const notifPopup = document.querySelector('.notif-popup');

    const toggleDropdownPopup = () => {
        dropdownPopup.classList.toggle('active');
    }

    const toggleNotifPopup = () => {
        notifPopup.classList.toggle('show');
    }

    nameCase.addEventListener('click', function(event) {
        toggleDropdownPopup();
        notifPopup.classList.remove('show');
        event.stopPropagation();
    });

    bellCase.addEventListener('click', function(event) {
        toggleNotifPopup();
        dropdownPopup.classList.remove('active');
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        const clickedElement = event.target;

        if (
            !clickedElement.closest('.name-case') &&
            !clickedElement.closest('.dropdown-popup') &&
            !clickedElement.closest('.bell-case') &&
            !clickedElement.closest('.notif-popup')
        ) {
            dropdownPopup.classList.remove('active');
            notifPopup.classList.remove('show');
        }
    });
});

// ARRoW TOGGLE FUNCTION * 
document.addEventListener('DOMContentLoaded', function() {
    const upArrow = document.querySelector('.up-arrow');
    const upArrowIcon = document.querySelector('.up-arrow-icon');
    const contentDiv = document.querySelector('.content-div');
    const taskContents = Array.from(document.querySelectorAll('.task-content'));

    let isCollapsed = false;

    upArrow.addEventListener('click', function() {
        isCollapsed = !isCollapsed;

        if (isCollapsed) {
            upArrowIcon.src = 'https://crushingit.tech/hackathon-assets/icon-arrow-down.svg';
            taskContents.forEach(taskContent => {
                if (!taskContent.nextElementSibling || !taskContent.nextElementSibling.classList.contains('headline')) {
                    taskContent.style.maxHeight = '0';
                    taskContent.style.paddingTop = '0';
                    taskContent.style.paddingBottom = '0';
                    taskContent.style.marginTop = '0';
                    taskContent.style.overflow = 'hidden';
                }
            });
        } else {
            upArrowIcon.src = 'https://crushingit.tech/hackathon-assets/icon-arrow-up.svg';
            taskContents.forEach(taskContent => {
                taskContent.style.maxHeight = '1000px'; 
                taskContent.style.paddingTop = '10px'; 
                taskContent.style.paddingBottom = '10px'; 
                taskContent.style.overflow = 'visible';
            });
        }
    });
});

// ***********************INCREASE LEVEL FUNCTION************
function increaseAndDecreaseCompletionLevel() {
    const circleDivs = document.querySelectorAll('.circle-div');
    let checkedCount = 0;

    circleDivs.forEach(circle => {
        if (circle.classList.contains('checked')) {
            checkedCount++;
        }
    });

    completedTasks = checkedCount;

    const completeLevel = document.querySelector('.complete-level');
    completeLevel.textContent = `${completedTasks} / 5 Completed`;

    const progressFilled = document.querySelector('.progress-filled');
    const progressUnfilled = document.querySelector('.progress-unfilled');
    const progressWidth = (completedTasks / 5) * 100; 
    progressFilled.style.width = `${progressWidth}%`;
    progressUnfilled.style.width = `${100 - progressWidth}%`;
}



const cancelSvg = document.querySelector('.cancel-svg');
const planDiv = document.querySelector('.plan-div');
const invisible = document.querySelector('.invisibleClass');

cancelSvg.addEventListener('click', () => {
    planDiv.style.display = 'none';
    invisible.classList.toggle('visible'); 
});


    function toggleCheckmark(element) {
        element.classList.toggle('checked');

    }


  
    //****************function to toggle each step and close the previous one */ 
    document.addEventListener('DOMContentLoaded', function() {
        const taskContents = document.querySelectorAll('.task-content');
    
        function collapseAllExcept(clickedDiv) {
            taskContents.forEach((taskContent) => {
                const secondTask = taskContent.querySelector('.second-task');
                if (taskContent !== clickedDiv.parentElement) {
                    secondTask.style.display = 'none';
                    taskContent.classList.add('no-bg-color');
                }
            });
        }
    
        function toggleContentVisibility(clickedDiv) {
            const parentTaskContent = clickedDiv.closest('.task-content');
            const secondTask = parentTaskContent.querySelector('.second-task');
            const allTaskContents = Array.from(taskContents);
            const currentIndex = allTaskContents.indexOf(parentTaskContent);
    
            collapseAllExcept(clickedDiv);
    
            secondTask.style.display = secondTask.style.display === 'none' ? 'flex' : 'none';
    
            if (secondTask.style.display === 'none') {
                clickedDiv.parentElement.classList.add('no-bg-color'); 
            } else {
                clickedDiv.parentElement.classList.remove('no-bg-color');
            }
    
            if (currentIndex !== allTaskContents.length - 1 && secondTask.style.display === 'none') {
                const nextTaskContent = allTaskContents[currentIndex + 1];
                const nextSecondTask = nextTaskContent.querySelector('.second-task');
                nextSecondTask.style.display = 'flex';
                nextTaskContent.classList.remove('no-bg-color');
            }
        }
    
        collapseAllExcept(taskContents[0].querySelector('.first-task'));
    
        taskContents.forEach((taskContent) => {
            const firstTask = taskContent.querySelector('.first-task');
            const circleDiv = taskContent.querySelector('.circle-div');
    
            firstTask.addEventListener('click', function() {
                toggleContentVisibility(this);
            });
    
            circleDiv.addEventListener('click', function() {
                toggleContentVisibility(this);
            });
        });
    });
    
    