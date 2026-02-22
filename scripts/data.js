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

applications.forEach(function(data) {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-white', 'border', 'border-stroke');
    card.dataset.id = data.id;

    let status = `<div class="badge h-9 rounded font-medium text-black bg-sky">NOT APPLIED</div>`;
    if(data.status === 'interview') {
        status = `<div class="badge h-9 rounded font-medium text-green/90 bg-green/50">INTERVIEW</div>`;
    }
    else if (data.status === 'rejected') {
        status = `<div class="badge h-9 rounded font-medium text-red/80 bg-red/50">REJECTED</div>`;
    }

    card.innerHTML = `
        <div class="card-body p-6 gap-0 jobCard">
            <h2 class="card-title text-lg text-black font-semibold mb-1">${data.companyName}</h2>
            <p class="job-position text-gray text-base mb-5">${data.position}</p>

            <p class="text-gray text-sm mb-5">${data.location} • ${data.type} • ${data.salary}</p>

            <div class="job-card-status mb-2">
                ${status}
            </div>

            <p class="text-darkGray text-sm mb-5">${data.description}</p>

            <div class="btn-grup flex gap-2">
                <button class="interviewBtn btn border-green font-medium rounded text-green bg-white h-9 w-[100px]">INTERVIEW</button>
                <button class="btn border-red font-medium rounded text-red bg-white h-9 w-[100px]">REJECTED</button>
            </div>

            <button type="button" class="btn btn-circle absolute top-8 right-6 deleteJob" data-target="${data.id}"><img src="assets/trash.svg" alt="Trash Icon"></button>
        </div>        
    `;
    
    applicationContainer.appendChild(card);
});


function updateTotalJobs() {
    let totalJobs = applications.length;

    const totalJobsHolder = document.querySelectorAll('.total-job');
    totalJobsHolder.forEach(function(data) {
        data.textContent = totalJobs;
    })
}
updateTotalJobs();

const applicationModule = document.getElementById('application-module');
applicationModule .addEventListener('click', function(event) {
    const deleteBtn = event.target.closest('.deleteJob');

    if(!deleteBtn || !applicationModule.contains(deleteBtn)) {
        return;
    }
    const elementId = Number(deleteBtn.dataset.target);

    const arrayIndex = applications.findIndex(application => application.id === elementId)
    
    if(arrayIndex !== -1 ) {
        applications.splice(arrayIndex, 1);
        console.log(applications.length)
    }
        
    deleteBtn.closest('.card').remove();

    updateTotalJobs();
})

const interviewBtn = document.querySelectorAll('.interviewBtn'); 
interviewBtn.forEach(function(element) {
    element.addEventListener('click', function() {
        const targetApp = Number(this.closest('.card').dataset.id) - 1;

        applications[targetApp].status = 'interview';
        // console.log(applications[targetApp])

        const interviewLists = document.getElementById('interview-lists');

       
        const filter = applications.filter(data => data.status === 'interview');

        console.log(filter)
        
    })
})
