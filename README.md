# 🚀 Travifai DevOps Assignment
## 📌 Overview

This project demonstrates deployment of a Node.js Task Manager API on AWS EC2, with automated deployments using GitHub Actions and optional S3 log storage.
A simple frontend UI (/ui) is provided to add and remove tasks dynamically.

---
## ⚙ Technologies Used

- **Node.js + Express → REST API**
- **PM2 → Process manager for Node.js**
- **Nginx → Reverse proxy (port 80 → 3000)**
- **AWS EC2 → Hosting environment**
- **GitHub Actions → CI/CD pipeline**
- **S3 → Log storage**
  
---
## 🧩 How It Works (Flow)

1. Client interacts with API via /ui (HTML frontend).
2. API routes available:
  - **GET /tasks → Fetch all tasks**
  - **POST /tasks → Add a new task**
  - **DELETE /tasks/:id → Remove a specific task**
3. API runs on EC2 (Node.js + PM2) behind Nginx reverse proxy.
4. Logs are stored in /var/log/travifai/ and can sync to S3 bucket.
5. GitHub Actions auto-deploys latest code to EC2 when changes are pushed to main.

---
## 🖥 UI (Frontend)

Visit: http://13.50.125.160/ui

Features:

- **Add new tasks using a form**
- **View all tasks in a list**
- **Remove tasks using a Delete button**
- **Updates reflect immediately without page refresh (auto re-fetch).**

---
## ⚙ Deployment
1. Install Dependencies (on EC2)

2. Clone Repo
```bash
git clone https://github.com/GaganPal27/travifai-devops-assignment.git
cd travifai-devops-assignment
npm install
```
3. Install Node.js Dependencies
```bash
npm install
```

4. Start App with PM2
```bash
pm2 start server.js --name travifai-task-api
```

5. Configure Nginx Reverse Proxy
Forward port 80 → 3000.

6. Enable S3 Log Sync
Logs from /var/log/travifai/ sync to s3://travifai-logs-gagan/.

---
## 🔄 CI/CD (GitHub Actions)

- **Workflow runs on every push to main.**
- **Steps:**
  - **SSH into EC2**
  - **Pull latest code**
  - **Install dependencies**
  - **Restart app via PM2**
- **GitHub Secrets**
- **EC2_HOST → Public IP of EC2**
- **EC2_USER → ubuntu**
- **EC2_SSH_KEY → private key contents**

---
## 📬 Sample API Requests
1. Fetch Tasks
```bash
curl http:/13.50.125.160/tasks
```
2. Create New Task
```bash
curl -X POST http:/13.50.125.160/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn CI/CD"}'
```
3. Delete Task
```bash
curl -X DELETE http:/13.50.125.160/tasks/1
```
---
📁 Folder Structure
```
travifai-devops-assignment/
├── server.js
├── index.html
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```
---
Screenshot of s3 logs
<img width="1920" height="784" alt="Screenshot (222)" src="https://github.com/user-attachments/assets/bf857a8e-3330-420e-9c4e-372eab436be4" />
