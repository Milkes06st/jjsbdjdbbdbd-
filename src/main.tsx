import {StrictMode, useState} from 'react';
import {createRoot} from 'react-dom/client';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import './index.css';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Здесь предполагается отправка на сервер
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative flex flex-col font-sans selection:bg-[#FF3E00] selection:text-white">
      
      {/* Header - Glass Panel */}
      <div className="sticky top-4 md:top-8 w-full px-4 md:px-[60px] z-50">
        <header className="flex justify-between items-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full px-6 sm:px-8 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
          <div className="font-black text-xl md:text-2xl tracking-tight uppercase relative z-10 drop-shadow-md">Авангард / 01</div>
          <div className="font-mono text-[10px] md:text-xs text-[#FF3E00] tracking-[2px] uppercase flex items-center gap-2 relative z-10 bg-black/20 px-4 py-2 rounded-full border border-white/5 shadow-inner backdrop-blur-md">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF3E00] animate-pulse shadow-[0_0_8px_rgba(255,62,0,0.8)]" />
            <span className="drop-shadow-sm mt-0.5">Скоро запуск</span>
          </div>
        </header>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col p-8 md:px-[60px] md:py-10 justify-between relative z-10 w-full">
        {/* Decorative elements from old design */}
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute left-[30px] md:left-[60px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF3E00]/30 to-transparent pointer-events-none hidden sm:block" />

        {/* Hero */}
        <main className="flex-grow flex flex-col justify-center w-full mt-8 md:mt-0">
          <h1 className="text-[100px] sm:text-[140px] md:text-[210px] font-black leading-[0.85] md:leading-[0.8] tracking-[-6px] md:tracking-[-12px] uppercase relative md:-left-[10px]">
            СКО<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>РО.</span>
          </h1>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-10">
              <p className="text-base md:text-lg leading-relaxed text-[#888888] max-w-[380px]">
                Мы создаем новую платформу для визуальных коммуникаций. Лаконичность, мощь и внимание к деталям.
              </p>
              
              <div className="max-w-md w-full">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border border-[#FF3E00] p-4 text-[#FF3E00] text-sm uppercase tracking-widest font-mono bg-[#0A0A0A]"
                  >
                    Заявка принята. Ожидайте.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6 sm:gap-4 items-start sm:items-end">
                    <div className="relative w-full flex-1">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="EMAIL@EXAMPLE.COM"
                        className="w-full bg-transparent border-b border-white/20 px-0 py-2 focus:outline-none focus:border-[#FF3E00] transition-colors text-white placeholder-[#888888] font-mono text-xs uppercase tracking-widest rounded-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group flex justify-center items-center gap-2 px-6 py-2.5 bg-white text-[#0A0A0A] hover:bg-[#FF3E00] hover:text-white font-bold uppercase tracking-widest text-[10px] mt-2 sm:mt-0 transition-colors shrink-0"
                    >
                      <span>Подписаться</span>
                      <Send className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 mt-16 md:mt-0 gap-8">
          <div className="flex flex-wrap gap-6 md:gap-[30px]">
            {['Инстаграм', 'Телеграм', 'Почта'].map((link) => (
              <a key={link} href="#" className="text-[10px] md:text-xs uppercase tracking-[1px] text-white no-underline border-b border-[#FF3E00] pb-1 hover:text-[#FF3E00] transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="text-left md:text-right">
            <div className="text-[10px] uppercase tracking-[2px] text-[#888888] mb-1">Ожидаемая дата</div>
            <div className="text-3xl md:text-5xl font-black leading-none">11.09.67</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
