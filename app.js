let q = ["q1", "q2", "q3"];
let a1 = [
    { a: "a1", IsCorresct: true },
    { a: "a2", IsCorresct: false },
    { a: "a3", IsCorresct: false }
];
let a2 = [
    { a: "b1", IsCorresct: false },
    { a: "b2", IsCorresct: true },
    { a: "b3", IsCorresct: false }
];
let a3 = [
    { a: "c1", IsCorresct: false },
    { a: "c2", IsCorresct: false },
    { a: "c3", IsCorresct: true }
];

let NumberOfCorrectAnswers = 0;
let NumberOfFalseAnswers = 0;

let CurrentQ = 0;

function DisplayQAndA() {
        document.querySelector("h2").innerHTML = q[CurrentQ];
        document.querySelector("#a1").innerHTML = a1[CurrentQ].a;
        document.querySelector("#a2").innerHTML = a2[CurrentQ].a;
        document.querySelector("#a3").innerHTML = a3[CurrentQ].a;
        
        document.querySelector("#Correct").innerHTML = "Correct: " + NumberOfCorrectAnswers;
        document.querySelector("#False").innerHTML = "False: " + NumberOfCorrectAnswers;
}

DisplayQAndA();

document.querySelector("#a1").addEventListener("click", next);
document.querySelector("#a2").addEventListener("click", next);
document.querySelector("#a3").addEventListener("click", next);

function next(e) {
    if (e.target.IsCorresct === true) {
        NumberOfCorrectAnswers++
    }

    else {
        NumberOfFalseAnswers++
    }

    CurrentQ++
    DisplayQAndA();
}

