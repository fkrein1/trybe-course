FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3002
CMD ["npm", "run", "dev"]

# docker build -t login-server3 .
# docker run -dp 3003:3003 login-server3