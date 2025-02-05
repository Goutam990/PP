const express = require("express");
const router = express.Router();

// Mock data for skills and education, as we don't have separate models here
const devSkills = [
  { name: "JavaScript", level: "Expert" },
  { name: "Node.js", level: "Intermediate" }
];

const desSkills = [
  { name: "UI/UX Design", level: "Advanced" },
  { name: "Photoshop", level: "Intermediate" }
];

const toolkits = [
  { name: "Git", level: "Advanced" },
  { name: "Docker", level: "Intermediate" }
];

const education = [
  { degree: "B.Tech", field: "Computer Science", university: "Shri Vaishnav Institute" },
  { degree: "High School", field: "Science", school: "Maharishi Vidya Mandir" }
];

// Routes
router.route("/").get((req, res) => {
    console.log("🚀  Root route accessed");
    res.send("Hello from the root route!");
});

router.route("/api/dev-skill").get((req, res) => {
    console.log("🚀  /api/dev-skill");
    res.json(devSkills); // Mock data, replace with actual DB query
});


router.route("/api/des-skill").get((req, res) => {
    console.log("🚀  /api/des-skill");
    res.json(desSkills); // Mock data, replace with actual DB query
});

router.route("/api/toolkit").get((req, res) => {
    console.log("🚀  /api/toolkit");
    res.json(toolkits); // Mock data, replace with actual DB query
});

router.route("/api/education").get((req, res) => {
    console.log("🚀  /api/education");
    res.json(
        
            education); // Mock data, replace with actual DB query
});

module.exports = router;
