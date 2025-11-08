export const getSkills = (req, res) => {
  res.status(200).json({
    languages: ["JavaScript", "Python", "Java"],
    backend: ["Node.js", "Express.js", "FastAPI"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    cloud: ["AWS (EC2, S3, Lambda)", "Render", "Docker"],
    devops: ["GitHub Actions", "CI/CD", "Docker Compose"],
    tools: ["Postman", "Swagger", "VS Code"]
  });
};
