FROM openjdk

ADD install-cf-cli.sh /root/install-cf-cli.sh
ADD install-npm.sh /root/install-npm.sh

RUN ["root/install-cf-cli.sh"]
RUN ["root/install-npm.sh"]
RUN ["root/install-aws.sh"]