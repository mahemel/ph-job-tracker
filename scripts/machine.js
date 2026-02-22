//Create card components and insert
function insertCardElements(cardData,targetContainer) {
    let id = 0;
    let companyName = '';
    let position = '';
    let location = '';
    let type = '';
    let salary = '';
    let description = '';
    let status = '';
    
    targetContainer.innerHTML = '';

    cardData.forEach(function(data) {
        id = data.id;
        companyName = data.companyName;
        position = data.position;
        location = data.location;
        type = data.type;
        salary = data.salary;
        description = data.description;
        status = data.status;

        const card = document.createElement('div');
        card.classList.add('card', 'bg-white', 'border', 'border-stroke');
        card.dataset.id = id;

        let statusMsg = `<div class="badge h-9 rounded font-medium text-black bg-sky">NOT APPLIED</div>`;
        if(status === 'interview') {
            statusMsg = `<div class="badge h-9 rounded font-medium text-green/90 bg-green/50">INTERVIEW</div>`;
        }
        else if (status === 'rejected') {
            statusMsg = `<div class="badge h-9 rounded font-medium text-red/80 bg-red/50">REJECTED</div>`;
        }

        card.innerHTML = `
            <div class="card-body p-4 sm:p-6 gap-0 jobCard">
                <h2 class="card-title text-lg text-black font-semibold mb-1">${companyName}</h2>
                <p class="job-position text-gray text-base mb-5">${position}</p>

                <p class="text-gray text-sm mb-5">${location} • ${type} • ${salary}</p>

                <div class="job-card-status mb-2">
                    ${statusMsg}
                </div>

                <p class="text-darkGray text-sm mb-5">${description}</p>

                <div class="btn-grup flex gap-2">
                    <button class="interviewBtn btn border-green font-medium rounded text-green bg-white h-9 w-[100px]">INTERVIEW</button>
                    <button class="rejectBtn btn border-red font-medium rounded text-red bg-white h-9 w-[100px]">REJECTED</button>
                </div>

                <button type="button" class="btn btn-circle absolute top-4 sm:top-8 right-4 sm:right-6 deleteJob" data-target="${id}"><img src="assets/trash.svg" alt="Trash Icon"></button>
            </div>        
        `;
        targetContainer.appendChild(card)
    })
}

//Calcuate total jobs and insert data
function updateTotalJobCount(applist) {
    let totalJobs = applist.length;

    const totalJobsHolder = document.querySelectorAll('.total-job');
    totalJobsHolder.forEach(function(data) {
        data.textContent = totalJobs;
    });
}

const noApplicationsMsg = `
<div class="card bg-white border border-stroke text-center noItems">
    <div class="card-body p-6 gap-0 py-[60px] sm:py-[111px] text-center">
        <img class="w-[100px] mx-auto mb-5" src="assets/document.svg" alt="document icon">
        <h3 class="text-2xl text-black font-semibold mb-1">No jobs available</h3>
        <p class="text-base text-gray">Check back soon for new job opportunities</p>
    </div>
</div>
`;

//update interview status
function updateInterviewCounter(applications) {

    const filterApplications = applications.filter(data => data.status === 'interview');
    
    const allInterviewCount = document.querySelectorAll('.total-interview');

    allInterviewCount.forEach(function(data) {
        data.textContent = filterApplications.length
    })
    if(filterApplications.length === 0) {
        document.getElementById('interview-lists').innerHTML = noApplicationsMsg;
    } 
}

//update rejected status
function updateRejectedCounter(applications) {

    const filterApplications = applications.filter(data => data.status === 'rejected');

    const allRejectedCount = document.querySelectorAll('.total-rejected');

    allRejectedCount.forEach(function(data) {
        data.textContent = filterApplications.length
    })

    if(filterApplications.length === 0) {
        document.getElementById('rejected-lists').innerHTML = noApplicationsMsg;
    } 
}

function updateApplicationListing() {
    //inserting all the updated cards
    insertCardElements(applications, applicationContainer);

    //updating interview list
    const updatedInterviewList = applications.filter(data => data.status === 'interview');
    insertCardElements(updatedInterviewList,interviewLists);

    //updating rejected list
    const updatedRejectList = applications.filter(data => data.status === 'rejected');
    insertCardElements(updatedRejectList,rejectedLists);

    updateInterviewCounter(applications);  
    updateRejectedCounter(applications);  
}