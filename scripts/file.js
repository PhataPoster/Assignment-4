let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectBtn = document.getElementById("reject-btn");

const allJobs = document.getElementById("all-jobs");

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