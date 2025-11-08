export const getProfile = (req, res) => {
  res.status(200).json({
    name: "Chandan Kumar Sah Teli",
    role: "Backend Developer | Node.js | Express.js | AWS Enthusiast",
    about: "Building scalable backend systems and integrating AI into modern applications.",
    location: "India",
    contact: {
      email: "chandan@example.com",
      github: "https://github.com/ChandanLabs",
      linkedin: "https://linkedin.com/in/chandan"
    }
  });
};
