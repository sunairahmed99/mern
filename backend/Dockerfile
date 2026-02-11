FROM node:24-alpine

# working directory
WORKDIR /app

# package files
COPY package*.json ./

# install dependencies
RUN npm install

# copy source code
COPY . .

# port
EXPOSE 5000

# run dev
CMD ["npm", "run", "dev"]
