document.addEventListener('DOMContentLoaded', function() {
    const nameCase = document.querySelector('.name-case');
    const dropdownPopup = document.querySelector('.dropdown-popup');
    const bellCase = document.querySelector('.bell-case');
    const notifPopup = document.querySelector('.notif-popup');

    function toggleDropdownPopup() {
        dropdownPopup.classList.toggle('active');
    }

    function toggleNotifPopup() {
        notifPopup.classList.toggle('show');
    }

    nameCase.addEventListener('click', function(event) {
        toggleDropdownPopup();
        // Hide notification popup when dropdown is clicked
        notifPopup.classList.remove('show');
        event.stopPropagation(); // Prevents the click event from propagating further
    });

    bellCase.addEventListener('click', function(event) {
        toggleNotifPopup();
        // Hide dropdown popup when notification bell is clicked
        dropdownPopup.classList.remove('active');
        event.stopPropagation(); // Prevents the click event from propagating further
    });

    // Adding a click event listener to the document
    document.addEventListener('click', function(event) {
        const clickedElement = event.target;

        // Check if the clicked element is not within the specified elements
        if (
            !clickedElement.closest('.name-case') &&
            !clickedElement.closest('.dropdown-popup') &&
            !clickedElement.closest('.bell-case') &&
            !clickedElement.closest('.notif-popup')
        ) {
            // Hide the popups if they are currently active
            dropdownPopup.classList.remove('active');
            notifPopup.classList.remove('show');
        }
    });
});

// AROOW TOGGLE FUNCTION * 
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
                taskContent.style.maxHeight = '1000px'; // Adjust this value as needed
                taskContent.style.paddingTop = '10px'; // Adjust this value as needed
                taskContent.style.paddingBottom = '10px'; // Adjust this value as needed
                taskContent.style.overflow = 'visible';
            });
        }
    });
});




const cancelSvg = document.querySelector('.cancel-svg');
const planDiv = document.querySelector('.plan-div');

    cancelSvg.addEventListener('click', function() {
        planDiv.style.display = 'none';
    });

    function toggleCheckmark(element) {
        element.classList.toggle('checked');
    }


    // function to collase and expand task
    document.addEventListener('DOMContentLoaded', function() {
        const taskContents = document.querySelectorAll('.task-content');
    
        function collapseAllExcept(clickedDiv) {
            taskContents.forEach((taskContent, index) => {
                if (index !== 0 && taskContent !== clickedDiv.parentElement) {
                    const secondTask = taskContent.querySelector('.second-task');
                    secondTask.style.display = 'none';
                    taskContent.classList.add('no-bg-color');
                }
            });
        }
    
        // Call the function to collapse all except the first initially
        collapseAllExcept(taskContents[0]);
    
        function toggleContentVisibility(clickedDiv) {
            const secondTask = clickedDiv.nextElementSibling;
    
            collapseAllExcept(clickedDiv);
    
            // Toggle the display property of the second-task div
            secondTask.style.display = secondTask.style.display === 'none' ? 'flex' : 'none';
    
            // Toggle the class to remove or reapply background color
            if (secondTask.style.display === 'none') {
                clickedDiv.parentElement.classList.add('no-bg-color');
            } else {
                clickedDiv.parentElement.classList.remove('no-bg-color');
            }
        }
    
        taskContents.forEach((taskContent) => {
            const firstTask = taskContent.querySelector('.first-task');
    
            firstTask.addEventListener('click', function() {
                toggleContentVisibility(this);
            });
        });
    });
    
 
    // document.addEventListener('DOMContentLoaded', function() {
    //     const taskContents = document.querySelectorAll('.task-content');
    
    //     function collapseAllExcept(clickedDiv) {
    //         taskContents.forEach((taskContent, index) => {
    //             const secondTask = taskContent.querySelector('.second-task');
    //             if (index !== 0 && taskContent !== clickedDiv.parentElement) {
    //                 secondTask.style.display = 'none';
    //                 taskContent.style.background = 'none'; // Reset the background color
    //             }
    //         });
    //     }
    //     // Call the function to collapse all except the first initially
    //     collapseAllExcept(taskContents[0]);
    
    //     // Function to toggle visibility of second-task divs on click
    //     function toggleContentVisibility(clickedDiv) {
    //         const secondTask = clickedDiv.nextElementSibling; // Get the sibling with class .second-task
    
    //         collapseAllExcept(clickedDiv);
    
    //         // Toggle the display property of the second-task div
    //         secondTask.style.display = secondTask.style.display === 'none' ? 'block' : 'none';
    //     }
    
    //     // Add click event listeners to each first-task div
    //     taskContents.forEach((taskContent) => {
    //         const firstTask = taskContent.querySelector('.first-task');
    
    //         firstTask.addEventListener('click', function() {
    //             toggleContentVisibility(this);
    //         });
    //     });
    // });
    
