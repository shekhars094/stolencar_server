### Case Report

POST https://stolencar-server.herokuapp.com/api/case

data: {name,email,car_detail}

### create police

POST https://stolencar-server.herokuapp.com/api/createpolice

data: {name,area}

### get all cases

GET https://stolencar-server.herokuapp.com/api/cases

### case resolved

POST https://stolencar-server.herokuapp.com/api/casedone/:caseId

### get all policies

GET https://stolencar-server.herokuapp.com/api/polices
