FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3002
CMD ["npm", "run", "dev"]

# docker build -t login-server2 .
# docker run -dp 3002:3002 login-server2