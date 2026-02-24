let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("reject-count");

let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectBtn = document.getElementById("reject-btn");

const allJobs = document.getElementById("all-jobs");

const mainContainer = document.querySelector("main");
const filteredSection = document.querySelector(".filtered-section");
// console.log(mainContainer);

function calculateCount(){
    totalCount.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}

calculateCount()

function toggleStyle(id){
    allBtn.classList.remove("bg-blue-600", "text-white");
    allBtn.classList.add("bg-white", "text-gray-500");
    interviewBtn.classList.remove("bg-blue-600", "text-white");
    interviewBtn.classList.add("bg-white", "text-gray-500");
    rejectBtn.classList.remove("bg-blue-600", "text-white");
    rejectBtn.classList.add("bg-white", "text-gray-500");

    const button = document.getElementById(id);
    button.classList.remove("bg-white", "text-gray-500");
    button.classList.add("bg-blue-600", "text-white");

}

mainContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("interview-button")){
        const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const devStack = parentNode.querySelector(".devStack").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;
    console.log(companyName, devStack, salary, description);
    const cardInfo = {
        companyName,
        devStack,
        salary,
        description
    }
    const existingItem = interviewList.find(item=> item.companyName == cardInfo.companyName);
    parentNode.querySelector(".not-applied").innerText = "Interview";
    parentNode.querySelector(".not-applied").classList.remove("bg-blue-100");
    parentNode.querySelector(".not-applied").classList.add("text-green-600","border-2","border-green-600","text-bold","bg-green-100");
    if(!existingItem){
         interviewList.push(cardInfo);
    }
    calculateCount();
    renderInterviewList();
    }
    
});

 function renderInterviewList(){
        filteredSection.innerHTML = "";
        for(let interview of interviewList){
            const div = document.createElement("div");
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
                        <button id="not-applied-btn1" class="text-1xl bg-blue-100 py-1 px-4 rounded-md">NOT APPLIED</button>
                        <p class="description text-sm text-gray-500 mt-2">${interview.description}</p>
                    </div>
                    <div class="flex gap-3">
                        <button id="interview-btn1"
                            class="bg-white text-green-600 px-4 py-1 rounded-md border-[2px] border-green-600 hover:bg-green-600 hover:text-white ">
                            INTERVIEW
                        </button>
                        <button id="reject-btn1"    
                            class="bg-white text-red-600 px-4 py-1 rounded-md border-[2px] border-red-600 hover:bg-red-600 hover:text-white">
                            REJECTED
                    </div>
                </div>
            `
            filteredSection.appendChild(div); 
        }
    }

