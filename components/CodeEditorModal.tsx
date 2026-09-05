'use client';

import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode: string;
}

export default function CodeEditorModal({ isOpen, onClose, initialCode }: CodeEditorModalProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  // تحديث الكود عند فتح نافذة جديدة
  useEffect(() => {
    if (isOpen) {
      setCode(initialCode);
      setOutput(''); // تصفير المعاينة عند الفتح
    }
  }, [isOpen, initialCode]);

  const runCode = () => {
    setOutput(code);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* الشريط العلوي */}
        <div className="flex justify-between items-center px-6 py-4 bg-satr-primary text-white border-b border-satr-hover">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>محرر الأكواد التفاعلي</span>
            <span className="text-sm font-normal opacity-80">(HTML / CSS / JS)</span>
          </h2>
          <button 
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* منطقة العمل */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* الجزء الأيمن: محرر Monaco */}
          <div className="w-full md:w-1/2 flex flex-col border-b md:border-b-0 md:border-l border-slate-200">
            <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 border-b border-slate-200 flex justify-between">
              <span>الكود المصدري (Source Code)</span>
              <span className="text-xs text-slate-500 font-normal">يدعم Tabbing و Syntax Highlighting</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="html"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: 'on',
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                }}
              />
            </div>
          </div>

          {/* الجزء الأيسر: المعاينة الحية */}
          <div className="w-full md:w-1/2 flex flex-col bg-white">
            <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 border-b border-slate-200">
              المعاينة (Live Preview)
            </div>
            <div className="flex-1 p-4 overflow-auto bg-slate-50">
              {output ? (
                <iframe
                  srcDoc={output}
                  title="Code Preview"
                  className="w-full h-full border-0 rounded-lg shadow-inner bg-white"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                  <span className="text-4xl mb-2">💻</span>
                  <p className="text-lg">اضغط على زر "تشغيل الكود" لرؤية النتيجة هنا</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="flex justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-200">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-bold hover:bg-slate-200 transition-colors"
          >
            إغلاق
          </button>
          <button 
            onClick={runCode}
            className="px-8 py-2.5 rounded-lg bg-satr-primary text-white font-bold hover:bg-satr-hover transition-colors shadow-lg shadow-satr-primary/30 flex items-center gap-2"
          >
            <span>تشغيل الكود</span>
            <span>▶</span>
          </button>
        </div>

      </div>
    </div>
  );
}