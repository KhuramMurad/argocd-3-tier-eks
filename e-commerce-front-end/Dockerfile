# Use Node.js to build the React app
FROM node:16 AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code and build it
COPY . .
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

