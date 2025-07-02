FROM alpine:3.14

RUN apk add --no-cache prometheus
COPY config/prometheus.yml /etc/prometheus/prometheus.yml

EXPOSE 9090

CMD ["prometheus", "--config.file=/etc/prometheus/prometheus.yml", "--web.listen-address=:9090"]