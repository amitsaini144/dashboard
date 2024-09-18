import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import ColorCard from "@/components/ColorCard"
import GraphCard from "@/components/GraphCard"
import AnnouncementCard from "@/components/AnnouncementCard"
import ScheduleCard from "@/components/ScheduleCard"
import ActivityCard from "@/components/ActivityCard"
import { colorCardData, graphCardData } from "@/store/data"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white py-6 px-8">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex flex-col gap-6">

                <div className="flex flex-col sm:flex-row gap-6">
                  {colorCardData.map((data) => (
                    <ColorCard key={data.id} title={data.title} bgColor={data.bgColor} number={data.number} description={data.description} textColor={data.textColor} />
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  {graphCardData.map((data) => (
                    <GraphCard key={data.id} title={data.title} number={data.number} men={data.men} women={data.women} percentage={data.percentage} />
                  ))}
                </div>

                <AnnouncementCard />

              </div>
            </div>

            <div className="col-span-1 lg:col-span-1">
              <div className="flex flex-col md:flex-row lg:flex-col gap-6">
                <ActivityCard />
                <ScheduleCard />
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}