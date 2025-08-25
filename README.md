# Travifai DevOps Assignment

## Public URL
http://13.50.125.160

## Application
- Built with Node.js + Express
- Endpoints:
  - `/` → Health check / welcome message
  - `/tasks` → Returns sample task list (JSON)
  - `POST /tasks` → Add new task (in-memory)

## Deployment
- Hosted on AWS EC2 (Ubuntu 22.04)
- Nginx reverse proxy (port 80 → 3000)
- PM2 for process management

## CI/CD
- GitHub Actions workflow runs on push to `main`
- Steps:
  1. SSH into EC2
  2. Pull latest code
  3. Install dependencies
  4. Restart app with PM2

### GitHub Secrets
- `EC2_HOST` → EC2 Public IP
- `EC2_USER` → ubuntu
- `EC2_SSH_KEY` → private key contents

## logs in s3
- Logs from `/var/log/travifai/` synced to S3 bucket every 15 min
