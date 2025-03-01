var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const webname = document.getElementById('name');
const webemail = document.getElementById('email');
const grade = document.getElementById('grade');
const type = document.getElementById('type');
function GetData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch("https://pblwebsitemaker-production.up.railway.app/api/data");
            let data = yield response.json();
            if (webname)
                webname.textContent = data.name || "N/A";
            if (webemail)
                webemail.textContent = data.email || "N/A";
            if (grade)
                grade.textContent = data.grade || "N/A";
            if (type)
                type.textContent = data.type || "N/A";
        }
        catch (error) {
            console.error("Error fetching data: ", error);
        }
        finally {
            setTimeout(GetData, 1000);
        }
    });
}
GetData();
