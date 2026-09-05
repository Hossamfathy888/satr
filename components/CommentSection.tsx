'use client';

import { useState } from 'react';

// تعريف أنواع البيانات
interface Reply {
  id: number;
  author: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
}

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
  replies: Reply[];
}

// بيانات تجريبية للتعليقات
const initialComments: Comment[] = [
  {
    id: 1,
    author: 'أحمد محمد',
    avatar: '👨‍💻',
    content: 'شرح ممتاز ومبسط! استفدت كثيراً من مثال السمات.',
    date: 'منذ ساعتين',
    likes: 12,
    replies: [
      {
        id: 101,
        author: 'سارة أحمد',
        avatar: '‍🎓',
        content: 'أتفق معك، الدروس واضحة جداً.',
        date: 'منذ ساعة',
        likes: 3,
      },
      {
        id: 102,
        author: 'محمد علي',
        avatar: '‍🏫',
        content: 'هل يمكن إضافة أمثلة أكثر على السمات المخصصة (data-*)؟',
        date: 'منذ 30 دقيقة',
        likes: 5,
      },
    ],
  },
  {
    id: 2,
    author: 'فاطمة حسن',
    avatar: '👩‍💻',
    content: 'محرر الأكواد رائع! أحببت فكرة المعاينة المباشرة.',
    date: 'منذ 5 ساعات',
    likes: 8,
    replies: [],
  },
];

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  // إضافة تعليق جديد
  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    
    const comment: Comment = {
      id: Date.now(),
      author: 'مستخدم جديد',
      avatar: '👤',
      content: newComment,
      date: 'الآن',
      likes: 0,
      replies: [],
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  // إضافة رد على تعليق
  const handleAddReply = (commentId: number) => {
    if (replyText.trim() === '') return;
    
    const reply: Reply = {
      id: Date.now(),
      author: 'مستخدم جديد',
      avatar: '',
      content: replyText,
      date: 'الآن',
      likes: 0,
    };
    
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, reply] }
          : comment
      )
    );
    
    setReplyText('');
    setReplyingTo(null);
  };

  // الإعجاب بتعليق
  const handleLike = (commentId: number, replyId?: number) => {
    if (replyId) {
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id === replyId ? { ...reply, likes: reply.likes + 1 } : reply
                ),
              }
            : comment
        )
      );
    } else {
      setComments(
        comments.map((comment) =>
          comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
        )
      );
    }
  };

  return (
    <div className="mt-16 pt-8 border-t border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <span>💬</span>
        <span>الأسئلة والتعليقات</span>
      </h2>

      {/* نموذج إضافة تعليق جديد */}
      <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-satr-primary/10 flex items-center justify-center text-2xl">
              👤
            </div>
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="اكتب سؤالك أو تعليقك..."
              className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50 focus:border-satr-primary resize-none"
              rows={3}
            />
            <div className="flex justify-end mt-3">
              <button
                onClick={handleAddComment}
                className="bg-satr-primary hover:bg-satr-hover text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                نشر التعليق
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* قائمة التعليقات */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            {/* التعليق الرئيسي */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl">
                  {comment.avatar}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">{comment.author}</h3>
                  <span className="text-sm text-slate-500">{comment.date}</span>
                </div>
                <p className="text-slate-700 mb-3 leading-relaxed">{comment.content}</p>
                
                {/* أزرار التفاعل */}
                <div className="flex items-center gap-4 text-sm">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center gap-1 text-slate-600 hover:text-satr-primary transition-colors"
                  >
                    <span></span>
                    <span>{comment.likes}</span>
                  </button>
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center gap-1 text-slate-600 hover:text-satr-primary transition-colors"
                  >
                    <span>💬</span>
                    <span>رد</span>
                  </button>
                </div>

                {/* نموذج الرد */}
                {replyingTo === comment.id && (
                  <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={`الرد على ${comment.author}...`}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50 resize-none"
                      rows={2}
                    />
                    <div className="flex justify-end gap-2 mt-3">
                      <button
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyText('');
                        }}
                        className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                      >
                        إلغاء
                      </button>
                      <button
                        onClick={() => handleAddReply(comment.id)}
                        className="bg-satr-primary hover:bg-satr-hover text-white font-bold py-2 px-4 rounded-lg transition-colors"
                      >
                        نشر الرد
                      </button>
                    </div>
                  </div>
                )}

                {/* الردود المتداخلة */}
                {comment.replies.length > 0 && (
                  <div className="mt-6 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3 pr-8 border-r-2 border-slate-200">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl">
                            {reply.avatar}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-slate-900 text-sm">{reply.author}</h4>
                            <span className="text-xs text-slate-500">{reply.date}</span>
                          </div>
                          <p className="text-slate-700 text-sm mb-2">{reply.content}</p>
                          <button
                            onClick={() => handleLike(comment.id, reply.id)}
                            className="flex items-center gap-1 text-xs text-slate-600 hover:text-satr-primary transition-colors"
                          >
                            <span>👍</span>
                            <span>{reply.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}