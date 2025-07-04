from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import uvicorn
from datetime import datetime

# Hardcoded data from Vikas's resume
PROFILE_DATA = {
    "name": "Vikas Sharma",
    "title": "Software Developer | Generative AI, LangChain, LangGraph, FastAPI",
    "email": "vikas.sharma@example.com",
    "phone": "+91 98765 43210",
    "location": "Hyderabad, India",
    "age": 24,
    "about": "I specialize in Generative AI, scalable backend systems, and AI agent frameworks. Strong experience with LangChain, LangGraph, FastAPI, and LLM integrations for real-world applications. Notable strengths: AI pipelines, RAG architectures, agentic AI, secure APIs, Python, CI/CD, vector database integrations, and workflow orchestration.",
    "linkedin": "https://linkedin.com/in/vikas-sharma",
    "github": "https://github.com/vikas-sharma"
}

SKILLS_DATA = [
    # Programming Languages
    {"id": 1, "name": "Python", "category": "Programming", "proficiency": 95},
    {"id": 2, "name": "JavaScript", "category": "Programming", "proficiency": 85},
    {"id": 3, "name": "HTML/CSS", "category": "Programming", "proficiency": 90},
    
    # Frameworks & Tools
    {"id": 4, "name": "FastAPI", "category": "Framework", "proficiency": 90},
    {"id": 5, "name": "React", "category": "Framework", "proficiency": 85},
    {"id": 6, "name": "LangChain", "category": "Framework", "proficiency": 88},
    {"id": 7, "name": "LangGraph", "category": "Framework", "proficiency": 85},
    {"id": 8, "name": "Docker", "category": "Framework", "proficiency": 80},
    {"id": 9, "name": "Jenkins", "category": "Framework", "proficiency": 75},
    {"id": 10, "name": "Git", "category": "Framework", "proficiency": 90},
    
    # Databases
    {"id": 11, "name": "MySQL", "category": "Database", "proficiency": 85},
    {"id": 12, "name": "PostgreSQL", "category": "Database", "proficiency": 80},
    {"id": 13, "name": "ChromaDB", "category": "Database", "proficiency": 85},
    {"id": 14, "name": "FAISS", "category": "Database", "proficiency": 80},
    
    # AI/ML Tools
    {"id": 15, "name": "OpenAI API", "category": "Framework", "proficiency": 90},
    {"id": 16, "name": "Groq API", "category": "Framework", "proficiency": 85},
    {"id": 17, "name": "Prompt Engineering", "category": "Framework", "proficiency": 88},
]

EXPERIENCES_DATA = [
    {
        "id": 1,
        "company": "Pragadas Technologies",
        "position": "Software Developer",
        "start_date": "Feb 2025",
        "end_date": "Present",
        "description": "Built GenAI apps with LLMs (OpenAI, LLaMA) and LangChain for automation. Created FastAPI backend APIs for LLM responses and tool integrations. Designed AI agents for workflow automation. Developed RAG pipeline with LLaMA and internet connectivity.",
        "technologies": "Generative AI, LangChain, LangGraph, FastAPI, LLMs, OpenAI, LLaMA, RAG"
    },
    {
        "id": 2,
        "company": "Tata Elxsi",
        "position": "Engineer",
        "start_date": "Jul 2023",
        "end_date": "Feb 2024",
        "description": "Developed scalable CI/CD pipelines with Jenkins (improved deployment by 40%). Created Python-based Jenkins plugins (reduced downtime by 25%).",
        "technologies": "Jenkins, Python, CI/CD, Automation, MS Teams Integration"
    },
    {
        "id": 3,
        "company": "Tata Elxsi",
        "position": "Intern Trainee",
        "start_date": "Jan 2023",
        "end_date": "Jun 2023",
        "description": "Automated code/data extraction pipelines (processed 100+ JSON files efficiently). Integrated Python and C modules (improved performance by 30%).",
        "technologies": "Python, C, Data Transformation, Data Extraction, JSON Processing"
    }
]

PROJECTS_DATA = [
    {
        "id": 1,
        "name": "RAG-based AI Assistant",
        "description": "Built RAG pipeline with LangChain, Groq API for low-latency LLM. Integrated document ingestion, text-splitting, FAISS-based search. Deployed FastAPI backend for real-time responses. Used LCEL for structured prompts, LLM chains, memory management.",
        "technologies": "LangChain, Groq API, FastAPI, FAISS, RAG, LCEL",
        "github_url": "https://github.com/vikas-sharma/rag-ai-assistant",
        "live_url": "https://rag-assistant-demo.com"
    },
    {
        "id": 2,
        "name": "Portfolio Website with AI Assistant",
        "description": "Modern portfolio website built with React and FastAPI, featuring an AI assistant that can answer questions about skills, experience, and projects. Includes responsive design and real-time chat functionality.",
        "technologies": "React, FastAPI, MySQL, OpenAI API, LangChain",
        "github_url": "https://github.com/vikas-sharma/portfolio-ai",
        "live_url": "https://vikas-portfolio.com"
    }
]

TESTIMONIALS_DATA = [
    {
        "id": 1,
        "name": "John Smith",
        "position": "Senior Developer",
        "company": "Tech Solutions Inc.",
        "content": "Vikas is an exceptional developer with deep expertise in AI and backend systems. His work on our RAG implementation was outstanding and delivered exactly what we needed.",
        "rating": 5
    },
    {
        "id": 2,
        "name": "Sarah Johnson",
        "position": "Project Manager",
        "company": "Innovation Labs",
        "content": "Working with Vikas was a great experience. He consistently delivered high-quality code and was always willing to help the team with complex technical challenges.",
        "rating": 5
    },
    {
        "id": 3,
        "name": "Mike Chen",
        "position": "CTO",
        "company": "StartupXYZ",
        "content": "Vikas's expertise in FastAPI and AI integration helped us build a robust backend system that scaled perfectly with our growing user base.",
        "rating": 5
    }
]

# Initialize FastAPI app
app = FastAPI(
    title="Vikas Sharma Portfolio API",
    description="API for Vikas Sharma's portfolio website with AI assistant",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Profile endpoints
@app.get("/api/profile")
def get_profile():
    return PROFILE_DATA

# Skills endpoints
@app.get("/api/skills")
def get_skills():
    return SKILLS_DATA

# Experience endpoints
@app.get("/api/experiences")
def get_experiences():
    return EXPERIENCES_DATA

# Projects endpoints
@app.get("/api/projects")
def get_projects():
    return PROJECTS_DATA

# Testimonials endpoints
@app.get("/api/testimonials")
def get_testimonials():
    return TESTIMONIALS_DATA

# AI Assistant endpoint (simplified for now)
@app.post("/api/chat")
def chat_with_ai(message: dict):
    user_question = message.get("message", "").lower()
    
    # Simple keyword-based responses
    if "skill" in user_question or "technology" in user_question:
        return {
            "response": "I specialize in Python, FastAPI, LangChain, LangGraph, React, and various AI/ML technologies. My strongest skills include Generative AI, RAG architectures, and building scalable backend systems. I have extensive experience with OpenAI API, Groq API, and vector databases like ChromaDB and FAISS.",
            "timestamp": datetime.now()
        }
    
    elif "experience" in user_question or "work" in user_question:
        return {
            "response": "I have experience working at Pragadas Technologies as a Software Developer focusing on GenAI applications, and at Tata Elxsi as an Engineer where I worked on CI/CD pipelines and automation. I've built various AI-powered applications and improved deployment efficiency by 40%.",
            "timestamp": datetime.now()
        }
    
    elif "project" in user_question:
        return {
            "response": "I've built several notable projects including a RAG-based AI Assistant using LangChain and Groq API, and this portfolio website with an AI assistant. I also have experience with warehouse management systems and various automation solutions.",
            "timestamp": datetime.now()
        }
    
    elif "education" in user_question or "degree" in user_question:
        return {
            "response": "I completed my B.Tech in ECE from NIT Patna with a CGPA of 8.86. I also have research experience with a co-authored paper on THz MIMO systems that was accepted for publication.",
            "timestamp": datetime.now()
        }
    
    elif "contact" in user_question or "email" in user_question:
        return {
            "response": "You can reach me at vikas.sharma@example.com. I'm also available on LinkedIn and GitHub. Feel free to connect with me for any opportunities or collaborations!",
            "timestamp": datetime.now()
        }
    
    else:
        return {
            "response": "Hi! I'm Vikas's AI assistant. I can help you learn about my skills, work experience, projects, education, or contact information. What would you like to know?",
            "timestamp": datetime.now()
        }

# Health check endpoint
@app.get("/api/health")
def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    ) 