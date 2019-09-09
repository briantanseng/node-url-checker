# node-url-checker
Just a node-based, cron-style URL checker implemented using ES6.

## Run Using Node

Make sure you have Node installed. In this demo, we use node v10.16.0.

### Setup
```
git clone https://github.com/briantanseng/node-url-checker.git && cd node-url-checker
```

### Download dependencies
```
npm install
```

### Run the Application
```
npm run
```

## Run Using Docker

Make sure you have Docker installed.

### Build the Image
```
docker build -t briantanseng/node-url-checker .
```

### Run the Container

Run in interactive mode
```
docker run --name url-checker -it briantanseng/node-url-checker:latest
```

Run in the background
```
docker run --name url-checker -d briantanseng/node-url-checker:latest
```

Run with ENV variables set
```
docker run --name url-checker \
-e MINUTE=* \
-e HOUR=* \
-e DAY_OF_MONTH=* \
-e MONTH=* \
-e DAY_OF_WEEK=* \
-it briantanseng/node-url-checker:latest
```

Mount a Volume
```
docker run --name url-checker \
-v ~/my-actual-data.txt:/app/data.txt \
-it briantanseng/node-url-checker:latest
```

### Perform Cleanup
```
docker stop url-checker && docker rm url-checker
```
