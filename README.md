
# ConnectSphere
ConnectSphere is a comprehensive real-time communication platform designed to support group and one-on-one chats, infinite scroll, and audio-video chat features. The platform ensures seamless messaging and robust data management, providing a user-friendly experience across all devices.
## Features
- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & Edit messages in real time for all users
- Create Text, Audio and Video call Channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (tanstack/query)
- Server creation and customization
- Beautiful UI using TailwindCSS and ShadcnUI
- Full responsivity and mobile UI
- Light / Dark mode
- Websocket fallback: Polling with alerts
- ORM using Prisma
- MySQL database using Planetscale
- Authentication with Clerk




## Tech Stack

**Next.js**: React framework for server-side rendering and static site generation.

**MongoDB**: NoSQL database for storing data.

**TailwindCSS**: Utility-first CSS framework for designing responsive user interfaces.

**Uploadthing:** File upload library.

**Clerk**: Authentication and user management for Next.js applications.

**Socket.io**: Real-time communication library for enabling real-time messaging.

**Zod**: TypeScript-first schema declaration and validation library.

**Zustand**: Small, fast, and scalable state management library for React.

**LiveKit**: Web service for faciliating audio and video chat.


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Run Locally

Clone the project

```bash
  git clone https://github.com/sahilsundrani/connect-sphere.git
```

Go to the project directory

```bash
  cd connect-sphere
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=`

`CLERK_SECRET_KEY=`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL=`

`NEXT_PUBLIC_CLERK_SIGN_UP_URL=`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=`

`DATABASE_URL=`

`UPLOADTHING_SECRET=`

`LIVEKIT_API_KEY=`

`LIVEKIT_API_SECRET=`

`NEXT_PUBLIC_LIVEKIT_URL=`

## Support

For support, email sahilsundrani213@gmail.com or join our Slack channel.

