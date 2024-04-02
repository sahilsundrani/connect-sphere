import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();

  //this can be optimized
  const members = await db.member.findMany({
    where:{
        profileId: profile.id
    }
  })

  if(members.length === 0){
    return <InitialModal />;
  }

  const server = await db.server.findFirst({
    where: {
      id: members[0].serverId
    }
  });
  // till here

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

}
 
export default SetupPage;