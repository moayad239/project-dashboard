
const scriptURL = "https://script.google.com/macros/s/AKfycbyySsVY7g21HYp61EKOmwlyVd3rTbv9-d4aO0Q_Pq-5thoLbN7VvYnDOsvv8FsCnTjVyA/exec";
document.getElementById("dataForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = {
    projectId: document.getElementById("projectId").value,
    poId: document.getElementById("poId").value,
    poStartDate: document.getElementById("poStartDate").value,
    projectName: document.getElementById("projectName").value,
    projectManager: document.getElementById("projectManager").value,
    poValue: document.getElementById("poValue").value,
    cocMonth: document.getElementById("cocMonth").value,
    cocValue: document.getElementById("cocValue").value
  };
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => alert("تم الحفظ بنجاح"))
  .catch(err => alert("فشل الحفظ"));
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
