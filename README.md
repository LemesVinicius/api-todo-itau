# api-todo-itau

## Api Calls
### Todo
##### POST
Save Task
```bash 
  curl -H "Content-Type: application/json" -X POST --data '{"name":"Task123"}' http://localhost:3000/api/todo
```
##### GET
Get all Tasks
```bash
curl -X GET http://localhost:3000/api/todo
```
##### PUT
Edit Task
```bash 
curl -H "Content-Type: application/json" -X PUT --data '{"name":"task345"}' http://localhost:3000/api/todo/:id
```
##### DELETE
Delete Task
```bash 
curl -X DELETE http://localhost:3000/api/todo/5d93a51cb8aea70381479385
```
### Health Check
##### GET
Get App Heath
```bash
curl -X GET http://localhost:3000/api/healthcheck
```
### Metrics
##### GET
Get App Metrics
```bash
curl -X GET http://localhost:3000/api/metrics
```
