### First Build: Build Node.js Application ###

# Use the official Node.js image as the base image for the build stage
FROM node AS build

# Set the working directory inside the container for the build stage
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files from the host machine to the working directory in the container
COPY package*.json ./

# Install dependencies using npm ci for reproducible builds
RUN npm ci

# Copy the rest of the application source code from the host machine to the working directory in the container
COPY . .

# Run the build script to compile the application
RUN npm run build


### Second Build: Deploy the Built Application Using NGINX ###

# Use the official NGINX image for the final stage
FROM nginxinc/nginx-unprivileged

# Copy the NGINX configuration file from the host machine to the appropriate location in the NGINX image
COPY nginx.conf /etc/nginx.conf.d/default.conf

# Copy the built application files from the build stage to the NGINX web root directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 8080 to allow external access to the NGINX server
EXPOSE 8080
