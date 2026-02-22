const applications = [
    {
        id: 1,
        companyName: 'Mobile First Corp',
        position: 'React Native Developer',
        location: 'Remote',
        type: 'Full-time',
        salary: '$130,000 - $175,000',
        description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
        status: '',
    },
    {
        id: 2,
        companyName: 'WebFlow Agency',
        position: 'Web Designer & Developer',
        location: 'Los Angeles, CA',
        type: 'Part-time',
        salary: '$80,000 - $120,000',
        description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
        status: '',
    },
    {
        id: 3,
        companyName: 'DataViz Solutions',
        position: 'Data Visualization Specialist',
        location: 'Boston, MA',
        type: 'Full-time',
        salary: '$125,000 - $165,000',
        description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
        status: '',
    },
    {
        id: 4,
        companyName: 'CloudFirst Inc',
        position: 'Backend Developer',
        location: 'Seattle, WA',
        type: 'Full-time',
        salary: '$140,000 - $190,000',
        description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.',
        status: '',
    },
    {
        id: 5,
        companyName: 'Innovation Labs',
        position: 'UI/UX Engineer',
        location: 'Austin, TX',
        type: 'Full-time',
        salary: '$110,000 - $150,000',
        description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
        status: '',
    },
    {
        id: 6,
        companyName: 'MegaCorp Solutions',
        position: 'JavaScript Developer',
        location: 'New York, NY',
        type: 'Full-time',
        salary: '$130,000 - $170,000',
        description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.',
        status: '',
    },
    {
        id: 7,
        companyName: 'StartupXYZ',
        position: 'Full Stack Engineer',
        location: 'Remote',
        type: 'Full-time',
        salary: '$120,000 - $160,000',
        description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.',
        status: '',
    },
    {
        id: 8,
        companyName: 'TechCorp Industries',
        position: 'Senior Frontend Developer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '$130,000 - $175,000',
        description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.',
        status: '',
    },
]

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

