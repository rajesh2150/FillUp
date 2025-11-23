chrome.storage.sync.get(["candidate"], async (data) => {
    if (!data.candidate) return;
    const c = data.candidate;

    function fill(id, value) {
        const e = document.getElementById(id);
        if (e && value) {
            e.value = value;
            e.dispatchEvent(new Event("input", { bubbles: true }));
        }
    }

    function select2(id, value) {
        const el = document.querySelector(`#${id}`);
        if (el) el.textContent = value;
    }

    // PERSONAL DETAILS
    fill("10473", c.firstName);
    fill("9000", c.middleName);
    fill("10474", c.lastName);

    fill("9005", c.address1);
    fill("9006", c.address2);
    fill("9009", c.city);
    fill("9010", c.zip);
    fill("9011", c.email);
    fill("9012", c.phone);

    // Country & State (Select2)
    select2("select2-9007-container", c.country);
    select2("select2-9008-container", c.state);

    // EDUCATION (Row 0)
    fill("9014-1-0", c.degreeName);
    select2("select2-9014-2-0-container", c.degreeType);
    fill("9014-3-0", c.university);
    fill("9014-5-0", c.eduStart);
    fill("9014-4-0", c.eduEnd);

    // EXPERIENCE
    fill("9017-1-0", c.company);
    fill("9017-4-0", c.workStart);
    select2("select2-9017-3-0-container", c.isCurrent);
    fill("9017-2-0", c.positionTitle);

    if (c.isCurrent.toLowerCase() !== "yes") {
        fill("9017-5-0", c.workEnd);
    }

    console.log("IBM Autofill Completed!");

    // RESUME UPLOAD
    if (c.resume) {
        const fileURL = chrome.runtime.getURL("resume/" + c.resume);
        const input = document.querySelector("input[type='file']");

        if (input) {
            try {
                const res = await fetch(fileURL);
                const blob = await res.blob();

                const dt = new DataTransfer();
                dt.items.add(new File([blob], c.resume, { type: "application/pdf" }));

                input.files = dt.files;
                input.dispatchEvent(new Event("change", { bubbles: true }));

                console.log("Resume Uploaded!");
            } catch (err) {
                console.error("Resume upload failed:", err);
            }
        }
    }
});
