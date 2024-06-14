# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Generate the Prisma Client
RUN npx prisma generate

# Expose the port the server will run on
EXPOSE 5000

# Define the command to run the application
CMD ["yarn", "start"]
