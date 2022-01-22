FROM node:14.17.3-buster

# Here we are declaring container working directory
WORKDIR /workspace

# Here we are copying all package.json related files to container working directory
COPY package.json /workspace/package.json
COPY package-lock.json /workspace/package-lock.json

# Here we are installing all packages from package.json
RUN npm install

# Here we are copying all source codes to our container working directory
COPY . .

# Exposing container port
EXPOSE 3000

# Commanding to run the application
CMD [ "npm", "run", "start" ]

# docker build -t react-docker:1.0.0-dev .
# docker images
# docker --rm -it --name web -p 3000:3000 react-docker:1.0.0-dev
# docker ps
# docker exec -it web bash
# ls
# ls -l