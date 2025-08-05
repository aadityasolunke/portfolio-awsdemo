// export const projectsData = [
//   {
//     title: "Transformer-Based News Summarization",
//     description: "Implemented news summarization for local languages using transformer models (BERT, GPT-2). Preprocessed vast amounts of local language news data and trained models to generate concise summaries.",
//     technologies: ["PyTorch", "Hugging Face", "BERT", "GPT-2", "NLP"],
//     category: "AI/ML"
//   },
//   {
//     title: "Apple Leaf Disease Detection",
//     description: "Built a classification model using supervised learning to differentiate between healthy and unhealthy apple leaves. Implemented various ML models including SVM, Decision Trees, and CNNs.",
//     technologies: ["Python", "Computer Vision", "CNN", "SVM", "Image Processing"],
//     category: "Computer Vision"
//   },
//   {
//     title: "Air Canvas",
//     description: "Developed a computer vision model to recognize hand gestures and detect patterns designed by users. Used deep learning and image processing algorithms for real-time hand tracking.",
//     technologies: ["Deep Learning", "Computer Vision", "Image Processing", "Real-time Tracking"],
//     category: "Computer Vision"
//   },
//   {
//     title: "HRMaAS - HR Management System",
//     description: "Built secure, scalable RESTful APIs using Django/DRF for Human Resource Management as a Service, digitizing HR workflows including employee data, leave, attendance, and payroll.",
//     technologies: ["Django", "DRF", "JWT", "REST API", "Backend Development"],
//     category: "Web Development"
//   },
//   {
//     title: "SAVIC AI - Agentic AI Systems",
//     description: "Developed intelligent, goal-driven enterprise agents using PyTorch, Hugging Face Transformers, and Azure OpenAI for real-time decision support and automated analytical tasks.",
//     technologies: ["PyTorch", "Azure OpenAI", "FAISS", "Databricks", "Enterprise AI"],
//     category: "AI/ML"
//   }
// ];



export const projectsData = [
  {
    title: "Transformer-Based News Summarization for Local Languages",
    description: "Built a news summarization pipeline using BERT and GPT-2 with PyTorch and Hugging Face Transformers. Preprocessed and tokenized large-scale local language datasets to train Transformer-based models for context-preserving summaries. Applied advanced NLP techniques to improve summary coherence and relevance.",
    technologies: ["PyTorch", "Hugging Face Transformers", "BERT", "GPT-2", "NLP", "Local Language Processing"],
    category: "AI/ML",
    highlights: [
      "Large-scale dataset preprocessing and tokenization",
      "Context-preserving summary generation",
      "Advanced NLP techniques for coherence",
      "Multi-language support implementation"
    ]
  },
  {
    title: "Apple Leaf Disease Detection using Python",
    description: "Developed supervised classification models (SVM, Decision Trees, CNN) to detect apple leaf diseases. Collected and preprocessed image datasets using edge detection, color histogram, and texture analysis. Improved model accuracy through optimized feature extraction pipelines.",
    technologies: ["Python", "Computer Vision", "CNN", "SVM", "Decision Trees", "Image Processing", "Feature Extraction"],
    category: "Computer Vision",
    highlights: [
      "Multi-model approach (SVM, Decision Trees, CNN)",
      "Advanced image preprocessing pipeline",
      "Feature extraction optimization",
      "High accuracy disease classification"
    ]
  },
  {
    title: "Air Canvas (Hand Gesture Recognition and Drawing)",
    description: "Built a real-time computer vision pipeline for hand gesture recognition and virtual drawing. Employed deep learning models for gesture classification and implemented real-time hand tracking for pattern simulation. Enabled trajectory-based pattern creation on a virtual canvas for intuitive user interaction.",
    technologies: ["Computer Vision", "Deep Learning", "Real-time Processing", "Hand Tracking", "Gesture Recognition", "Python"],
    category: "Computer Vision",
    highlights: [
      "Real-time hand gesture recognition",
      "Virtual drawing implementation",
      "Trajectory-based pattern creation",
      "Intuitive user interaction design"
    ]
  },
  {
    title: "FLight Price Prediction",
    description: "Built a  Employed deep learning models for Flight price predicition.",
    technologies: ["Deep Learning", "Python"],
    category: "Machine-Learning",
    highlights: [
      "Real-time hand gesture recognition",
      "Virtual drawing implementation",
      "Trajectory-based pattern creation",
      "Intuitive user interaction design"
    ]
  },
  // {
  //   title: "SAVIC AI - Agentic AI Systems",
  //   description: "Developed agentic AI systems using PyTorch, Hugging Face Transformers, Azure OpenAI for real-time enterprise decision support. Designed cognitive agents capable of semantic retrieval, summarization, and reasoning using FAISS and Azure embeddings. Deployed scalable pipelines on Databricks and Azure.",
  //   technologies: ["PyTorch", "Hugging Face Transformers", "Azure OpenAI", "FAISS", "Azure Embeddings", "Databricks", "Enterprise AI"],
  //   category: "AI/ML",
  //   highlights: [
  //     "Intelligent agentic AI system design",
  //     "Semantic retrieval and reasoning",
  //     "Scalable cloud deployment",
  //     "Enterprise-grade decision support"
  //   ]
  // }
];

export const projectCategories = [
  { name: 'All', value: 'all' },
  { name: 'AI/ML', value: 'AI/ML' },
  { name: 'Computer Vision', value: 'Computer Vision' },
  { name: 'Web Development', value: 'Web Development' }
];