const { exec } = require("child_process");

const run = (cmd, name) => {
  const process = exec(cmd);
  process.stdout.on("data", (data) => console.log(`[${name}]`, data));
  process.stderr.on("data", (data) => console.error(`[${name}]`, data));
};

run("cd backend && npm run server", "backend");
run("cd frontend && npm run dev", "frontend");
run("cd admin && npm run dev", "admin");

// Make sure to check if the frontend url, backend url, admin url env variables are
// provided with the correct values
