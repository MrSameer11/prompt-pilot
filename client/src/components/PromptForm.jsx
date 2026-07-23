import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const PromptForm = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState('Coding');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!prompt.trim()) return; 
    
    onSubmit(prompt, category); 
    setPrompt(''); 
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl relative"
    >
      <div className="mb-3">
        <select
        id="category"       
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-slate-800 text-slate-300 border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="Coding">💻 Coding</option>
          <option value="Writing">✍️ Writing</option>
          <option value="Study">📚 Study</option>
          <option value="Business">💼 Business</option>
          <option value="Creative">🎨 Creative</option>
        </select>
      </div>
      
      <div className="flex gap-3 items-end">
        <textarea
        id="prompt"        
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Apna basic prompt yahan type karo..."
          className="flex-1 bg-white/3 text-slate-100 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none min-h-12.5 max-h-37.5"
          rows="2"
        />
        
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0 flex items-center justify-center shadow-lg shadow-blue-500/20"
        >
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        </button>
      </div>
    </form>
  );
};

export default PromptForm;