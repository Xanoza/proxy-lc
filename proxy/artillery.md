## Proxy Artillery stress test results


#### yaml file
```
config:
  target: 'http://localhost:8008'
  phases:
    - duration: 60
      arrivalRate: 1000
  http:
    pool: 10
  defaults:
    headers:
      x-my-service-auth: '987401838271002188298567'
scenarios:
  - flow:
    - get:
        url: "/100000"
```







#### GET results

```
All virtual users finished
Summary report @ 14:52:19(-0800) 2019-03-09
  Scenarios launched:  60000
  Scenarios completed: 60000
  Requests completed:  120000
  RPS sent: 1083.91
  Request latency:
    min: 0.7
    max: 149.1
    median: 1.6
    p95: 8.8
    p99: 51.5
  Scenario counts:
    0: 60000 (100%)
  Codes:
    200: 60000
    301: 60000


```