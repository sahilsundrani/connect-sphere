import { redirectToSignIn } from "@clerk/nextjs";

import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

import { redirect } from "next/navigation";
import { ServerSidebar } from "@/components/server/server-sidebar";

const ServerIdLayout = async ({
    children,
    params, 
}: {
    children: React.ReactNode,
    params: {serverId: string}
}) => {
    const profile = await CurrentProfile();

    if(!profile) return redirectToSignIn

    //this part can be optimized
    const server = await db.server.findUnique({
        where: {
            id: params.serverId,
        }
    });

    const member = await db.member.findFirst({
        where: {
          AND: [
            { profileId: profile.id }, 
            { serverId: server?.id }, 
          ]
        }
      });
    if (member === null || !server ) return redirect('/'); 
    // till here
    return (
        <div className="h-full">
        <div 
        className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
          <ServerSidebar serverId={params.serverId} />
        </div>
        <main className="h-full md:pl-60">
          {children}
        </main>
      </div>
    );
}
 
export default ServerIdLayout;