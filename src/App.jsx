import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (<>
    <section className='bg-card my-4 rounded-lg max-w-sm mx-auto shadow-xl border cursor-pointer transition hover:bg-card/50 hover:scale-105 active:scale-95 md:max-w-md'>
      <img className='w-full rounded-2xl aspect-video object-cover object-top' src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_S.jpg" alt="dog" />
      <div className='p-6 space-y-2 md:p-8 lg:p-10'>
        <h2 className='animate-fadenin text-2xl font-bold sm:text-3xl md:text-4xl'>My Dogy</h2>
        <p className='text-sm font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit facilis, fuga est dolor sequi eos. Magnam qui animi possimus? Quaerat id rem optio sapiente ipsa deserunt hic reiciendis quos aut?
          Voluptatibus commodi accusamus, adipisci ipsa  necessitatibus quidem eius tempora libero nihil optio ea expedita animi quis!</p>
      </div>
    </section>
  </>)
}

export default App
