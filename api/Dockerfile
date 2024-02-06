# Use the official Node.js image from Docker Hub as the base image
FROM node

# Set the working directory inside the container
WORKDIR /usr/src/app

# Set the NODE_ENV environment variable to 'production' to ensure production settings are used
ENV NODE_ENV production

# Copy package.json and package-lock.json files from the host machine to the working directory in the container
COPY package*.json ./

# Display the installed Node.js version
RUN node --version

# Display the installed npm version
RUN npm --version

# Install dependencies using npm ci, which installs dependencies based on package-lock.json for reproducible builds
RUN npm ci --only=production

# Change the user to 'node' to improve security by running the application with a non-root user
USER node

# Copy the application source code from the host machine to the working directory in the container
COPY --chown=node:node ./src .

# Expose port 3000 to allow communication with the containerized application
EXPOSE 3000

# Specify the default command to run the application when the container starts
CMD ["npm", "start"]
