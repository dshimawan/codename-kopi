import BarChart from "@/components/BarChart";
import RecentLog from "@/components/RecentLog";
import TopCards from "@/components/TopCards";
import {redirect} from 'next/navigation';


export default function Home() {
  redirect('/login')
  return (
    <main className='min-h-screen'>
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentLog />
        </div>
    </main>
  )
}
