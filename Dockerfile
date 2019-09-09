# Create image based on the official Node image from dockerhub
FROM node:10-alpine as node

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install npm packages
RUN npm install

# Get all the code needed to run the app
COPY . /app

# Declare environment variables with default values
# Set to run every minute
ENV MINUTE=* HOUR=* DAY_OF_MONTH=* MONTH=* DAY_OF_WEEK=*

# Declare volume
VOLUME ["/app/data"]

# Run the app
CMD node index.js
