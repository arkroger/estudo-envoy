docker run --rm -it --network host -v $(pwd)/static-resources.yaml:/static-resources.yaml  -p 9901:9901 -p 10000:10000 envoyproxy/envoy:v1.23.0 -c /static-resources.yaml


Sem token via queryParam

https://saikris12.medium.com/envoy-egress-proxy-side-car-88cbc73b35e0




https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter
https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/local_rate_limit_filter#config-http-filters-local-rate-limit
