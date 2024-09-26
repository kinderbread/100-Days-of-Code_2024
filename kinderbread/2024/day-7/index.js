// Get the 'save-el' & 'count-el' element and save it to a variable
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let currentCount = 0

function increment() {
    count += 1
    currentCount += 1
    console.log(currentCount)
    countEl.textContent = count
}

function save() {
    // create a variable with the count and a seperator
    let countStr = count + " | "
    // Render the variable in the saveEl element using innerText
    // Make sure not to delete existing content
    saveEl.textContent += countStr
    // Everytime you save, the counter resets
    count = 0
    countEl.textContent = count
    // Totals the number of counts
    totalEl.textContent = currentCount
}

// fixed spacing issue by switching from innerText to textConent as it shows raw text as rendered