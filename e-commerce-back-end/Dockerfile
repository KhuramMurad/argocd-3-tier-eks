# Use the Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]

