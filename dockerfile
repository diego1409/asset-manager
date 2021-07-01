FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install application dependencies in the container
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

# Port in container that exposes the application
# EXPOSE 8080

# Run the command to execute the aplication in the container
ENTRYPOINT [ "npm", "run", "start" ]