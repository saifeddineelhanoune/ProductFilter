mkdir -p elasticsearch/certs


docker run --rm -v $(pwd)/elasticsearch/certs:/usr/share/elasticsearch/config/certs \
  docker.elastic.co/elasticsearch/elasticsearch:8.12.0 \
  bin/elasticsearch-certutil ca --pem --out config/certs/ca.zip


unzip elasticsearch/certs/ca.zip -d elasticsearch/certs/