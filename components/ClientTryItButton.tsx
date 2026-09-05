'use client';

import { useState } from 'react';
import CodeEditorModal from './CodeEditorModal';

export default function ClientTryItButton({ initialCode }: { initialCode: string }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsEditorOpen(true)}
        className="bg-satr-primary hover:bg-satr-hover text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 shadow-lg shadow-satr-primary/30 hover:shadow-xl hover:shadow-satr-primary/40 hover:-translate-y-1"
      >
        جرب بنفسك (Try it Yourself) ✨
      </button>

      <CodeEditorModal 
        isOpen={isEditorOpen} 
        onClose={() => setIsEditorOpen(false)} 
        initialCode={initialCode} 
      />
    </>
  );
}