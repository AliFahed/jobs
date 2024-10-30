const fs = require("fs");
const path = require("path");

function saveDataToJsonAsRewrite(jobDataFileName: string, jobsData: {}) {
  const filePath = path.join(process.cwd(), "data", jobDataFileName);
  fs.writeFileSync(filePath, JSON.stringify(jobsData, null, 2));
}

function saveDataToJsonAsAppend(jobDataFileName: string, salaryData: {}) {
  const filePath = path.join(process.cwd(), "data", jobDataFileName);

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const existingData = JSON.parse(fileContent);

    // check if data inside array before appending
    const dataArray = Array.isArray(existingData) ? existingData : [];
    dataArray.push(salaryData);

    fs.writeFileSync(filePath, JSON.stringify(dataArray, null, 2));
  } else {
    fs.writeFileSync(filePath, JSON.stringify([salaryData], null, 2));
  }
}

function clearDataInJson(jobDataFileName: string) {
  const filePath = path.join(process.cwd(), "data", jobDataFileName);

  // clear by writing an empty array
  fs.writeFileSync(filePath, JSON.stringify([], null, 2));
}

module.exports = {
  saveDataToJsonAsRewrite,
  saveDataToJsonAsAppend,
  clearDataInJson,
};
