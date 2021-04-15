### Dependencies
For this project, you will need to have:
1. Node and NPM installed - NPM is distributed with [Node.js](https://www.npmjs.com/get-npm)
```
# Check Node version
node -v
# Check NPM version
npm -v
```


2. Truffle v5.X.X - A development framework for Ethereum. 
```
# Unsinstall any previous version
npm uninstall -g truffle
# Install
npm install -g truffle
# Specify a particular version
npm install -g truffle@5.0.2
# Verify the version
truffle version
```


2. Metamask: 5.3.1 - If you need to update Metamask just delete your Metamask extension and install it again.


3. [Ganache](https://www.trufflesuite.com/ganache) - Make sure that your Ganache and Truffle configuration file have the same port.


4. Others - Install other packages:
```
cd app
npm install

# Remove the node_modules, if necessary. By default, the commented steps below are not required. 
# remove packages
rm -rf node_modules
# clean cache
npm cache clean
rm package-lock.json
# initialize npm (you can accept defaults)
npm init

# install packages
npm install --save  openzeppelin-solidity@2.3
npm install --save  truffle-hdwallet-provider@1.0.17
npm install webpack-dev-server -g
```

### Run the application
1. Start Truffle by running
```
# For starting the development console
truffle develop
# truffle console

# For compiling the contract, inside the development console, run:
compile

# For migrating the contract to the locally running Ethereum network, inside the development console
migrate --reset

# For running unit tests the contract, inside the development console, run:
test
```

2. Frontend - Once you are ready to start your frontend, run the following from the app folder:
```
# cd app
npm run dev
```


### Important
When you will add a new Rinkeyby Test Network in your Metamask client, you will have to provide:

| Network Name | New RPC URL | Chain ID |
|---|---|---|
|Private Network 1|`http://127.0.0.1:9545/`|1337 |
The chain ID above can be fetched by:
```
cd app
npm install web3
node index.js
```


