let events, selectedEvents = [];
const myCalendar = new HelloWeek({
    selector: ".hello-week",
    lang: "en",
    langFolder: "../libs/hello-week-master/dist/langs/",
    format: "DD/MM/YYYY",
    monthShort: !1,
    weekShort: !0,
    defaultDate: null,
    minDate: null,
    maxDate: null,
    disabledDaysOfWeek: null,
    disableDates: null,
    weekStart: 1,
    daysSelected: null,
    daysHighlight: null,
    multiplePick: !1,
    disablePastDays: !0,
    todayHighlight: !0,
    range: !1,
    locked: !1,
    rtl: !1,
    nav: ["◀", "▶"],
    onLoad: function () {},
    onNavigation: function () {},
    onSelect: function () {
        const selected = myCalendar.daysSelected[0];
        console.log(this);
        const eventPreview = q(".event-preview");

        selectedEvents.forEach(event => {
            eventPreview.removeChild(event);
        });

        selectedEvents = [];

        events.forEach(event => {
            if (event.startDate == selected) {
                let eventDiv = c("div");
                let eventTitle = c("h1");
                let eventDesc = c("p");

                eventTitle.classList.add("event-title");
                eventTitle.innerText = event.title;
                eventDesc.classList.add("event-desc");
                eventDesc.innerText = event.description;

                eventDiv.appendChild(eventTitle);
                eventDiv.appendChild(eventDesc);

                eventPreview.appendChild(eventDiv);
                selectedEvents.push(eventDiv);
            }
        });

        if (selectedEvents.length == 0) {
            console.log("No events today");
            let eventDiv = c("div");
            let eventDesc = c("p");

            eventDesc.classList.add("event-desc");
            eventDesc.innerText = "You have no scheduled events this day";

            eventDiv.appendChild(eventDesc);

            eventPreview.appendChild(eventDiv);
            selectedEvents.push(eventDiv);
        }
    },
    onClear: function () {}
});

function handleEvents(res, err) {
    if (err) {
        console.log(err);
    } else {
        events = res.events;
        createNotifications();
    }
}

function createNotifications() {
    console.log(myCalendar.days);
    myCalendar.days.forEach(day => {
        if (!day.locked) {
            console.log(day);
        }
    });
}

const prev = document.querySelector('.demo-prev');
const next = document.querySelector('.demo-next');

getData("assets/json/events.json", handleEvents); {
    /* < div class = "event" >
        <
        h1 class = "event-title" > < /h1> <
        p class = "event-description" > < /p> <
        /div> */
}