import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface ServerIdPageProps {
  params: {
    serverId: string;
  }
};

const ServerIdPage = async ({
  params
}: ServerIdPageProps) => {
  const profile = await CurrentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const isMember = await db.member.findFirst({
    where: {
        profileId: profile.id,
        serverId: params.serverId,
    }
  })

  if(!isMember) return null;

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
    },
    include: {
      channels: {
        where: {  
          name: "general"
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    }
  })

  const initialChannel = server?.channels[0];

  if (initialChannel?.name !== "general") {
    return null;
  }

  return redirect(`/servers/${params.serverId}/channels/${initialChannel?.id}`)
}
 
export default ServerIdPage;