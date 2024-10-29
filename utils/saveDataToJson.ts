const fs = require("fs");
const path = require("path");

function saveDataToJson(jobDataFileName: string, jobsData: {}) {
  const filePath = path.join(process.cwd(), "data", jobDataFileName);
  fs.writeFileSync(filePath, JSON.stringify(jobsData, null, 2));
}

module.exports = saveDataToJson;
