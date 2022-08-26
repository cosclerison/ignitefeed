import { Post } from './Post';

export function App() {
  return (
    <div>
    <h1>Ignite Feed</h1>
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
    </div>
  )
}
