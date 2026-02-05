# Base image
FROM node:20-alpine

# Working directory inside container
WORKDIR /app

# Copy package.json & package-lock.json (agar hai)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite dev server accessible externally
CMD ["npm", "run", "dev", "--", "--host"]
