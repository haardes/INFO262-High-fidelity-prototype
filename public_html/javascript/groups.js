let groups;
getData("assets/json/groups.json", handleGroups);

function handleGroups(res, err) {
    if (err) {
        console.log(err);
    } else {
        groups = res.groups;
    }

    showGroups();
}

function showGroups() {
    const container = q(".group-container");

    groups.forEach(group => {
        let groupDiv = c("div");
        let groupName = c("h1");
        let eventButton = c("button");
        let memberButton = c("button");

        groupName.innerText = group.name;
        groupName.classList.add("group-name");

        groupDiv.classList.add("group-instance");
        groupDiv.appendChild(groupName);

        group.members.forEach(member => {
            let memberP = c("p");
            memberP.innerText = member.name;
            memberP.classList.add("group-member");

            groupDiv.appendChild(memberP);
        });

        eventButton.innerText = "Show events";
        eventButton.classList.add("event-button");
        groupDiv.appendChild(eventButton);

        memberButton.innerText = "Add member";
        memberButton.classList.add("member-button");
        memberButton.onclick = function () {
            prompt("Phone number or ID of friend");
        }
        groupDiv.appendChild(memberButton);

        container.appendChild(groupDiv);
    });
}