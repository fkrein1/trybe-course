FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm", "run", "dev"]

# docker build -t login-server .
# docker run -dp 3001:3001 login-server