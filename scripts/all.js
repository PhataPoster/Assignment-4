document.getElementById("interview-btn1").addEventListener("click", getInterview("interview-btn1", "not-applied-btn1"));

document.getElementById("interview-btn2").addEventListener("click", getInterview("interview-btn2", "not-applied-btn2"));

document.getElementById("interview-btn3").addEventListener("click", getInterview("interview-btn3", "not-applied-btn3"));

document.getElementById("interview-btn4").addEventListener("click", getInterview("interview-btn4", "not-applied-btn4"));

document.getElementById("interview-btn5").addEventListener("click", getInterview("interview-btn5", "not-applied-btn5"));

document.getElementById("interview-btn6").addEventListener("click", getInterview("interview-btn6", "not-applied-btn6"));

document.getElementById("interview-btn7").addEventListener("click", getInterview("interview-btn7", "not-applied-btn7"));

document.getElementById("interview-btn8").addEventListener("click", getInterview("interview-btn8", "not-applied-btn8"));

// for rejected button

document.getElementById("reject-btn1").addEventListener("click", getRejected("reject-btn1", "not-applied-btn1"));

document.getElementById("reject-btn2").addEventListener("click", getRejected("reject-btn2", "not-applied-btn2"));

document.getElementById("reject-btn3").addEventListener("click", getRejected("reject-btn3", "not-applied-btn3"));

document.getElementById("reject-btn4").addEventListener("click", getRejected("reject-btn4", "not-applied-btn4"));

document.getElementById("reject-btn5").addEventListener("click", getRejected("reject-btn5", "not-applied-btn5"));

document.getElementById("reject-btn6").addEventListener("click", getRejected("reject-btn6", "not-applied-btn6"));

document.getElementById("reject-btn7").addEventListener("click", getRejected("reject-btn7", "not-applied-btn7"));

document.getElementById("reject-btn8").addEventListener("click", getRejected("reject-btn8", "not-applied-btn8"));












// for show only buttons
// document.getElementById("all-btn").addEventListener("click",showOnly("all-jobs"));

// document.getElementById("interview-btn").addEventListener("click",showOnly("no-jobs"));

// document.getElementById("reject-btn").addEventListener("click",showOnly("no-jobs"));

// document.getElementById("interview-btn1").addEventListener("click", function() {
//     // console.log("Interview button clicked");
//     const totalCount = document.getElementById("total-count");
//     const numOfTotal = totalCount.innerText;
//     const newTotalCount = parseInt(numOfTotal) - 1;
//     totalCount.innerText = newTotalCount;

//     const interviewCount = document.getElementById("interview-count");
//     const numOfInterview = interviewCount.innerText;
//     const newInterviewCount = parseInt(numOfInterview) + 1;
//     interviewCount.innerText = newInterviewCount;

//     const notAppliedBtn1 = document.getElementById("not-applied-btn1");
//     notAppliedBtn1.style.backgroundColor = "green";
//     notAppliedBtn1.style.color = "white";

//     notAppliedBtn1.innerText = "interview";
// });