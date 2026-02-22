const applicationContainer = document.getElementById('application-lists');
const interviewLists = document.getElementById('interview-lists');
const rejectedLists = document.getElementById('rejected-lists');
const interviewCounter = document.getElementById('interview-counter');
const rejectCounter = document.getElementById('rejection-counter');

insertCardElements(applications,applicationContainer);

//Update Interview Tab
updateInterviewCounter(applications);

//Update rejected Tab
updateRejectedCounter(applications);

//Update job count
updateTotalJobCount(applications);


document.getElementById('interview')
    .addEventListener('click', function() {
        interviewCounter.classList.remove('hidden')
        rejectCounter.classList.add('hidden')
    })
document.getElementById('reject')
    .addEventListener('click', function() {
        interviewCounter.classList.add('hidden')
        rejectCounter.classList.remove('hidden')
    })
document.getElementById('all')
    .addEventListener('click', function() {
        interviewCounter.classList.add('hidden')
        rejectCounter.classList.add('hidden')
    })


//Delete Applications functionality
const applicationModule = document.getElementById('application-module');

applicationModule .addEventListener('click', function(event) {
    const deleteBtn = event.target.closest('.deleteJob');
    const interviewBtn = event.target.closest('.interviewBtn');
    const rejectBtn = event.target.closest('.rejectBtn');

    
    if(deleteBtn) { //Handling Delete function
        const elementId = Number(deleteBtn.dataset.target);

        const elementIndex = applications.findIndex(application => application.id === elementId)
        
        //Deleteing specific array element
        if(elementIndex !== -1 ) {
            applications.splice(elementIndex, 1);
        }

        updateTotalJobCount(applications);  

        updateApplicationListing();

        if(applications.length === 0) {
            applicationContainer.innerHTML = noApplicationsMsg;
        } 
    }
    else if(interviewBtn) { //Handling Interview click event
        const targetApp = Number(interviewBtn.closest('.card').dataset.id);
    
        //updating status
        const findId = applications.find(data => data.id === targetApp);
        if(findId) {
            findId.status = 'interview';
        }

        updateApplicationListing();
    }
    else if(rejectBtn) {//Handling rejected click event
        const targetApp = Number(rejectBtn.closest('.card').dataset.id);
    
        //updating status
        const findId = applications.find(data => data.id === targetApp);
        if(findId) {
            findId.status = 'rejected';
        }

        updateApplicationListing();
    }
})