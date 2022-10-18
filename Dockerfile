FROM node:slim
WORKDIR /usr/src/app
COPY . .
RUN npm install  
RUN npx tsc
RUN useradd -r ping
USER ping
CMD node build/app.js
