import { Avatar } from './Avatar'
import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/YGMartinS.png"/>
        <strong>Ygor MartinS</strong>
        <span>FullStack Developer</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20} /> Editar Perfil</a>
      </footer>
    </aside>
  )
}