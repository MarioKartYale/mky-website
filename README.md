# Mario Kart Yale Website

## Development Instructions

### Clone the repo

```
git clone https://github.com/MarioKartYale/mky-website.git
```

### Install packages

```
cd client
npm install

cd ../server
npm install
```

### Copy .env files

```
cd ../client
cp .env.example .env

cd ../server
cp .env.example .env
```

### Run the server

```
cd ../server
npm run dev

> server@1.0.0 dev
> nodemon --watch ./ --ext ts --exec ts-node index.ts

[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): **/*
[nodemon] watching extensions: ts
[nodemon] starting `ts-node index.ts`
Initializing server...
Server running on PORT 3001 😈
```

### Run the client

```
cd ../client
npm run dev

  VITE v6.3.5  ready in 105 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### All set!

Make changes in the editor and see them update live in your browser

## Questions?

Contact ryan.fernandes@yale.edu and david.sadka@yale.edu