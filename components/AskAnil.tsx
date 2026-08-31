import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SparklesIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  UserIcon,
  CpuChipIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowRightIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}

const suggestedPrompts = [
  "Who is Anil?",
  "Tell me about OrderFlow",
  "What are his strongest backend skills?",
  "What is he currently learning?",
  "Does he teach Java/Spring Boot?",
  "How can I contact Anil?",
];

export default function AskAnil() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      sender: "assistant",
      text: "Hi! I'm Anil's AI assistant. Ask me anything about his experience at Capgemini, Java & Spring Boot backend projects, OrderFlow architecture, skills, teaching, or career goals.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue.trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/ask-anil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();
      const assistantMsg: Message = {
        id: `ast-${Date.now()}`,
        sender: "assistant",
        text: data.answer || "I don't have enough verified information about that yet. You can contact Anil directly at er.anilkrana@gmail.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "assistant",
          text: "I am having trouble processing your query. Please reach out to Anil directly at er.anilkrana@gmail.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* 1. INLINE SECTION (Positioned right after About) */}
      <section id="ask-anil" className="py-16 relative bg-command-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cmdCard p-8 md:p-10 border-blue-500/30 relative overflow-hidden bg-gradient-to-r dark:from-blue-950/20 dark:to-neutral-900/40 from-blue-50/60 to-white shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <CpuChipIcon className="w-48 h-48 text-blue-500" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium dark:bg-blue-950/60 bg-blue-100 text-blue-500 border dark:border-blue-800/60 border-blue-200">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>AI KNOWLEDGE ASSISTANT</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 font-outfit tracking-tight">
                  Want to know more about Anil? Ask his AI Assistant!
                </h2>
                <p className="text-sm dark:text-neutral-300 text-slate-600 leading-relaxed max-w-2xl font-light">
                  Get instant, verified answers about Anil&apos;s 2+ years of professional engineering experience at Capgemini, his Java &amp; Spring Boot backend projects, OrderFlow architecture, teaching work, or career goals.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs rounded-xl shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
                    <span>Launch &quot;Ask Anil&quot; Chatbot</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setIsOpen(true);
                      handleSendMessage("Recruiter Summary");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 dark:bg-neutral-800 bg-slate-100 dark:hover:bg-neutral-700 hover:bg-slate-200 dark:text-neutral-200 text-slate-700 font-medium text-xs rounded-xl border dark:border-neutral-700 border-slate-300 transition-all"
                  >
                    <BriefcaseIcon className="w-4 h-4 text-blue-500" />
                    <span>Recruiter Mode Quick Overview</span>
                  </motion.button>
                </div>
              </div>

              {/* Sample Prompts Preview Card (Redesigned & High-Contrast) */}
              <div className="lg:col-span-4 dark:bg-neutral-900/90 bg-white/95 p-5 rounded-2xl border dark:border-neutral-800 border-slate-200 shadow-md backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between pb-1 border-b dark:border-neutral-800/80 border-slate-200">
                  <span className="text-xs font-mono font-bold dark:text-blue-400 text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                    <SparklesIcon className="w-4 h-4" />
                    <span>Quick Questions</span>
                  </span>
                  <span className="text-[10px] font-mono dark:bg-blue-950/80 bg-blue-50 text-blue-500 px-2.5 py-0.5 rounded-full border dark:border-blue-800/40 border-blue-200">
                    Click to Ask
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {suggestedPrompts.slice(0, 4).map((prompt, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ x: 4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setIsOpen(true);
                        handleSendMessage(prompt);
                      }}
                      className="ask-anil-preview-btn text-left text-xs font-medium p-2.5 rounded-xl transition-all flex items-center justify-between group hover:border-blue-500/50 shadow-xs"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                        <span>&quot;{prompt}&quot;</span>
                      </span>
                      <ArrowRightIcon className="w-3.5 h-3.5 text-blue-500/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING BUTTON (Bottom-Right Launcher with Sleek Animation) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs rounded-full shadow-2xl shadow-blue-600/40 border border-blue-400/40 transition-all focus:outline-none"
        aria-label="Ask Anil AI Assistant"
      >
        <SparklesIcon className="w-4 h-4 animate-pulse text-amber-300" />
        <span className="font-mono font-semibold tracking-wide">Ask Anil ✦</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </motion.button>

      {/* 3. CHAT MODAL / PANEL (Compact, Sleek, Professional) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[75vh] h-[490px] dark:bg-[#090a0f]/95 bg-white/95 border dark:border-neutral-800/90 border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl ring-1 ring-blue-500/20"
          >
            {/* Sleek Glassmorphism Header */}
            <div className="p-3.5 border-b dark:border-neutral-800/80 border-slate-200 dark:bg-neutral-900/80 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-blue-500/20">
                  <SparklesIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold dark:text-white text-slate-900 font-outfit">
                    Anil&apos;s AI Assistant
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono dark:text-emerald-400 text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Online / Ready</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleSendMessage("Recruiter Mode")}
                  className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md dark:bg-blue-950/60 bg-blue-50 text-blue-500 border dark:border-blue-800/60 border-blue-200 hover:bg-blue-600 hover:text-white transition-all"
                  title="Recruiter Summary Mode"
                >
                  Recruiter Mode
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg dark:hover:bg-neutral-800 hover:bg-slate-200 dark:text-neutral-400 text-slate-500 transition-colors"
                  aria-label="Close Assistant"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Stream with Staggered Entrance */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs font-sans">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "assistant" && (
                    <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0 text-[10px]">
                      <CpuChipIcon className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[84%] p-2.5 rounded-xl whitespace-pre-wrap leading-relaxed text-xs ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none font-medium shadow-sm"
                        : "dark:bg-neutral-900 bg-slate-100 dark:text-neutral-200 text-slate-800 border dark:border-neutral-800 border-slate-200 rounded-bl-none font-light"
                    }`}
                  >
                    {msg.text}
                    <span
                      className={`block text-[9px] mt-1 text-right font-mono ${
                        msg.sender === "user" ? "text-blue-200" : "dark:text-neutral-500 text-slate-400"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-6 h-6 rounded-lg dark:bg-neutral-800 bg-slate-200 flex items-center justify-center dark:text-neutral-300 text-slate-700 flex-shrink-0 text-[10px]">
                      <UserIcon className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0 text-[10px]">
                    <CpuChipIcon className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-2.5 rounded-xl dark:bg-neutral-900 bg-slate-100 border dark:border-neutral-800 border-slate-200 rounded-bl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Chips (100% Transparent Container Bar) */}
            <div className="p-2 border-t dark:border-neutral-800/60 border-slate-200/60 bg-transparent dark:bg-transparent overflow-x-auto flex items-center gap-2 no-scrollbar">
              <div className="flex-shrink-0 text-[10px] font-mono font-bold dark:text-blue-400 text-blue-600 flex items-center gap-1 pl-1">
                <SparklesIcon className="w-3 h-3" />
                <span>Ask:</span>
              </div>
              {suggestedPrompts.map((prompt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap px-3 py-1 text-xs font-medium dark:bg-neutral-900 bg-slate-100 dark:text-neutral-200 text-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white rounded-full border dark:border-neutral-800 border-slate-300/80 shadow-xs transition-all flex-shrink-0 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{prompt}</span>
                </motion.button>
              ))}
            </div>

            {/* Compact Input Box (Transparent Container Bar) */}
            <div className="p-2.5 border-t dark:border-neutral-800/60 border-slate-200/60 bg-transparent dark:bg-transparent flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                placeholder="Ask about Anil's skills, OrderFlow, experience..."
                className="ask-anil-input flex-1 text-xs font-medium px-3 py-2 rounded-xl border focus:outline-none focus:border-blue-500 caret-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white rounded-xl transition-all shadow-sm"
                aria-label="Send question"
              >
                <PaperAirplaneIcon className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
