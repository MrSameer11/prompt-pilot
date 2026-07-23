import { useState } from 'react';
import axios from 'axios';
import { Sparkles, Plus, MessageSquare, Terminal, User } from 'lucide-react';
import PromptForm from './components/PromptForm';

function App() {
  // States to manage our app's data
  const [chatHistory, setChatHistory] = useState([]); //  chat save
  const [isLoading, setIsLoading] = useState(false); 

  const handlePromptSubmit = async (promptText, category) => {

    const newUserMessage = { role: 'user', text: promptText, category: category };
    setChatHistory((prev) => [...prev, newUserMessage]);
    
    setIsLoading(true); 

    try {
      // 2. Axios backend (Node/Express) request send
      const response = await axios.post('http://localhost:5000/api/improve-prompt', {
        prompt: promptText,
        category: category
      });


      const newAiMessage = { 
        role: 'ai', 
        text: response.data.improvedPrompt 
      };
      setChatHistory((prev) => [...prev, newAiMessage]);

    } catch (error) {
      console.error("API Error:", error);

      setChatHistory((prev) => [...prev, { role: 'ai', text: 'Oops! Something went wrong connecting to the server.', isError: true }]);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="relative flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      {/* MAIN APP CONTENT */}
      <div className="relative z-10 flex w-full h-full">
        
        {/* LEFT SIDEBAR */}
        <div className="w-72 bg-slate-900/50 border-r border-white/10 hidden md:flex flex-col backdrop-blur-xl">
          <div className="p-5 border-b border-white/5 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PromptPilot
            </h2>
          </div>
          
          <div className="p-4">
            <button 
              onClick={() => setChatHistory([])} // Clear chat on click
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] hover:shadow-md"
            >
              <Plus className="w-4 h-4" />
              New Chat (Clear)
            </button>
          </div>
        </div>

        {/* RIGHT MAIN CHAT AREA */}
        <div className="flex-1 flex flex-col relative">
          
          {/* Mobile Header */}
          <div className="md:hidden p-4 bg-slate-950/80 backdrop-blur-md border-b border-white/10 flex items-center gap-3 z-10">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-slate-200">PromptPilot</span>
          </div>

          {/* Chat Display Window */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
            <div className="max-w-3xl mx-auto flex flex-col gap-6 pb-20">
              

              {chatHistory.length === 0 ? (
                <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl backdrop-blur-sm mt-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 mb-1">Welcome to PromptPilot! 👋</h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                     I'm an Expert Prompt Engineer. Enter your basic prompt and category, and 
                     I'll convert it into a highly detailed and effective AI prompt.
                    </p>
                  </div>
                </div>
              ) : (
                // Chat History Loop (Map)
                chatHistory.map((msg, index) => (
                  <div key={index} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    
                    {/* AI Icon (Left side) */}
                    {msg.role === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 mt-1">
                        <Terminal className="w-4 h-4 text-white" />
                      </div>
                    )}

                    {/* Message Bubble */}
                    <div className={`p-4 rounded-2xl max-w-[85%] ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-sm' 
                        : 'bg-white/[0.05] border border-white/10 text-slate-200 rounded-tl-sm whitespace-pre-wrap'
                    } ${msg.isError ? 'border-red-500 text-red-400' : ''}`}>
                      
                      {msg.category && (
                        <span className="text-xs font-bold uppercase opacity-60 block mb-1">Category: {msg.category}</span>
                      )}
                      
                      {msg.text}
                    </div>

                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 mt-1">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))
              )}

            </div>
          </div>

          {/* Input Form Area */}
          <div className="p-4 bg-transparent border-t border-white/5 relative z-10">
             <div className="max-w-3xl mx-auto">
                <PromptForm onSubmit={handlePromptSubmit} isLoading={isLoading} />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;