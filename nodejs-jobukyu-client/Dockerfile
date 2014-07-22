FROM dockerfile/nodejs

# set up jobukyu
WORKDIR /
RUN mkdir /nodejs-jobkyu-client
WORKDIR /nodejs-jobkyu-client
ADD package.json /nodejs-jobkyu-client/package.json
RUN npm install
ADD sample.js /nodejs-jobkyu-client/sample.js

ENTRYPOINT node sample.js
