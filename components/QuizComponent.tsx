'use client';

import { useState } from 'react';
import { Quiz } from '@/lib/lessons'; // <-- تم تصحيح المسار هنا من data إلى lib

interface QuizComponentProps {
  quiz: Quiz;
}

export default function QuizComponent({ quiz }: QuizComponentProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    if (selectedOption === null) return;
    setShowResult(true);
    setIsCorrect(selectedOption === quiz.correctAnswer);
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  return (
    <div className="mt-12 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📝</span>
        <h3 className="text-xl font-bold text-slate-800">اختبر فهمك</h3>
      </div>

      <p className="text-lg text-slate-700 mb-6 font-medium">{quiz.question}</p>

      <div className="space-y-3 mb-6">
        {/* تم إضافة الأنواع (string, number) صراحةً لإسكات خطأ TypeScript */}
        {quiz.options.map((option: string, index: number) => {
          let optionStyle = "bg-white border-slate-200 hover:border-satr-primary hover:bg-slate-50";
          
          if (showResult) {
            if (index === quiz.correctAnswer) {
              optionStyle = "bg-green-50 border-green-500 text-green-800";
            } else if (index === selectedOption && index !== quiz.correctAnswer) {
              optionStyle = "bg-red-50 border-red-500 text-red-800";
            } else {
              optionStyle = "bg-slate-50 border-slate-200 opacity-60";
            }
          } else if (selectedOption === index) {
            optionStyle = "bg-satr-primary/10 border-satr-primary text-satr-primary";
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && setSelectedOption(index)}
              disabled={showResult}
              className={`w-full text-right p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${optionStyle} ${!showResult ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
                showResult && index === quiz.correctAnswer ? 'border-green-500 bg-green-500 text-white' :
                showResult && index === selectedOption ? 'border-red-500 bg-red-500 text-white' :
                selectedOption === index ? 'border-satr-primary bg-satr-primary text-white' : 'border-slate-300 text-slate-500'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="font-medium">{option}</span>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-bold text-lg">
            {isCorrect ? '🎉 إجابة صحيحة! أحسنت.' : '❌ إجابة خاطئة. حاول مرة أخرى.'}
          </p>
        </div>
      )}

      <div className="flex justify-end">
        {!showResult ? (
          <button
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className={`px-6 py-2.5 rounded-lg font-bold transition-colors ${
              selectedOption === null 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-satr-primary text-white hover:bg-satr-hover'
            }`}
          >
            تحقق من الإجابة
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="px-6 py-2.5 rounded-lg bg-slate-200 text-slate-700 font-bold hover:bg-slate-300 transition-colors"
          >
            إعادة المحاولة
          </button>
        )}
      </div>
    </div>
  );
}