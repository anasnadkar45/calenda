import { ModernAnimatedCard } from '../components/dashboard/ModernAnimatedCard';
import { ProfileCard } from '../components/dashboard/ProfileCard';
import { requireUser } from '../lib/hooks'


export default async function Dashboard() {
  const session = await requireUser();
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <ModernAnimatedCard
          title="Feature Highlight"
          description="Discover the power of our latest feature that revolutionizes your workflow."
          icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
        />

        <ProfileCard
          name={session.user?.name as string}
          email={session.user?.email as string}
          profileImage={session.user?.image as string}
        />
      </div>
    </div>
  )
}
