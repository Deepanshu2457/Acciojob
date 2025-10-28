const fs = require("fs");

const command = process.argv[2];
const filename = process.argv[3];
const data = process.argv[4];

function work() {
  if (!filename) {
    console.log("please enter your filename");
    return;
  }

  switch (command) {
    case "create":
      if (!data) {
        console.log("enter a valid data");
        return;
      }

      fs.writeFileSync(filename, data);
      break;

    case "read":
      const value = fs.readFileSync(filename, "utf-8");
      console.log(value);
      break;

    case "update":
      if (!data) {
        console.log("enter a valid data");
        return;
      }
      fs.appendFileSync(filename, "\n" + data);
break
    case "delete":
      fs.unlinkSync(filename);
      break;

    default:
      console.log("invalid command");
  }
}

work();
