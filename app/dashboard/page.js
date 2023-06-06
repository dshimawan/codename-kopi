import BarChart from "@/components/BarChart";
import RecentLog from "@/components/RecentLog";


export default function Dashboard() {
  return (
    <main className="pt-20 p-4 w-full">
        <div className="flex content-center w-full p-4 pt-6 pb-6 bg-white rounded-lg">
          <div>
            <h1 className="text-3xl font-bold text-green-700">Halo, Admin Kopi!</h1>
          </div>
        </div>
        <div className='pt-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentLog />
        </div>
    </main>
  )
}
