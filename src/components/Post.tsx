import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { ChangeEvent, FormEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

export interface PostType {
  id: number,
  author: {
    name: string,
    role: string,
    avatarUrl: string
  },
  publishedAt: Date,
  content: { 
      type: 'paragraph' | 'link', 
      content: string
    }[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm", { locale: ptBR })
  const publishedAtFromNow = formatDistanceToNow(post.publishedAt, { locale: ptBR, addSuffix: true })

  const isNewCommentEmpty = newCommentText.length === 0

  function handleNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentId: string) {
    const commentsWithoutDeleted = comments.filter(c => c !== commentId);
    setComments(commentsWithoutDeleted)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={post.publishedAt.toISOString()}>{publishedAtFromNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>        
          } else if (line.type === "link") {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea 
          placeholder="Comente aqui..."
          onChange={handleNewCommentChange}
          value={newCommentText}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  )
}