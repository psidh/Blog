import Info from '@/components/Info'
import Main from '@/components/Main'

export default function Home() {
  return (
    <div>
      <div className='flex md:flex-row flex-col'>
      <Info />
      <Main />
      </div>
    </div>
  )
}

