document.addEventListener("DOMContentLoaded", () => {

    const fields = [
        "firstName", "middleName", "lastName",
        "address1", "address2", "country", "state",
        "city", "zip", "email", "phone",
        "degreeName", "degreeType", "university",
        "eduStart", "eduEnd",
        "company", "workStart", "isCurrent", "workEnd",
        "positionTitle", "resume"
    ];

    chrome.storage.sync.get(["candidate"], (data) => {
        if (data.candidate) {
            fields.forEach(id => {
                if (document.getElementById(id)) {
                    document.getElementById(id).value = data.candidate[id] || "";
                }
            });
        }
    });

    document.getElementById("save").addEventListener("click", () => {
        const candidate = {};
        fields.forEach(id => {
            candidate[id] = document.getElementById(id).value || "";
        });

        chrome.storage.sync.set({ candidate }, () => {
            alert("Saved Successfully!");
        });
    });
});
