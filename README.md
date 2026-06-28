# 🚀 Node.js + Redis Caching Demo

A simple Node.js project demonstrating how to integrate **Redis** with **Express.js** to cache API responses and improve application performance.

This project includes two endpoints to compare the difference between fetching data normally and fetching it using Redis caching.

---

## ✨ Features

* 🚀 Express.js REST API
* ⚡ Redis caching
* 🐳 Docker Compose setup
* 🔥 Cache Hit & Cache Miss implementation
* 🌐 Deployed on Render
* 📚 Beginner-friendly project

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Redis
* Docker Compose
* Render

---

## 📂 Project Structure

```text
.
├── docker-compose.yml
├── Dockerfile
├── index.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000
REDIS_URL=redis://redis:6379
```

---

## 🐳 Running with Docker Compose

### Clone the repository

```bash
git clone https://github.com/namit-01/redis.git
```

```bash
cd redis
```

### Build and start the containers

```bash
docker compose up --build
```

### Stop the containers

```bash
docker compose down
```

---

## 📡 API Endpoints

### Without Redis

**Endpoint**

```http
GET /getw
```

**Live Demo**

https://redis-303p.onrender.com/getw

This endpoint fetches data directly every time without using Redis.

---

### With Redis

**Endpoint**

```http
GET /get
```

**Live Demo**

https://redis-303p.onrender.com/get

This endpoint first checks Redis:

* ✅ **Cache Hit** → Returns cached data.
* ❌ **Cache Miss** → Fetches fresh data, stores it in Redis, and then returns it.

---

## 🔄 How Redis Caching Works

```text
Client
   │
   ▼
Express Server
   │
   ▼
Check Redis
   │
   ├── Cache Hit ─────────► Return Cached Data
   │
   └── Cache Miss
          │
          ▼
     Fetch Fresh Data
          │
          ▼
    Store Data in Redis
          │
          ▼
     Return Response
```

---

## 🎯 Why Redis?

Redis stores data in memory, making it significantly faster than repeatedly fetching data from a database or external API.

### Benefits

* Faster response times
* Reduced backend load
* Better scalability
* Lower latency
* Improved user experience

---

## 📚 What You'll Learn

* Connecting Node.js with Redis
* Redis `GET` and `SET` operations
* API response caching
* Cache Hit vs Cache Miss
* Running multiple services using Docker Compose
* Deploying a Redis-enabled application

---

## 🚀 Future Improvements

* Add cache expiration (TTL)
* Redis Hashes
* Redis Lists
* Rate Limiting
* Authentication
* Unit Testing
* Docker Compose for production

---

## 📄 License

This project is open source and created for learning purposes.

---

## 👨‍💻 Author

**Namit Chaturvedi**

GitHub: https://github.com/namit-01
