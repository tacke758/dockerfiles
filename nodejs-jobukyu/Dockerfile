FROM dockerfile/nodejs

# set up jobukyu
WORKDIR /
RUN git clone https://github.com/webcast-io/jobukyu
WORKDIR /jobukyu
RUN npm install && npm run config
ADD config /jobukyu/config
EXPOSE 3800

ENTRYPOINT /bin/bash -c "npm start"
