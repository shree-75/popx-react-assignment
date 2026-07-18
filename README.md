# 🚀 PopX React Assignment

A modern React application built as part of a frontend assignment using **React**, **Vite**, and **React Router**. The project follows modern development practices including **GitHub Actions (CI)**, **Docker**, and **unit testing**.

---

## 📌 Features

* Responsive UI
* React Router navigation
* Component-based architecture
* Fast development with Vite
* Unit testing with Vitest
* Continuous Integration using GitHub Actions
* Docker support for containerized development

---

## 🛠️ Tech Stack

* React
* Vite
* React Router
* JavaScript (ES6+)
* CSS
* Vitest
* Git & GitHub
* GitHub Actions
* Docker

---

## 📂 Project Structure

```text
popx-app/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── tests/
│── .github/
│── Dockerfile
│── .dockerignore
│── package.json
│── vite.config.js
└── README.md
```

---

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/shree-75/popx-react-assignment.git
```

Move into the project:

```bash
cd popx-react-assignment
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🧪 Run Tests

```bash
npm test
```

---

## 🐳 Run with Docker

### Build the Docker image

```bash
docker build -t popx-app .
```

### Run the Docker container

```bash
docker run -p 5173:5173 popx-app
```

Open:

```
http://localhost:5173
```

---

## ⚙️ Continuous Integration

This project includes a GitHub Actions workflow that automatically:

* Installs dependencies
* Runs tests
* Builds the project
* Verifies the application builds successfully

---

## 📈 Skills Demonstrated

* React Development
* Component-Based Architecture
* Routing
* Frontend Project Structure
* Git & GitHub
* Continuous Integration (CI)
* Docker Containerization
* Unit Testing

---

## 👨‍💻 Author

**Srinivas Nagisetti**

GitHub: https://github.com/shree-75

---

### Future Improvements

* Docker Compose
* Production Docker Image (Nginx)
* Kubernetes Deployment
* Docker Hub Publishing
* Cloud Deployment (AWS/Azure/Render)
* End-to-End CI/CD Pipeline
