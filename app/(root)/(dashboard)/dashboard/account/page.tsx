import DashboardShell from "@/components/layouts/dashboard-shell";
import { UserProfile } from "@clerk/nextjs";

const Account = () => {
  return (
    <DashboardShell
      title="Account"
      subtitle="Manage your account settings."
    >
      <UserProfile />
    </DashboardShell>
  )
}

export default Account;