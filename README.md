
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

1st page after Sign-up, it will take a mandatory server to allow further operations.

<img width="1440" alt="Screenshot 2024-07-08 at 4 33 40 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/585e15e3-5968-4f1c-9b4f-fb92f3cbb2bd">

Home page of server,

<img width="1440" alt="Screenshot 2024-07-08 at 4 33 59 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/900c2728-f9b6-406a-8ec1-82c8677e3569">


<img width="1440" alt="Screenshot 2024-07-08 at 4 38 54 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/a65678cb-41ca-4d59-80f4-dab68bcdbc1e">
<img width="1440" alt="Screenshot 2024-07-08 at 4 38 39 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/e463480d-2828-4e0c-9818-4d5b08081cfa">
<img width="1440" alt="Screenshot 2024-07-08 at 4 38 27 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/07f1fc40-2e96-4f46-a09c-18a27f3e8d08">
<img width="1440" alt="Screenshot 2024-07-08 at 4 38 19 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/6762b740-3aec-4f3f-b7bf-85aca204ecd7">
<img width="1440" alt="Screenshot 2024-07-08 at 4 37 50 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/16bb8dc5-4a9f-4dd7-9ca9-b49c203f124d">
<img width="1440" alt="Screenshot 2024-07-08 at 4 37 33 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/7dc51bb4-6bb1-4138-a726-9294915d3fdb">
<img width="1440" alt="Screenshot 2024-07-08 at 4 37 18 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/e92fab9e-cf77-4337-9871-d45bc5c56d8c">
<img width="1440" alt="Screenshot 2024-07-08 at 4 37 09 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/958638bd-6c13-4e7f-8b75-98d50f4b8e3e">
<img width="1440" alt="Screenshot 2024-07-08 at 4 35 56 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/4af336e5-3544-4224-9952-09ef7fbb7856">
<img width="1440" alt="Screenshot 2024-07-08 at 4 35 43 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/b96e8524-f1e7-4e8c-be59-db9544fc1380">
<img width="1440" alt="Screenshot 2024-07-08 at 4 35 25 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/8974f727-218f-4fa3-8e34-130b312dcf1c">
<img width="1440" alt="Screenshot 2024-07-08 at 4 35 18 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/1662bd50-f237-4d54-94a5-3e6cd2c5f768">
<img width="1440" alt="Screenshot 2024-07-08 at 4 35 11 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/ccbf3145-d6e9-4d59-9b30-b60aeb0b2183">
<img width="1440" alt="Screenshot 2024-07-08 at 4 35 01 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/1fdb2103-bccf-452d-81c9-1548b5dbd54b">
<img width="1440" alt="Screenshot 2024-07-08 at 4 34 47 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/ccc428c9-d4cc-45ea-ae40-4540bdc23f90">
<img width="1440" alt="Screenshot 2024-07-08 at 4 34 40 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/80f35b62-29b1-47a5-8622-bb073e5346e5">
<img width="1440" alt="Screenshot 2024-07-08 at 4 34 25 AM" src="https://github.com/sahilsundrani/connect-sphere/assets/88895325/2e91dcad-c753-437c-97c6-5b152d04daf3">


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

