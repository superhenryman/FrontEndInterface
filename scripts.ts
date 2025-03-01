const webname = document.getElementById('name');
const webemail = document.getElementById('email');
const grade = document.getElementById('grade');
const type = document.getElementById('type');
async function GetData() {
    try {
        let response = await fetch("https://pblwebsitemaker-production.up.railway.app/api/data");
        let data = await response.json();
        if (webname) webname.textContent = data.name || "N/A";
        if (webemail) webemail.textContent = data.email || "N/A";
        if (grade) grade.textContent = data.grade || "N/A";
        if (type) type.textContent = data.type || "N/A";
    } catch (error) {
        console.error("Error fetching data: ", error);
    } finally {
        setTimeout(GetData, 1000);
    }
}
