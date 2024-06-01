# Base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your application's code to the working directory
COPY . .

# Build your app
RUN npm run build

# Expose the port your app runs on
EXPOSE 3030

# Define the command to run your app
CMD ["npm", "run", "start:prod"]