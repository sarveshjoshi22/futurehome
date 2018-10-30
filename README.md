# futurehome
webpack2 config settings JIT / AOT compile with lazy Load

### Quick start
```bash
# clone  repo
git clone https://github.com/sarveshjoshi22/futurehome

# change directory to repo
cd futurehome

# install the repo with npm
npm install

# run server for dev mode with webpack-dev-server
# this will run server on localhost:7777
npm start

# build angular App with JIT compile
npm run build

# build angular App with AOT compile
npm run build:aot

# If you do not have webpack module globally run this first
npm install -g webpack@^2.2.1

# If you do not have rimrak module globally run this first
npm install -g rimraf



# You can set global variables in /src/app/app.config.ts
# Then you can use this with service's dependency injection in any where# futurehome
# futurehome
