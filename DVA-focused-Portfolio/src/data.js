const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Loan Analytics Dashboard",
    description: "Interactive analytical tool processing 10,000 bank loan records to evaluate risk factors, approval patterns, and loan performance. Features borrower segmentation, geographic insights, portfolio composition assessment, and risk analysis using DTI, LTV, and credit score metrics.",
    image: `${base}Loan_Dashboard.png`,
    tags: ["Excel", "Data Analytics"],
    github: "https://github.com/AnanyaSoni2004/Loan-Analytics-Dashboard",
    live: "https://github.com/AnanyaSoni2004/Loan-Analytics-Dashboard"
  },
  {
    name: "Transactions Fraud Detection",
    description: "End-to-end fraud detection analysis using machine learning on financial transaction data. Includes Jupyter notebooks for EDA, feature engineering, and model building alongside Tableau visualizations and structured documentation with DVA-focused portfolio materials.",
    image: `${base}Fraud_detection.png`,
    tags: ["Python", "Jupyter", "Machine Learning", "Tableau"],
    github: "https://github.com/AnanyaSoni2004/E_G14_TransactionsFraudDetection",
    live: "https://github.com/AnanyaSoni2004/E_G14_TransactionsFraudDetection"
  },
  {
    name: "MMM Intelligence Copilot",
    description: "Multi-agent AI system for Marketing Mix Modeling analysts. Enables natural language querying of MMM models with four specialized agents (Analyst, Forecast, RAG Insight, Anomaly Detection) and three-layer guardrails. Built with LLaMA 3.3 70B via Groq, ChromaDB, FastAPI, and Pydantic v2.",
    image: `${base}mmm_proj.png`,
    tags: ["Python", "GenAI", "FastAPI", "LLaMA"],
    github: "https://github.com/AnanyaSoni2004/MMM-Intelligence-Copilot",
    live: "https://github.com/AnanyaSoni2004/MMM-Intelligence-Copilot"
  },
  {
    name: "Crop Yield Prediction",
    description: "ML system predicting agricultural productivity from environmental and soil conditions. Trained on 30,000 samples with a Scikit-learn Linear Regression model, interactive Streamlit UI with parameter sliders, and yield classification (Low/Medium/High). Milestone 1 of a broader agentic agricultural advisory system.",
    image: `${base}Agroagent.png`,
    tags: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
    github: "https://github.com/AnanyaSoni2004/Crop_Yield_Prediction",
    live: "https://github.com/AnanyaSoni2004/Crop_Yield_Prediction"
  },
  {
    name: "QuickAI",
    description: "Production-grade AI SaaS platform integrating OpenAI and Replicate APIs for content and image generation. Features JWT authentication, subscription billing, and scalable architecture. Built with JavaScript and deployed on Vercel.",
    image: `${base}QuickAi.png`,
    tags: ["JavaScript", "React", "Node.js", "GenAI"],
    github: "https://github.com/AnanyaSoni2004/QUICK_AI_Project",
    live: "https://quick-ai-project-delta.vercel.app"
  }
]

export default projects
