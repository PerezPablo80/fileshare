#  Fileshare
Example of how to use a folder for file sharing in a server and access it with React.

## How to obtain this Code
If you don't know how to obtain this code, do as follows:
`git clone https://github.com/PerezPablo80/fileshare.git` on the root folder. This will download all the code.

You will have two folders:
- client
- server

The server has the code in Node.JS for serving the requests from the client.
The client is a React app consisting in two pages:
- Upload a file
- Download files

##  On the server
<div>The folder for storing files is <span style="color:red">/files</span></div>
If you want to change it, just modify the env variable

###  How to start everything.
There are two ways to start everything.
####  Without Docker

If you don't use Docker, just open two consoles:

On the first one:
- go to the server folder
- `npm install` (this will install all the node modules)
- `node server.js` (this will actually start the server, don't close it)

On the second one:
- go to the client folder
- `npm install`  (this will install all the node modules)
- `npm start` (this will actually lunch the react app)

With this, the URL will pop up automatically, but if you didn't change any port, the url should be:
http://localhost:3002

#### With Docker
If you have docker installed (and docker-compose), just:
- go to the root folder
- `docker-compose build` (if needed sudo docker-compose build)
- `docker-compose up`

This will open the same url
