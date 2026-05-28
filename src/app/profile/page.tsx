import { AppShell } from "@/components/layout/app-shell";
import { ProfileOverview } from "@/components/progress/profile-overview";

export default function ProfilePage() {
  return (
    <AppShell title="Profile">
      <div className="mx-auto max-w-[1440px]">
        <ProfileOverview />
      </div>
    </AppShell>
  );
}
