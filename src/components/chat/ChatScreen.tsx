
import React, { useState } from 'react';
import { ArrowLeft, Send, Paperclip } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello Alexander, I'm Victoria, your dedicated concierge. How may I assist you today?",
      sender: 'concierge',
      timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Simulate response
    setTimeout(() => {
      const conciergeMessage = {
        id: Date.now() + 1,
        text: "I'd be happy to help with that. Could you provide more details about your requirements?",
        sender: 'concierge',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, conciergeMessage]);
    }, 1000);
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center">
        <Link to="/dashboard" className="mr-4">
          <ArrowLeft size={20} />
        </Link>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-luxe-blue/10 flex items-center justify-center text-luxe-blue font-medium">
              VC
            </div>
            <div className="ml-3">
              <h1 className="font-medium">Victoria Chen</h1>
              <p className="text-xs text-gray-500">Your Personal Concierge</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                msg.sender === 'user'
                  ? 'bg-luxe-blue text-white rounded-tr-none'
                  : 'bg-white shadow rounded-tl-none'
              }`}
            >
              <p>{msg.text}</p>
              <p
                className={`text-xs ${
                  msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                } text-right mt-1`}
              >
                {formatTime(msg.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input Box */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <button
            type="button"
            className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
          >
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border-0 focus:ring-0 focus:outline-none px-4 py-2"
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className={`p-2 rounded-full ${
              message.trim() ? 'bg-luxe-blue text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
