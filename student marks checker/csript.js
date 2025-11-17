function calculate() {
    let marks = [];

   
    marks.push(Number(document.getElementById("m1").value));
    marks.push(Number(document.getElementById("m2").value));
    marks.push(Number(document.getElementById("m3").value));
    marks.push(Number(document.getElementById("m4").value));
    marks.push(Number(document.getElementById("m5").value));

    
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] === "" || isNaN(marks[i])) {
            alert("Please enter all 5 subject marks properly!");
            return;
        }
    }

    
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    
    let avg = total / marks.length;

   
    let grade = "";
    if (avg >= 90) grade = "A+";
    else if (avg >= 80) grade = "A";
    else if (avg >= 70) grade = "B";
    else if (avg >= 60) grade = "C";
    else if (avg >= 50) grade = "D";
    else grade = "F";

    
    let status = "Pass";

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        status = "Fail";
        break;
    }
}


    let resultBox = document.getElementById("result");
    resultBox.innerHTML = `
        <h3>Result</h3>
        <p>Total Marks: <strong>${total}</strong></p>
        <p>Average: <strong>${avg.toFixed(2)}</strong></p>
        <p>Grade: <strong>${grade}</strong></p>
        <p>Status: <strong class="${status === 'Pass' ? 'pass' : 'fail'}">
            ${status}
        </strong></p>
    `;
}
