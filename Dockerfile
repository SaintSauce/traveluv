FROM node:20-alpine

# When building the image, the commands are executed in this directory
WORKDIR /traveluv

# Copy the package.json file to the current working directory
COPY client/package.json ./client/

# Change to the client directory
WORKDIR /traveluv/client

# Copy the rest of the client files
COPY client/public/ ./public/
COPY client/src/ ./src/

# Install all dependencies specified in package.json
RUN npm install

# Go back to the main directory
WORKDIR /traveluv

CMD ["npm", "run", "dev"]