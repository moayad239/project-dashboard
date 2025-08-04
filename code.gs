
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.projectId,
    data.poId,
    data.poStartDate,
    data.projectName,
    data.projectManager,
    data.poValue,
    data.cocMonth,
    data.cocValue,
    new Date()
  ]);
  return ContentService.createTextOutput("Saved");
}
