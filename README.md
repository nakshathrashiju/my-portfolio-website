
 Personal Portfolio Website

A dynamic personal portfolio website built with the MERN stack (React, Node.js, Express, MongoDB) to showcase projects, technical skills, and manage contact inquiries through a live database backend.

🌐 **Live Site:** [nakshathrashijuportfolio.netlify.app](https://nakshathrashijuportfolio.netlify.app)



 Features

* **Smooth Navigation:** Built with custom scroll targeting and active section highlighting.
* **Fluid Animations:** Enhanced UI/UX utilizing `framer-motion` for reveal effects and floating background elements.
* **Interactive Showcase:** Displays 8 distinct projects featuring live/GitHub links and a built-in sharing modal (WhatsApp, Gmail, LinkedIn, and Clipboard copy).
* **Live Contact System:** Fully functional contact form connected to a backend REST API that securely saves client messages to MongoDB Atlas.
* **Responsive Layout:** Mobile-first responsive design featuring a custom scrollbar and optimized media queries.



 Tech Stack

 Frontend
* **Core:** React.js, HTML5, CSS3 (Custom variables, gradients)
* **Libraries:** Framer Motion, React Scroll, React Icons
* **Deployment:** Netlify

 Backend
* **Core:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud)
* **ODM:** Mongoose
* **Middleware:** CORS, Express JSON Parser
* **Deployment:** Render



 Project Structure

```text
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



 Getting Started Locally

 Prerequisites

* Node.js (v16.x or higher recommended)
* MongoDB Atlas Cloud Account or MongoDB Community Server local instance
* Git Installed

 1. Clone the Repository

```bash
git clone [https://github.com/nakshathrashiju/portfolio.git](https://github.com/nakshathrashiju/portfolio.git)
cd portfolio

```

 2. Configure and Run the Backend

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

```

Create a file named `.env` in the root of your `backend/` directory and configure your credentials:

```env
MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster0.xxxxx.mongodb.net/portfoliodb
FRONTEND_URL=http://localhost:3000
PORT=5000

```

Start the backend environment:

```bash
node server.js

```

 3. Configure and Run the Frontend

Open a new terminal window, navigate back to the root, then enter the frontend directory:

```bash
# Navigate to the frontend directory
cd ../frontend

# Install dependencies
npm install

```

Create a `.env` file in your `frontend/` directory for local routing:

```env
REACT_APP_BACKEND_URL=http://localhost:5000

```

Start the React development server:

```bash
npm start

```

The application will launch automatically at `http://localhost:3000`.

---

 Cloud Deployment Architecture

| Service | Architecture Layer | Deployment Mechanism |
| --- | --- | --- |
| **Netlify** | Frontend UI Client | Auto-deployed via GitHub Main Branch |
| **Render** | Node/Express API Server | Hosted Environment (Web Service) |
| **MongoDB Atlas** | Database Layer | Cloud-Managed NoSQL Database |

 Required Environment Variables

 Production Backend (Render Environment)

* `MONGO_URI` = `your_mongodb_atlas_connection_string`
* `FRONTEND_URL` = `https://nakshathrashijuportfolio.netlify.app`

 Production Frontend (Netlify Environment)

* `REACT_APP_BACKEND_URL` = `https://my-portfolio-website-pa2y.onrender.com`

---

 Navigation Sections

* **Home:** Brief introduction, personal branding statement, and call-to-action quick links.
* **About:** Background timeline and professional summary.
* **Skills:** Comprehensive breakdown of technical stack paired with animated proficiency metrics.
* **Projects:** Complete catalog showcasing 8 core projects featuring dynamic content tags and deep-linking to repositories.
* **Contact:** Interactive client form backed by real-time database validation and persistence layers.

---

📬 Contact & Links

**Nakshathra Shiju**

* 📍 Ernakulam, Kerala, India
* 🌐 [Live Portfolio](https://nakshathrashijuportfolio.netlify.app)
* 💻 [GitHub Profile](https://github.com/nakshathrashiju)

