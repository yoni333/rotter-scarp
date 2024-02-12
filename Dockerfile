FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .

ARG startPostDefult=620000
ARG startAmountDefult=10
ENV startPost=${startPostDefult}
ENV pageAmount=${startAmountDefult}
RUN echo "defualt CMD wil be : node ./src/server.js  ${startPost} ${pageAmount}"  
CMD    node ./src/index.js  ${startPost} ${pageAmount} 
