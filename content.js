chrome.storage.sync.get(["candidate"], (data) => {
    if (!data.candidate) return;
    const { name, mobile, education } = data.candidate;

    const inputs = document.querySelectorAll("input, textarea, select");

    inputs.forEach(field => {
        const fieldName = field.name?.toLowerCase() || "";
        const fieldId = field.id?.toLowerCase() || "";
        const placeholder = field.placeholder?.toLowerCase() || "";

        // Fill name fields
        if (name && (fieldName.includes("name") || placeholder.includes("name"))) {
            field.value = name;
        }

        // Fill mobile/phone fields
        if (mobile && 
            (fieldName.includes("mobile") || fieldName.includes("phone") ||
             placeholder.includes("mobile") || placeholder.includes("phone"))
        ) {
            field.value = mobile;
        }

        // Fill education fields
        if (education && 
            (fieldName.includes("education") || fieldName.includes("qualification") ||
             placeholder.includes("education"))
        ) {
            field.value = education;
        }
    });
});
