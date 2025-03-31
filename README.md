# Learning back end

I wanted to learn backend, and what better way to learn a new concept than just diving head first and trying it. 
No tutorial hell in here!
In this repo, pretty much a summary of my struggles and the process of how I learnt the concepts around back end.

Initially I created my Database, on Postgres, following the postgres documentation. DB was set up, and placed dummy data.
This was fairly straight forward, learning basic sql was straight forward, though, I'm not fluent yet.

I then created a React + Vite app, a simple "pnpm create vite@latest". Tested it and made sure it was working first.

Problem #1:
  I installed Prisma onto this project.
  Tried getting Prisma to work, had a lot of hiccups with the output of "generation Client {}". I had a lot of trouble getting 
  the paths right and no matter what I did, trying to "import { PrismaClient } from "@prisma/client" just kept throwing errors.
  Reference error module not found. I knew it had to do with PrismaClient not existing more or less. Eventually I got rid of
  the output property of the generation client object and it worked!

Problem #2:
  With Prisma being installed, and PrismaClient module existing, its time to start querying the database! or so I thought... Wrote a basic async function to get data from the database but it didnt work... Turns out Prisma has to be on server side.
  Bringing me to the next section.

Researched a bit around node frameworks and found a few frameworks, Nest/Express/Koa etc. I decided to go with Express, no specific
reason. Initialised NodeJs on a new directory, and installed ExpressJs. Then installed and set up Prisma. Last thing to do,
setting up the index.js. Now I'll admit, I used ChatGpt for this, and I may or may have not just copy pasted. In saying that though, I went through the code ChatGPT generated to try comprehend what it is doing.
Ran the node environment, and tried connecting to the localhost url + route. We got a response! The data from the DB is on my screen. I (sort of) did it! I essentially made my first full stack app.
Created a simple fetch on the node url and route via the index.js on the react+vite app, with a console.log on the response and booted the react+vite app.
The site loads up fine and getting a response.

Asked my senpai's if I've got the general idea of it and yippee!
Consolidated both the backend and front end together in a single folder for git. (i didnt check whether it works still or not though...)

Next up, making a full stack to-do app with my own index.js backend express code.

-Ryu 31/03/25