# Vikas Sharma Portfolio Website

A modern portfolio website built with React + Vite frontend and FastAPI backend, featuring an AI assistant that can answer questions about skills, experience, and projects.

## Features

- **Modern UI**: Dark theme with yellow accent color, responsive design
- **AI Assistant**: Chat interface with intelligent responses about portfolio
- **Portfolio Sections**: Profile, Skills, Experience, Projects, Testimonials
- **Real-time Data**: Dynamic content loaded from FastAPI backend
- **No Database Required**: All data is hardcoded for easy setup

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Lucide React (Icons)
- Axios

### Backend
- FastAPI
- Uvicorn

## Project Structure

```
Portfolio/
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── AIAssistant.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
└── backend/           # FastAPI application
    ├── main.py
    └── requirements.txt
```

## Setup Instructions

### Prerequisites

1. **Node.js** (v16 or higher)
2. **Python** (v3.8 or higher)

### 1. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Start the FastAPI server:
```bash
python main.py
```

The backend will be available at `http://localhost:8000`

### 2. Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

### Portfolio Data
- `GET /api/profile` - Get profile information
- `GET /api/skills` - Get all skills
- `GET /api/experiences` - Get work experience
- `GET /api/projects` - Get projects
- `GET /api/testimonials` - Get testimonials

### AI Assistant
- `POST /api/chat` - Chat with AI assistant

### Health Check
- `GET /api/health` - API health status

## Customization

### Updating Your Data

All data is hardcoded in `backend/main.py`. You can easily update:

1. **Profile**: Modify `PROFILE_DATA` dictionary
2. **Skills**: Update `SKILLS_DATA` list
3. **Experience**: Edit `EXPERIENCES_DATA` list
4. **Projects**: Modify `PROJECTS_DATA` list
5. **Testimonials**: Update `TESTIMONIALS_DATA` list

### AI Assistant Responses

The AI assistant uses keyword-based responses. You can customize the responses in the `chat_with_ai` function in `main.py`.

### Styling

- Main styles are in `frontend/src/App.css`
- Color scheme: Dark theme with `#ffd700` (gold) accent
- Responsive design included

## Quick Start

1. **Start Backend**:
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python main.py
```

2. **Start Frontend** (in new terminal):
```bash
cd frontend
npm install
npm run dev
```

3. **Open Browser**: Visit `http://localhost:5173`

## Deployment

### Backend Deployment
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Use production WSGI server like Gunicorn

### Frontend Deployment
- Build for production: `npm run build`
- Deploy to Vercel, Netlify, or similar platforms
- Update API base URL in production

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **AI Chat Assistant**: Ask questions about skills, experience, projects
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized for performance
- **Easy Customization**: Simple to update content and styling

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact Vikas Sharma at vikas.sharma@example.com 