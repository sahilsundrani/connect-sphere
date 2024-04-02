import { v4 as uuidv4 } from "uuid";
import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

export async function POST(req: Request) {
    try {
        const { name, imageUrl } = await req.json();
        const profile = await CurrentProfile();

        if (!profile) {
            return new NextResponse("Unauthorised", { status: 401 });
        }
        // this can be optimized 
        const server = await db.server.create({
            data: {
                profileId: profile.id,
                name,
                imageUrl,
                inviteCode: uuidv4(),
            }
        });
        const channels = await db.channel.create({
            data: {
                name: "general",
                profileId: profile.id,
                serverId: server.id
            }
        });
        const members = await db.member.create({
            data: {
                profileId: profile.id,
                role: MemberRole.ADMIN,
                serverId: server.id
            }
        });
        // till here
        return NextResponse.json(server);
    } catch (error) {
        console.log("[SERVERS_POST",error);
        return new NextResponse("Internal Error", { status: 500 });
    }
} 