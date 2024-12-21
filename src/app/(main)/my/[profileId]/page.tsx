import TextLogo from "public/img/logo-text.svg";
import Settings from "@/assets/icons/setting.svg";
import { MainLayout } from "@/components/layout";
import ProfileIdInfo from "./_components";

export default function ProfileIdPage({ params }: { params: { profileId: string } }) {
  const profileId = Number(params.profileId);
  const headerProps = {
    leftIcons: [{ icon: <TextLogo />, path: "/" }],
    rightIcons: [{ icon: <Settings />, path: "/my/setting", size: 24 }],
  };

  return (
    <MainLayout headerProps={headerProps}>
      <ProfileIdInfo profileId={profileId} />
    </MainLayout>
  );
}
