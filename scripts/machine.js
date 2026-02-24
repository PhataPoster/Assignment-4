function getInterview(id, notAppliedBtnId){
    document.getElementById(id).addEventListener("click", function() {
    // console.log("Interview button clicked");
    const interviewCount = document.getElementById("interview-count");
    const numOfInterview = interviewCount.innerText;
    const newInterviewCount = parseInt(numOfInterview) + 1;
    interviewCount.innerText = newInterviewCount;   

    const notAppliedBtn = document.getElementById(notAppliedBtnId);
    notAppliedBtn.style.backgroundColor = "green";
    notAppliedBtn.style.color = "white";

    notAppliedBtn.innerText = "interview";
    
});
}

function getRejected(id, notAppliedBtnId){
   document.getElementById(id).addEventListener("click",function() {
    // console.log("Reject button clicked");
    const rejectedCount = document.getElementById("reject-count");
    const numOfRejected = rejectedCount.innerText;
    const newRejectedCount = parseInt(numOfRejected) + 1;
    rejectedCount.innerText = newRejectedCount;  

    const notAppliedBtn = document.getElementById(notAppliedBtnId);
    notAppliedBtn.style.backgroundColor = "red";
    notAppliedBtn.style.color = "white";

    notAppliedBtn.innerText = "rejected";
});
}

function showOnly(id){
    const allJobs = document.getElementById("all-jobs");
    const noJobs = document.getElementById("no-jobs");

    allJobs.classList.add("hidden");
    noJobs.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}