'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { MessageSquare, Reply, User, Clock } from 'lucide-react'

interface Comment {
  id: string
  content: string
  createdAt: string
  author: {
    name: string
    image?: string
  }
  replies?: Comment[]
}

interface CommentsProps {
  slug: string
}

export default function Comments({ slug }: CommentsProps) {
  const { data: session } = useSession()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  useEffect(() => {
    fetchComments()
  }, [slug])

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}/comments`)
      const data = await response.json()
      setComments(data.comments || [])
    } catch (error) {
      console.error('Error fetching comments:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const submitComment = async (content: string, parentId?: string) => {
    if (!session) {
      setSubmitStatus({
        type: 'error',
        message: 'Vous devez être connecté pour commenter'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch(`/api/blog/${slug}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          parentId
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Commentaire soumis pour modération. Il apparaîtra après validation.'
        })
        
        // Reset forms
        setNewComment('')
        setReplyContent('')
        setReplyingTo(null)
        
        // Refresh comments in a few seconds
        setTimeout(() => {
          fetchComments()
        }, 2000)
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Erreur lors de l\'envoi du commentaire'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erreur de connexion'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
                  <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-8">
        <MessageSquare className="w-6 h-6 text-[#F97316]" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Commentaires ({comments.length})
        </h3>
      </div>

      {/* Status Messages */}
      {submitStatus.type && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' 
            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
        }`}>
          <p className="text-sm font-medium">{submitStatus.message}</p>
        </div>
      )}

      {/* New Comment Form */}
      <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Laisser un commentaire
        </h4>
        
        {session ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
              <span className="font-medium text-gray-900 dark:text-white">
                {session.user.name}
              </span>
            </div>
            
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Écrivez votre commentaire..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent resize-none"
            />
            
            <button
              onClick={() => submitComment(newComment)}
              disabled={!newComment.trim() || isSubmitting}
              className="bg-gradient-to-r from-[#03144A] to-[#F97316] text-white px-6 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmitting ? 'Envoi...' : 'Publier le commentaire'}
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Vous devez être connecté pour laisser un commentaire
            </p>
            <Link
              href="/auth/signin"
              className="bg-gradient-to-r from-[#03144A] to-[#F97316] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Se connecter
            </Link>
          </div>
        )}
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Aucun commentaire pour le moment
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Soyez le premier à commenter cet article !
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
              {/* Main Comment */}
              <div className="flex space-x-4">
                {comment.author.image ? (
                  <img
                    src={comment.author.image}
                    alt={comment.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                      {comment.author.name}
                    </h5>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <time>{formatDate(comment.createdAt)}</time>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    {comment.content}
                  </p>
                  
                  {session && (
                    <button
                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                      className="flex items-center space-x-2 text-sm text-[#F97316] hover:text-[#03144A] transition-colors"
                    >
                      <Reply className="w-4 h-4" />
                      <span>Répondre</span>
                    </button>
                  )}
                  
                  {/* Reply Form */}
                  {replyingTo === comment.id && session && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Écrivez votre réponse..."
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#F97316] focus:border-transparent resize-none mb-3"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            submitComment(replyContent, comment.id)
                          }}
                          disabled={!replyContent.trim() || isSubmitting}
                          className="bg-[#F97316] text-white px-4 py-2 rounded hover:bg-[#03144A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                        >
                          Répondre
                        </button>
                        <button
                          onClick={() => {
                            setReplyingTo(null)
                            setReplyContent('')
                          }}
                          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors text-sm"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex space-x-3 ml-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          {reply.author.image ? (
                            <img
                              src={reply.author.image}
                              alt={reply.author.name}
                              className="w-8 h-8 rounded-full"
                            />
                          ) : (
                            <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h6 className="font-medium text-gray-900 dark:text-white text-sm">
                                {reply.author.name}
                              </h6>
                              <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                                <Clock className="w-3 h-3" />
                                <time>{formatDate(reply.createdAt)}</time>
                              </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {reply.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

