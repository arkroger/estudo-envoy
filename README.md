docker run --rm -it --network host -v $(pwd)/static-resources.yaml:/static-resources.yaml  -p 9901:9901 -p 10000:10000 envoyproxy/envoy:v1.20.6 -c /static-resources.yaml -l debug


Sem token via queryParam

https://saikris12.medium.com/envoy-egress-proxy-side-car-88cbc73b35e0
