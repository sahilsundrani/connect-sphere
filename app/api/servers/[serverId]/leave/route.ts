import { NextResponse } from "next/server";

import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await CurrentProfile();

    if (!profile) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.serverId) {
        return new NextResponse("Server ID missing", { status: 400 });
    }

    const existingMember = await db.member.findFirst({
      where: {
        profileId: profile.id,
        serverId: params.serverId,
      },
    });

    const server = await db.server.update({
      where: {
        id: params.serverId,
        profileId: { not: profile.id }, 
      },
      data: {
        members: {
          delete: { id: existingMember?.id }, 
        },
      },
    });
    
    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_ID_LEAVE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}