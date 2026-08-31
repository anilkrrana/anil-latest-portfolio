import type { NextApiRequest, NextApiResponse } from "next";
import { profileKnowledge } from "@/data/profileKnowledge";

interface ResponseData {
  answer: string;
  source: "knowledge_base" | "llm" | "fallback";
  suggestedQuestions?: string[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      answer: "Method Not Allowed",
      source: "fallback"
    });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== "string") {
    return res.status(400).json({
      answer: "Please provide a valid question.",
      source: "fallback"
    });
  }

  const cleanQuery = message.trim().toLowerCase();

  // 1. Conversational Greetings & Intent Handling
  const greetings = [
    "hi", "hello", "hey", "hey there", "hi there", "greetings", 
    "good morning", "good afternoon", "good evening", "namaste", "hola", "sup"
  ];
  
  if (greetings.some((g) => cleanQuery === g || cleanQuery.startsWith(g + " ") || cleanQuery.endsWith(" " + g))) {
    return res.status(200).json({
      answer: "Hello! 👋 I am Anil's AI assistant. I'm here to help you learn about Anil's professional background, Java & Spring Boot backend projects, OrderFlow architecture, technical skills, teaching work, or contact information. What would you like to ask?",
      source: "knowledge_base"
    });
  }

  if (cleanQuery.includes("how are you") || cleanQuery.includes("how r u") || cleanQuery.includes("whats up") || cleanQuery.includes("what's up")) {
    return res.status(200).json({
      answer: "I'm doing great, thank you for asking! 😊 I'm ready to answer any questions about Anil's software engineering experience, projects, or technical skills.",
      source: "knowledge_base"
    });
  }

  if (cleanQuery.includes("thank") || cleanQuery.includes("thx") || cleanQuery.includes("awesome") || cleanQuery.includes("great work")) {
    return res.status(200).json({
      answer: "You're very welcome! Feel free to ask if you need anything else about Anil's experience or projects.",
      source: "knowledge_base"
    });
  }

  if (cleanQuery.includes("bye") || cleanQuery.includes("goodbye") || cleanQuery.includes("see ya")) {
    return res.status(200).json({
      answer: "Goodbye! Have a great day ahead. Feel free to reach out to Anil anytime at er.anilkrana@gmail.com.",
      source: "knowledge_base"
    });
  }

  // 2. Check for Recruiter Mode explicit trigger
  if (cleanQuery.includes("recruiter mode") || cleanQuery.includes("recruiter summary") || cleanQuery.includes("quick summary")) {
    return res.status(200).json({
      answer: profileKnowledge.recruiterSummary,
      source: "knowledge_base"
    });
  }

  // 3. Keyword score matching across FAQs
  let bestMatch: { answer: string; score: number } | null = null;

  for (const faq of profileKnowledge.faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (cleanQuery.includes(kw)) {
        score += kw.length;
      }
    }
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { answer: faq.answer, score };
    }
  }

  if (bestMatch && bestMatch.score >= 3) {
    return res.status(200).json({
      answer: bestMatch.answer,
      source: "knowledge_base"
    });
  }

  // 4. Category Fallback Matching
  if (cleanQuery.includes("orderflow") || cleanQuery.includes("backend project") || cleanQuery.includes("pessimistic")) {
    const of = profileKnowledge.orderflow;
    return res.status(200).json({
      answer: `${of.description}\n\nKey Highlights:\n• ${of.keyFeatures.join("\n• ")}\n\nRepository: ${of.repo}`,
      source: "knowledge_base"
    });
  }

  if (cleanQuery.includes("experience") || cleanQuery.includes("capgemini") || cleanQuery.includes("work")) {
    const capg = profileKnowledge.experience[0];
    return res.status(200).json({
      answer: `Anil is a ${capg.role} at ${capg.company} (${capg.period}).\n\nHighlights:\n• ${capg.highlights.join("\n• ")}`,
      source: "knowledge_base"
    });
  }

  if (cleanQuery.includes("skill") || cleanQuery.includes("tech") || cleanQuery.includes("java") || cleanQuery.includes("spring")) {
    return res.status(200).json({
      answer: `Anil's primary technical focus is Java 21, Spring Boot, REST APIs, PostgreSQL, Redis, AWS RDS, Docker, MuleSoft, DataWeave 2.0, Spring Security, and System Design.`,
      source: "knowledge_base"
    });
  }

  if (cleanQuery.includes("contact") || cleanQuery.includes("email") || cleanQuery.includes("reach") || cleanQuery.includes("resume") || cleanQuery.includes("hire")) {
    const c = profileKnowledge.contact;
    return res.status(200).json({
      answer: `You can reach Anil via:\n• Email: ${c.email}\n• GitHub: ${c.github}\n• YouTube: ${c.youtube}\n• Resume: ${c.resume}`,
      source: "knowledge_base"
    });
  }

  if (cleanQuery.includes("teach") || cleanQuery.includes("mentor") || cleanQuery.includes("student") || cleanQuery.includes("youtube")) {
    const t = profileKnowledge.teaching;
    return res.status(200).json({
      answer: `Anil actively mentors ${t.studentCount} covering ${t.topics.join(", ")}. Check out his YouTube channel (${t.youtubeHandle}) or contact him at ${t.contactEmail}.`,
      source: "knowledge_base"
    });
  }

  // 5. Strict Non-Hallucination Fallback
  return res.status(200).json({
    answer: "I don't have enough verified information about that yet. You can contact Anil directly at er.anilkrana@gmail.com or view his resume.",
    source: "fallback"
  });
}
