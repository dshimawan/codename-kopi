import BarChart from "@/components/BarChart";
import RecentLog from "@/components/RecentLog";
import TopCards from "@/components/TopCards";


export default function Dashboard() {
  return (
    <main className="pt-20 p-4">
        <div className="flex content-center w-full p-4 pt-6 bg-white rounded-lg">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <div className="ml-auto mt-2 pr-5">
              <label for="toggle-favorite" className="flex items-center cursor-pointer relative mb-4">
                <input type="checkbox" id="toggle-favorite" className="sr-only peer"/>
                <div className="toggle-bg bg-gray-200 h-6 w-11 rounded-full peer-checked:bg-green-700"></div>
                <span className="ml-3 text-gray-600 text-sm font-medium">Show Favorites</span>
              </label>
          </div>
        </div>
        <div className='pt-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentLog />
        </div>
    </main>
  )
}
