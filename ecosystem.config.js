module.exports = {
  apps: [
    {
      name: "travifai-task-api",
      script: "./server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        PORT: 3000
      },
      error_file: "/var/log/travifai/app.err.log",
      out_file: "/var/log/travifai/app.out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss"
    }
  ]
};

