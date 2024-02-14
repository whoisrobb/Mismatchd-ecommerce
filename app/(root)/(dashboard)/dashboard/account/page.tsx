import { UserProfile } from "@clerk/nextjs";

const Account = () => {
  return (
    <div className="flex flex-col gap-6">
        <div className="">
            <p className="text-4xl font-bold">Account</p>
            <p className="text-muted-foreground">Manage your account settings.</p>
        </div>
        <UserProfile />
    </div>
  )
}

export default Account;