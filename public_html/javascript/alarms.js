let newAlarmDiv = q(".new-alarm>p");

newAlarmDiv.onclick = () => {
    q(".new-alarm").classList.toggle('active');

    for (let i = 0; i < q(".new-alarm").children.length; i++) {
        q(".new-alarm").children[i].classList.toggle("hidden");
    }
}

q(".new-alarm>button").onclick = () => {
    console.log("Clicked");
    let alarmDiv = c("div");
    alarmDiv.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h1 class="alarm-title">${i("titleinput").value}</h1>
                    <h1 class="alarm-time">${i("timepicker").value}</h1>
                </div>
                <div class="flip-card-back">
                    <p>${i("descinput").value}</p>
                </div>
            </div>
        `;
    alarmDiv.classList.add("flip-card");

    q(".alarm-container").appendChild(alarmDiv);
    q(".new-alarm").classList.toggle('active');
    for (let i = 0; i < q(".new-alarm").children.length; i++) {
        q(".new-alarm").children[i].classList.toggle("hidden");
    }
    i("titleinput").value = "";
    i("descinput").value = "";
    i("timepicker").value = null;
}