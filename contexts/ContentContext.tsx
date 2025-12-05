import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, Message } from '../types';

const defaultContent: SiteContent = {
  hero: {
    tagline: "PRECISION AI FOR HIGH-STAKES GOVERNANCE AND FINANCE",
    headlineTH: "พันธมิตรทางเทคโนโลยีที่เข้าใจความซับซ้อนขององค์กรระดับประเทศ",
    subheadingTH: "Knight Club คือ AI Software House ที่เชี่ยวชาญการพัฒนาระบบที่มีความเสี่ยงสูง ต้องการความแม่นยำ และมาตรฐานความปลอดภัยระดับสถาบันการเงิน",
    bullets: [
      "Government-Grade Compliance",
      "Financial-Grade Security",
      "Specialist AI & MLOps Team"
    ]
  },
  about: {
    story: "Knight Club Co., Ltd. ก่อตั้งขึ้นโดยกลุ่มวิศวกรซอฟต์แวร์และนักวิทยาศาสตร์ข้อมูลที่เชื่อใน 'ความแม่นยำ' (Precision) และ 'ความรับผิดชอบ' (Integrity) ด้วยทีมงานผู้เชี่ยวชาญกว่า 30 ชีวิต เราไม่ได้เป็นเพียงผู้รับจ้างเขียนโปรแกรม แต่เป็น Strategic Partner ที่ช่วยองค์กรขนาดใหญ่เปลี่ยนผ่านสู่ยุค AI อย่างมั่นคง",
    differentiation: "ในขณะที่ตลาดมุ่งเน้นความรวดเร็ว เราให้ความสำคัญกับ 'ความเสถียร' และ 'การตรวจสอบได้' (Auditability) ระบบของเราถูกออกแบบมาให้รองรับกฎระเบียบที่เข้มงวด (PDPA, CSA, ISO) ทำให้เราได้รับความไว้วางใจจากหน่วยงานภาครัฐและธนาคารชั้นนำ"
  },
  services: [
    { id: 1, title: "AI Discovery & Consulting", description: "วิเคราะห์ความเป็นไปได้ทางธุรกิจและเทคโนโลยี วาง Roadmap การนำ AI มาใช้ให้เกิดผลลัพธ์จริง ไม่ใช่แค่ Proof of Concept", iconName: "Search" },
    { id: 2, title: "Enterprise System Integration", description: "เชื่อมต่อระบบ AI เข้ากับ Legacy Systems ขององค์กรอย่างไร้รอยต่อ โดยคำนึงถึงความปลอดภัยของข้อมูลเป็นอันดับแรก", iconName: "Layers" },
    { id: 3, title: "MLOps & Data Pipelines", description: "วางระบบจัดการ Data และ Model Lifecycle แบบอัตโนมัติ เพื่อให้ AI ของคุณฉลาดขึ้นเรื่อยๆ และดูแลง่ายในระยะยาว", iconName: "Activity" },
    { id: 4, title: "Custom AI Development", description: "พัฒนา AI Model เฉพาะทางสำหรับโจทย์ที่ซับซ้อน เช่น Fraud Detection, Credit Scoring หรือ NLP สำหรับเอกสารราชการ", iconName: "Cpu" },
    { id: 5, title: "Secure API Architecture", description: "ออกแบบและพัฒนา API Gateway ที่รองรับ Transaction มหาศาล พร้อมมาตรฐานความปลอดภัยระดับ Banking", iconName: "Lock" },
    { id: 6, title: "Data Governance & Audit", description: "วางระบบจัดการข้อมูลให้สอดคล้องกับกฎหมายและระเบียบข้อบังคับ พร้อมระบบตรวจสอบย้อนหลัง", iconName: "Shield" },
  ],
  industries: [
    { 
      id: 1, 
      name: "Government Agencies", 
      description: "ยกระดับบริการภาครัฐด้วย AI ที่โปร่งใสและตรวจสอบได้",
      painPoints: ["ข้อมูลกระจัดกระจาย (Data Silos)", "กฎระเบียบจัดซื้อที่ซับซ้อน", "ความต้องการความมั่นคงปลอดภัยสูง"],
      iconName: "Landmark"
    },
    { 
      id: 2, 
      name: "Financial Services", 
      description: "สร้างความได้เปรียบทางการแข่งขันด้วย Data-Driven Decision",
      painPoints: ["Fraud Detection ที่ต้องแม่นยำ", "Legacy System ที่แก้ไขยาก", "Regulatory Compliance (ธปท.)"],
      iconName: "Building"
    }
  ],
  products: [
    { 
      id: 1, 
      title: "KnightCMS", 
      subtitle: "Enterprise Content Governance",
      description: "ระบบจัดการเนื้อหาที่ออกแบบมาเพื่อองค์กรที่ต้องการ Workflow การอนุมัติที่รัดกุม รองรับ Multi-site และ Headless Architecture",
      features: ["Role-Based Access Control (RBAC)", "Audit Logs & Versioning", "High-Performance Caching"]
    },
    { 
      id: 2, 
      title: "KnightKMS", 
      subtitle: "Knowledge Management System",
      description: "เปลี่ยนเอกสารมหาศาลให้เป็น Knowledge Base ที่สืบค้นได้ด้วย AI Search (Semantic Search) เหมาะสำหรับงานกฎหมายและระเบียบการ",
      features: ["OCR & NLP Integration", "Semantic Search", "Document Security"]
    },
    { 
      id: 3, 
      title: "KnightOps", 
      subtitle: "AI/ML Monitoring Platform",
      description: "Dashboard สำหรับติดตามการทำงานของ AI Model และ Server Infrastructure แบบ Real-time แจ้งเตือนก่อนระบบล่ม",
      features: ["Model Drift Detection", "Resource Utilization", "Automated Alerting"]
    },
  ],
  missions: [
    {
      id: 1,
      title: "Automated Tax Audit AI",
      problem: "เจ้าหน้าที่ต้องตรวจสอบเอกสารภาษีกว่า 1 ล้านฉบับด้วยมือ ทำให้ล่าช้าและผิดพลาด",
      solution: "พัฒนาระบบ OCR + NLP เพื่อดึงข้อมูลและ Cross-check กับฐานข้อมูลอัตโนมัติ",
      result: "ลดเวลาตรวจสอบลง 80% และเพิ่มความแม่นยำในการตรวจพบความผิดปกติ",
      tags: ["GovTech", "NLP", "Automation"]
    },
    {
      id: 2,
      title: "High-Frequency Credit Scoring",
      problem: "ระบบเดิมใช้เวลาประมวลผลนาน ไม่รองรับ Digital Lending ที่ต้องการผลทันที",
      solution: "Re-architect ระบบ Scoring ใหม่ด้วย Microservices และ Real-time Data Pipeline",
      result: "รองรับ 5,000 TPS (Transactions Per Second) ด้วย Latency ต่ำกว่า 200ms",
      tags: ["FinTech", "Big Data", "High Performance"]
    },
    {
      id: 3,
      title: "Secure Data Exchange Platform",
      problem: "การแลกเปลี่ยนข้อมูลระหว่าง 5 หน่วยงานรัฐทำได้ยากและไม่ปลอดภัย",
      solution: "สร้าง Centralized Data Exchange ที่เข้ารหัสข้อมูลและจัดการสิทธิ์การเข้าถึงแบบละเอียด",
      result: "เชื่อมโยงข้อมูลข้ามหน่วยงานได้สำเร็จภายใต้มาตรฐาน PDPA และ CSA",
      tags: ["Security", "Integration", "Platform"]
    }
  ],
  process: [
    { id: 1, step: "01", title: "Discovery", description: "ทำความเข้าใจโจทย์ ข้อจำกัด และกฎระเบียบขององค์กร" },
    { id: 2, step: "02", title: "Architecture", description: "ออกแบบระบบโดยเน้นความปลอดภัย (Security by Design) และการขยายตัว" },
    { id: 3, step: "03", title: "Development", description: "พัฒนาด้วย Agile Methodology พร้อมการทดสอบระบบอย่างเข้มข้น" },
    { id: 4, step: "04", title: "Deployment", description: "ติดตั้งระบบบน Environment จริง (On-premise / Cloud) พร้อมทำ Penetration Test" },
    { id: 5, step: "05", title: "Maintenance", description: "ดูแลรักษาระบบและถ่ายทอดความรู้ (Knowledge Transfer) ให้ทีมงานลูกค้า" },
  ],
  security: [
    { id: 1, text: "Strict Adherence to PDPA & GDPR Standards" },
    { id: 2, text: "ISO/IEC 27001 Information Security Best Practices" },
    { id: 3, text: "OWASP Top 10 Secure Coding Guidelines" },
    { id: 4, text: "Regular Penetration Testing & Vulnerability Assessment" },
    { id: 5, text: "On-Premise & Private Cloud Deployment Expertise" },
    { id: 6, text: "Comprehensive Audit Logs for All Activities" }
  ],
  team: {
    description: "เราทำงานกันแบบ 'Squad' ที่มีความคล่องตัวสูง แต่ละทีมประกอบด้วย Tech Lead, Senior Developer, Data Scientist และ QA เพื่อให้มั่นใจว่าทุกโปรเจกต์จะได้รับการดูแลอย่างรอบด้าน",
    culturePoints: ["Result-Oriented", "Continuous Learning", "Open Communication"],
    stats: [
      { label: "Team Members", value: "30+" },
      { label: "Senior Engineers", value: "12" },
      { label: "Projects Delivered", value: "50+" },
      { label: "Retention Rate", value: "95%" }
    ]
  },
  contact: {
    address: "35/3 Soi Suppharat 1, Phahonyothin Rd., Samsen Nai, Phaya Thai, Bangkok 10400",
    email: "hello@knightclub.co.th",
    phone: "02-615-5355"
  },
  experience: {
    intro: "A timeline of strategic milestones, marking our evolution from a specialized security team to a premier AI solutions architect.",
    timeline: [
      { id: 1, year: "2019", title: "System Genesis", description: "Established as a specialized security consultancy for financial institutions." },
      { id: 2, year: "2021", title: "AI Integration", description: "Incorporated advanced machine learning capabilities for predictive fraud detection." },
      { id: 3, year: "2023", title: "National Scale", description: "Awarded contract for nationwide government data infrastructure project." }
    ]
  },
  solutions: [
    { id: 1, title: "FinTech Core", description: "High-speed ledger systems.", iconName: "Building" },
    { id: 2, title: "GovTech Secure", description: "Encrypted data exchange protocols.", iconName: "Lock" },
    { id: 3, title: "Retail Intelligence", description: "Customer behavior prediction models.", iconName: "Activity" },
    { id: 4, title: "Health Data", description: "HIPAA-compliant patient record systems.", iconName: "Database" }
  ],
  testimonials: [
    { id: 1, stars: 5, content: "Knight Club transformed our legacy infrastructure into a modern, AI-ready powerhouse.", author: "Somchai T.", role: "CTO", company: "Major Thai Bank" },
    { id: 2, stars: 5, content: "The level of security and attention to detail is unmatched in the industry.", author: "Sarah J.", role: "Director", company: "Gov Agency" },
    { id: 3, stars: 5, content: "We saw a 300% efficiency increase within 3 months of deployment.", author: "David L.", role: "VP of Ops", company: "Logistics Co." }
  ],
  insights: [
    { id: 1, date: new Date().toISOString(), category: "Technology", title: "The Future of AI in Banking", summary: "How Large Language Models are reshaping customer service and fraud detection." },
    { id: 2, date: new Date().toISOString(), category: "Security", title: "Zero Trust Architecture", summary: "Why perimeter security is no longer enough in the age of cloud computing." },
    { id: 3, date: new Date().toISOString(), category: "Case Study", title: "Automating Tax Compliance", summary: "A deep dive into our government sector success story." }
  ]
};

interface ContentContextType {
  content: SiteContent;
  messages: Message[];
  updateContent: (newContent: SiteContent) => void;
  addMessage: (msg: Omit<Message, 'id' | 'date' | 'read'>) => void;
  markMessageRead: (id: string) => void;
  resetToDefaults: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Updated to v4 to ensure new tagline is loaded
    const savedContent = localStorage.getItem('knight_content_v4');
    const savedMessages = localStorage.getItem('knight_messages_v4');
    if (savedContent) setContent(JSON.parse(savedContent));
    if (savedMessages) setMessages(JSON.parse(savedMessages));
  }, []);

  useEffect(() => {
    localStorage.setItem('knight_content_v4', JSON.stringify(content));
    localStorage.setItem('knight_messages_v4', JSON.stringify(messages));
  }, [content, messages]);

  const updateContent = (newContent: SiteContent) => setContent(newContent);

  const addMessage = (msg: Omit<Message, 'id' | 'date' | 'read'>) => {
    const newMessage: Message = { ...msg, id: Date.now().toString(), date: new Date().toISOString(), read: false };
    setMessages(prev => [newMessage, ...prev]);
  };

  const markMessageRead = (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
  };

  const resetToDefaults = () => {
    if (window.confirm('Reset content to defaults?')) {
      setContent(defaultContent);
      window.location.reload();
    }
  };

  return (
    <ContentContext.Provider value={{ content, messages, updateContent, addMessage, markMessageRead, resetToDefaults }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};