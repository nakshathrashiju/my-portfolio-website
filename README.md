Personal Portfolio

A personal portfolio website built with React, showcasing projects, skills, and a working contact form connected to MongoDB.

🌐 **Live Site:** [nakshathrashijuportfolio.netlify.app](https://nakshathrashijuportfolio.netlify.app)

---

## Features

- Smooth scroll navigation with active section highlighting
- Animated sections using Framer Motion
- Projects showcase with GitHub links and a share modal (WhatsApp, Gmail, LinkedIn, Copy Link)
- Contact form connected to a live backend — messages are saved to MongoDB Atlas
- Fully responsive design for mobile and desktop
- Custom scrollbar and floating background animations

---

## Tech Stack

### Frontend
- React.js
- Framer Motion (animations)
- React Scroll (smooth navigation)
- React Icons
- CSS3 (custom styling, gradients, responsive layout)
- Deployed on **Netlify**

### Backend
- Node.js
- Express.js
- MongoDB Atlas (database)
- Mongoose (ODM)
- CORS
- Deployed on **Render**

---

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── backend/
    ├── server.js
    ├── .env
    └── package.json
```

---

## Getting Started Locally

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/nakshathrashiju/your-repo-name.git
cd your-repo-name
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```
MONGO_URI=mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/portfoliodb
FRONTEND_URL=http://localhost:3000
```

Start the backend server:

```bash
node server.js
```

### 3. Set up the frontend

```bash
cd frontend
npm install
npm start
```

The app will run at `http://localhost:3000`

---

## Deployment

| Service | Purpose |
|---|---|
| Netlify | Frontend hosting with auto-deploy from GitHub |
| Render | Backend hosting (Node/Express server) |
| MongoDB Atlas | Cloud database for contact form submissions |

### Environment Variables

**Render (backend):**
```
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=https://nakshathrashijuportfolio.netlify.app
```

**Netlify (frontend):**
```
REACT_APP_BACKEND_URL=https://my-portfolio-website-pa2y.onrender.com
```

---

## Sections

- **Home** — Introduction and quick links
- **About** — Background and personal info
- **Skills** — Tech stack with proficiency bars
- **Projects** — 8 projects with descriptions, tags, GitHub links, and share options
- **Contact** — Working contact form that saves messages to MongoDB

---

## Contact

**Nakshathra Shiju**
- 📍 Ernakulam, Kerala, India
- 🌐 [nakshathrashijuportfolio.netlify.app](https://nakshathrashijuportfolio.netlify.app)
- 💻 [github.com/nakshathrashiju](https://github.com/nakshathrashiju)
