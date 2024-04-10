import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function DELETE(
  req: Request,
  { params }: { params: { channelId: string } }
) {
  try {
    const profile = await CurrentProfile();
    const { searchParams } = new URL(req.url);

    const serverId = searchParams.get("serverId");

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!serverId) {
      return new NextResponse("Server ID missing", { status: 400 });
    }

    if (!params.channelId) {
      return new NextResponse("Channel ID missing", { status: 400 });
    }

    const isValidMember = await db.member.findFirst({
        where: {
            profileId: profile.id,
            serverId,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR],
            } 
        }
    })

    if(!isValidMember){
        return new NextResponse("Member is not part of server or doesn't have access to delete channel", { status: 401 });
    }

    const channel = await db.channel.delete({
        where: {
            id: params.channelId,
            serverId,
            name: {
                not: "general",
            },
        },
    })

    return NextResponse.json(channel);
  } catch (error) {
    console.log("[CHANNEL_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
    req: Request,
    { params }: { params: { channelId: string } }
  ) {
    try {
      const profile = await CurrentProfile();
      const { name, type } = await req.json();
      const { searchParams } = new URL(req.url);
  
      const serverId = searchParams.get("serverId");
  
      if (!profile) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      if (!serverId) {
        return new NextResponse("Server ID missing", { status: 400 });
      }
  
      if (!params.channelId) {
        return new NextResponse("Channel ID missing", { status: 400 });
      }

      if (name === "general") {
        return new NextResponse("Name cannot be 'general'", { status: 400 });
      }

      const isValidMember = await db.member.findFirst({
          where: {
              profileId: profile.id,
              serverId,
              role: {
                in: [MemberRole.ADMIN, MemberRole.MODERATOR],
              } 
          }
      })
  
      if(!isValidMember){
          return new NextResponse("Member is not part of server or doesn't have access to edit channel", { status: 401 });
      }
  
      const channel = await db.channel.update({
        where: {
          id: params.channelId,
          serverId,
          NOT: {
              name: "general",
          },
        },
        data: {
          name,
          type,
        }
      })
  
      return NextResponse.json(channel);
    } catch (error) {
      console.log("[CHANNEL_ID_DELETE]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }