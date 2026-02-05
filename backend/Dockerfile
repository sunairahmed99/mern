FROM node:24-alpine

# App directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# App port
EXPOSE 9000

# Start app
CMD ["node", "server.js"]
