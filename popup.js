document.addEventListener("DOMContentLoaded", () => {
    const nameField = document.getElementById("name");
    const mobileField = document.getElementById("mobile");
    const educationField = document.getElementById("education");
    const saveBtn = document.getElementById("save");

    // Load saved data into the popup
    chrome.storage.sync.get(["candidate"], (data) => {
        if (data.candidate) {
            nameField.value = data.candidate.name || "";
            mobileField.value = data.candidate.mobile || "";
            educationField.value = data.candidate.education || "";
        }
    });

    // Save on click
    saveBtn.addEventListener("click", () => {
        const candidate = {
            name: nameField.value,
            mobile: mobileField.value,
            education: educationField.value
        };

        chrome.storage.sync.set({ candidate }, () => {
            alert("Saved!");
        });
    });
});
