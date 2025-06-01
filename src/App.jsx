import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <section className='bg-slate-200 my-4 rounded-lg max-w-sm mx-auto'>
      <img className='w-full rounded-2xl aspect-video object-cover object-top' src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_S.jpg" alt="dog" />
      <div className='p-6 space-y-2'>
        <h2 className='text-3xl font-bold'>My Dogy</h2>
        <p className='text-sm font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit facilis, fuga est dolor sequi eos. Magnam qui animi possimus? Quaerat id rem optio sapiente ipsa deserunt hic reiciendis quos aut?
          Voluptatibus commodi accusamus, adipisci ipsa  necessitatibus quidem eius tempora libero nihil optio ea expedita animi quis!</p>
      </div>
    </section>
  )
}

export default App
