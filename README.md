# MERN Stack AI_Image Generate
This is a MERN Stack learning from Javascript Mastery on Youtube
## Getting Start Client server
First , You have to run command for install dependencies for client with
```bash
npm i
# or
yarn 
# or
pnpm install
# or
bun install
```

And run a development server  
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
and Open http://localhost:3001 with your browser to see the result of client server.
You can edit or modify on `client/src/App.tsx`.  

## Backend Server
This project uses a MongoDB for Database and Express.js for routing 
*How to run a Backend Server (Backend is server directory)
First, You have to run command for install dependencies for Backend with
```bash
npm i
# or
yarn 
# or
pnpm install
# or
bun install
```
And run a development server  
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
The server would run in port at 8080  
## Environment Variable
Create a file named `.env` or `.env.local` in this project
```env
OPENAI_API_KEY='YOUR_OPENAI_API_KEY'
MONGODB_URL='YOUR_MONGODB_URL'
CLOUDINARY_CLOUD_NAME='YOUR_CLOUDINARY_CLOUD_NAME'
CLOUDINARY_API_KEY='YOUR_CLOUDINARY_API_KEY'
CLOUDINARY_API_SECRET='YOUR_CLOUDINARY_API_SECRET'

```
**MONGODB_URL** , You have to connect to your MongoDB database.
**CLOUDINARY_CLOUD_NAME** , **CLOUDINARY_API_KEY** and **CLOUDINARY_API_SECRET** are required from Clouldinary Image and Video Upload API Platform.
**OPENAI_API_KEY**  is required from Openai Platform.

## Cloudinary Image and Video Upload API Platform
Set up your API key ,API Secret and Cloud name into `.env` or `.env.local` file

##Openai Platform
Set up your API key into `.env` or `.env.local` file