import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/YGMartinS.png",
      name: "Ygor MartinS",
      role: "FullStack Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera." },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa." },
      { type: "link", content: "github.com/YGMartinS/twitter-ui" }
    ],
    publishedAt: new Date("2023-09-28 21:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera." },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa." },
      { type: "link", content: "github.com/YGMartinS/twitter-ui" }
    ],
    publishedAt: new Date("2023-09-30 18:00:00")
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post key={post.id} post={post} />
            )
          })}
        </main>
      </div>
    </>
  )
}

