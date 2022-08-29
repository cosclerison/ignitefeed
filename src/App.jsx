import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          <Post 
            author="Clerison" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto, cumque est blanditiis animi, expedita eos illo pariatur, esse dolore quibusdam. Architecto, cumque incidunt! Eligendi sit cupiditate enim saepe quos." 
            />
          <Post 
            author="Juliana" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto, cumque est blanditiis animi, expedita eos illo pariatur, esse dolore quibusdam. Architecto, cumque incidunt! Eligendi sit cupiditate enim saepe quos." 
            />
          <Post 
            author="Bianca" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto, cumque est blanditiis animi, expedita eos illo pariatur, esse dolore quibusdam. Architecto, cumque incidunt! Eligendi sit cupiditate enim saepe quos." 
            />
        </main>
    
      </div>
    </div>
  )
}
