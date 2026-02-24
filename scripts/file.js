let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("reject-count");

let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectBtn = document.getElementById("reject-btn");

const allJobs = document.getElementById("all-jobs");
const noJobs = document.getElementById("no-jobs");
const availableJobs = document.querySelector(".available-jobs");


const mainContainer = document.querySelector("main");
const filteredSection = document.querySelector(".filtered-section");
// console.log(mainContainer);

function calculateCount() {
    totalCount.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    availableJobs.innerText = allJobs.children.length;
}

calculateCount()

function toggleStyle(id) {

    currentStatus = id;

    allBtn.classList.remove("bg-blue-600", "text-white");
    allBtn.classList.add("bg-white", "text-gray-500");
    interviewBtn.classList.remove("bg-blue-600", "text-white");
    interviewBtn.classList.add("bg-white", "text-gray-500");
    rejectBtn.classList.remove("bg-blue-600", "text-white");
    rejectBtn.classList.add("bg-white", "text-gray-500");

    const button = document.getElementById(id);
    button.classList.remove("bg-white", "text-gray-500");
    button.classList.add("bg-blue-600", "text-white");  

    if (id == "interview-btn") {
        allJobs.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderInterviewList()

        interviewJobsCount();
    }
    else if (id == "all-btn") {
        allJobs.classList.remove("hidden");
        filteredSection.classList.add("hidden");
        allJobsCount();
    }
    else if (id == "reject-btn") {
        allJobs.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderRejectedList()
        rejectedJobsCount()
    }
    if(interviewList.length == 0 && rejectedList.length == 0) {
        allJobs.classList.add("hidden");
        noJobs.classList.remove("hidden");
        if(id == "all-btn") {
            noJobs.classList.add("hidden");
            allJobs.classList.remove("hidden");
        }
    }


}

mainContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("interview-button")) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector(".company-name").innerText;
        const devStack = parentNode.querySelector(".devStack").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const notAppliedBtn = parentNode.querySelector(".not-applied");

        const textNotAppliedBtn = notAppliedBtn.innerText = "Interview";
        notAppliedBtn.classList.remove("bg-blue-100");
        notAppliedBtn.classList.add("text-green-600", "border-2", "border-green-600", "text-bold", "bg-green-100");

        console.log(companyName, devStack, salary, description);

        const cardInfo = {
            companyName,
            devStack,
            salary,
            description,
            textNotAppliedBtn
        }
        const existingItem = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!existingItem) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName);

        if(currentStatus == "reject-btn") {
            renderRejectedList();
        }
        calculateCount();
        
    }
    else if (event.target.classList.contains("reject-button")) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector(".company-name").innerText;
        const devStack = parentNode.querySelector(".devStack").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const notAppliedBtn = parentNode.querySelector(".not-applied");

        const textNotAppliedBtn = notAppliedBtn.innerText = "Rejected";
        notAppliedBtn.classList.remove("bg-blue-100");
        notAppliedBtn.classList.add("text-red-600", "border-2", "border-red-600", "text-bold", "bg-red-100");

        console.log(companyName, devStack, salary, description);

        const cardInfo = {
            companyName,
            devStack,
            salary,
            description,
            textNotAppliedBtn
        }
        const existingItem = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!existingItem) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName);

        if(currentStatus == "interview-btn") {
            renderInterviewList();
        }

        calculateCount();
    }

    if (event.target.classList.contains("delete-btn") || event.target.parentNode.classList.contains("delete-btn")) {
        const parentNode = event.target.closest(".card-items");
        const companyName = parentNode.querySelector(".company-name").innerText;
        parentNode.remove();

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        calculateCount();
    }

});

function renderInterviewList() {
    filteredSection.innerHTML = "";
    for (let interview of interviewList) {
        const div = document.createElement("div");
        div.classList.add("flex", "flex-col", "gap-4", "mb-6");
        div.innerHTML = `
            <div class="flex-col space-y-4 bg-white p-6 rounded-lg shadow">
                    <div class="flex justify-between">
                        <div>
                            <h3 class="company-name font-bold text-1xl">${interview.companyName}</h3>
                            <p class="devStack text-sm text-gray-500">
                                ${interview.devStack}
                            </p>
                        </div>

                        <button class="p-3 rounded-full 
                         bg-gray-50 
                         border-[2px] border-gray-200 
                        flex items-center justify-center 
                        text-gray-400 
                        hover:bg-gray-100 
                        transition"><i class="fa-solid fa-trash-can"></i></button>
                    </div>

                    <div>
                        <p class="salary text-sm text-gray-500">${interview.salary}</p>
                    </div>
                    <div class="flex-col gap-2">
                        <button id="not-applied-btn1" class="not-applied text-green-600 border-2 border-green-600 text-bold bg-green-100 py-1 px-4 rounded-md">${interview.textNotAppliedBtn}</button>
                        <p class="description text-sm text-gray-500 mt-2">${interview.description}</p>
                    </div>
                    <div class="flex gap-3">
                        <button id="interview-btn1"
                            class="interview-button bg-white text-green-600 px-4 py-1 rounded-md border-[2px] border-green-600 hover:bg-green-600 hover:text-white ">
                            INTERVIEW
                        </button>
                        <button id="reject-btn1"    
                            class="reject-button bg-white text-red-600 px-4 py-1 rounded-md border-[2px] border-red-600 hover:bg-red-600 hover:text-white">
                            REJECTED
                    </div>
                </div>
            `
        filteredSection.appendChild(div);
    }
}

function renderRejectedList() {
    filteredSection.innerHTML = "";
    for (let rejected of rejectedList) {
        const div = document.createElement("div");
        div.classList.add("flex", "flex-col", "gap-4", "mb-6");
        div.innerHTML = `
            <div class="flex-col space-y-4 bg-white p-6 rounded-lg shadow">
                    <div class="flex justify-between">
                        <div>
                            <h3 class="company-name font-bold text-1xl">${rejected.companyName}</h3>
                            <p class="devStack text-sm text-gray-500">
                                ${rejected.devStack}
                            </p>
                        </div>

                        <button class="p-3 rounded-full 
                         bg-gray-50 
                         border-[2px] border-gray-200 
                        flex items-center justify-center 
                        text-gray-400 
                        hover:bg-gray-100 
                        transition"><i class="fa-solid fa-trash-can"></i></button>
                    </div>

                    <div>
                        <p class="salary text-sm text-gray-500">${rejected.salary}</p>
                    </div>
                    <div class="flex-col gap-2">
                        <button id="not-applied-btn1" class="not-applied text-red-600 border-2 border-red-600 text-bold bg-red-100 py-1 px-4 rounded-md">${rejected.textNotAppliedBtn}</button>
                        <p class="description text-sm text-gray-500 mt-2">${rejected.description}</p>
                    </div>
                    <div class="flex gap-3">
                        <button id="interview-btn1"
                            class="interview-button bg-white text-green-600 px-4 py-1 rounded-md border-[2px] border-green-600 hover:bg-green-600 hover:text-white ">
                            INTERVIEW
                        </button>
                        <button id="reject-btn1"    
                            class="reject-button bg-white text-red-600 px-4 py-1 rounded-md border-[2px] border-red-600 hover:bg-red-600 hover:text-white">
                            REJECTED
                    </div>
                </div>
            `
        filteredSection.appendChild(div);
    }
}

function interviewJobsCount() {
    availableJobs.innerHTML =`${interviewList.length} of ${allJobs.children.length}`
    ;
}
function rejectedJobsCount() {
    availableJobs.innerHTML =`${rejectedList.length} of ${allJobs.children.length}`
    ;
}
function allJobsCount() {
    availableJobs.innerHTML =`${allJobs.children.length}`
    ;
}


