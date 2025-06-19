import React, { useState, useRef, useEffect } from 'react';
import { faqs, FAQ } from './faqData';

const ChatBotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleFAQClick = (faq: FAQ) => {
    setMessages((msgs) => [
      ...msgs,
      { from: 'user', text: faq.question },
      { from: 'bot', text: faq.answer },
    ]);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center focus:outline-none"
        aria-label="Open chat bot"
      >
        <span style={{ fontSize: 24 }}>🤖</span>
      </button>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-xs bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
            <span>ChatBot</span>
            <button onClick={() => setOpen(false)} className="text-white text-xl leading-none">×</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto h-64 bg-gray-50">
            {messages.length === 0 && (
              <div>
                <div className="text-gray-700 text-sm mb-2 text-center">Select a question:</div>
                <ul className="space-y-2">
                  {faqs.map((faq, idx) => (
                    <li key={idx}>
                      <button
                        className="w-full text-left px-3 py-2 rounded bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium transition-colors"
                        onClick={() => handleFAQClick(faq)}
                      >
                        {faq.question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-lg text-sm max-w-[70%] ${msg.from === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
            {/* Show FAQ options again after answer */}
            {messages.length > 0 && (
              <div className="mt-4">
                <div className="text-gray-700 text-xs mb-1 text-center">Ask another question:</div>
                <ul className="space-y-2">
                  {faqs.map((faq, idx) => (
                    <li key={idx}>
                      <button
                        className="w-full text-left px-3 py-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium transition-colors"
                        onClick={() => handleFAQClick(faq)}
                      >
                        {faq.question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotWidget; 