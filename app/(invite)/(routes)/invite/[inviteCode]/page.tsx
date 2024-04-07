import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { CurrentProfile } from "@/lib/current-profile";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
};

const InviteCodePage = async ({
  params
}: InviteCodePageProps) => {
  const profile = await CurrentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  if (!params.inviteCode) {
    return redirect("/");
  }

  //this can be optimized
  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
    }
  });

  if (!existingServer) {
    return redirect("/");// can add a toast saying invalid invite code
  }

  let serverId = existingServer?.id;
  const existingMember = await db.member.findFirst({
    where: {
        serverId,
        profileId: profile.id,
    }
  });
  if (existingMember && existingServer) {
    return redirect(`/servers/${serverId}`);
  }

  const newMember = await db.member.create({
    data: {
        profileId: profile.id,
        serverId,
    }
  });
  // till here

  if (newMember) {
    return redirect(`/servers/${serverId}`);
  }
  
  return null;
}
 
export default InviteCodePage;