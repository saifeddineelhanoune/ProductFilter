FROM nginx:1.28-alpine

ENV NGINX_ENTRYPOINT_QUIET_LOGS=0

# RUN mkdir -p /var/log/nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
