
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

//creating increment function

function increment() {
    count += 1
    countEL.innerText = count
}

//displaying the incremented number

// document.getElementById("count-el").innerText = increment()


//creating save function to save the logs

function save(){
    let prevData = " " + count + " - "
    saveEl.innerText += prevData
    console.log(count)
    countEL.innerText = 0
}

