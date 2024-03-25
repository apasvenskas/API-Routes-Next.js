import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json"); // get the current working directory with process.cwd()
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath); // read data stored in a file
  // convert the data from json to js object
  const data = JSON.parse(fileData);
  return data; 
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString,
      email: email,
      text: feedbackText,
    };
    // store it in a database, in this case it will be a file in a data folder
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
