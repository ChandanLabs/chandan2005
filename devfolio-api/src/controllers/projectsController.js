export const getProjects = (req, res) => {
  res.status(200).json({
    projects: [
      {
        name: "AI Job Assistant API",
        description: "An API that recommends job listings based on user resumes using OpenAI embeddings.",
        stack: ["Node.js", "Express", "MongoDB", "OpenAI API"],
        repo: "https://github.com/ChandanLabs/ai-job-assistant"
      },
      {
        name: "Cricket Live Backend",
        description: "Real-time cricket data streaming backend built with WebSockets and Redis.",
        stack: ["Node.js", "Socket.io", "Redis", "AWS EC2"],
        repo: "https://github.com/ChandanLabs/cricket-live-backend"
      }
    ]
  });
};
