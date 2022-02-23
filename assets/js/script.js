

	const Questions = [{
        id: 0,
        q: "What is the tallest building in Cork?",
        a: [{ text: "The Elysian", isCorrect: true },
            { text: "The Cork Opera House", isCorrect: false },
            { text: "Cork Cathedral", isCorrect: false },
            { text: "Cork County Hall", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "What County has the shortest coastline in Ireland",
        a: [{ text: "Laois", isCorrect: false, isSelected: false },
            { text: "Longford", isCorrect: false },
            { text: "Limerick", isCorrect: false },
            { text: "Letrim", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "Where is The shortest street in Ireland",
        a: [{ text: "Omagh", isCorrect: true },
            { text: "Sligo", isCorrect: false },
            { text: "Galway City", isCorrect: false },
            { text: "Kilkenny", isCorrect: false }
        ]
  
    }
  
]

// this code is copied from https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz//

var start = true;
  

function iterate(id) {
  
   
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
 
    const question = document.getElementById("question");
  
  

    question.innerText = Questions[id].q;
  

    const op1 = document.getElementById('ans1');
    const op2 = document.getElementById('ans2');
    const op3 = document.getElementById('ans3');
    const op4 = document.getElementById('ans4');
  
  

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
   
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "gold";
        op2.style.backgroundColor = "green";
        op3.style.backgroundColor = "green";
        op4.style.backgroundColor = "green";
        selected = op1.value;
    })
  
  
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "green";
        op2.style.backgroundColor = "gold";
        op3.style.backgroundColor = "green";
        op4.style.backgroundColor = "green";
        selected = op2.value;
    })
  
   
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "green";
        op2.style.backgroundColor = "green";
        op3.style.backgroundColor = "gold";
        op4.style.backgroundColor = "green";
        selected = op3.value;
    })
  
   
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "green";
        op2.style.backgroundColor = "green";
        op3.style.backgroundColor = "green";
        op4.style.backgroundColor = "gold";
        selected = op4.value;
    })
  
    const evaluate = document.getElementsByClassName("check");
  

    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  

const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})