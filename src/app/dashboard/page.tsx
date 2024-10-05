import { CustomCard } from '../components/dashboard/CustomCard';
import { requireUser } from '../lib/hooks'



export default async function Dashboard() {
  const session = await requireUser();
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <CustomCard />
      </div>
    </div>
  )
}
