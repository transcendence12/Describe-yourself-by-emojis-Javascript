
// EMOJIS - YOU CAN FIND HERE: https://emojipedia.org/

const myEmojis = ["🤔", "🚶", "❤️", "🔥", "🐈", "🎧", "☕"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

//Function that I can reuse again and again for update myEmoji array:
function renderEmojis() {
    //This line clears away old version of the array before it renders the updated one:
    emojiContainer.innerHTML = ""
//Loop through the emojis:
    for (let i = 0; i < myEmojis.length; i++){
        // Render the emojis as <span> tags in the emojisContainer <div>:
        // ❓ Why I can't see them in the container on the screen?
        const emoji = document.createElement("span")
        myEmojis.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

//Hook an event listener up with the button:
pushBtn.addEventListener("click", function(){
    //Here I check if the input value is truthy or falsy:
    if (emojiInput.value) {
        //Push the emoji into the myEmoji's array:
        myEmojis.push(emojiInput.value)
        //clear the input field after the user clicks button:
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis()
})
