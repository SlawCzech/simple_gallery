const picsRef = document.querySelectorAll(".gallery li");
const bodyRef = document.querySelector("body");


picsRef.forEach(item => {item.addEventListener("click", function() {
        const thisPic = this.innerHTML;
        const newDiv = document.createElement("div");
        newDiv.classList.add("fullScreen");
        newDiv.innerHTML = thisPic;
        const closeButton = document.createElement("button");
        closeButton.classList.add("close");
        closeButton.innerText = "Close";
        newDiv.appendChild(closeButton);
        bodyRef.appendChild(newDiv);
        closeButton.addEventListener("click", function() {
            newDiv.remove();
        })
    }
)});
