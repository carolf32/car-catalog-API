# 🚗 Car catalog API

Made with Typescript and Express's framework. For class relationships, I used dependency injections using the Tsyringe library. Validations and serializations were made with Zod library.

### Each car should be composed by:
|key|type|required?|
|---|----|---------|
|id | primary key | uuid|
|name | text | required|
|description | text | required|
|brand | text | required|
|year | number | required|
|km | number | required|

### Routes:
|route|purpose|
|-----|-------|
|POST /cars | Car insertion route|
|GET /cars | Reading all cars route|
|GET /cars/:id | Individual car reading route|
|PATCH /cars/:id | Updating car route|
|DELETE /cars/:id | Deleting car route|

### Expected behavior:
#### POST/CARS 
#### Body pattern
```
{
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}
```
#### Response pattern
```
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}
```
#### Possible errors
STATUS (400) when the body is not compatible

#### GET/CARS 
#### Body pattern
```
[
   {
      "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
      "name": "Car name",
      "description": "Car description",
      "brand": "Card brand",
      "year": 2023,
      "km": 10000
   }
]
```

#### Response pattern
```
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}
```

#### Possible errors
STATUS (400) car not found

```
{
    "message": "Car not found."
}
```

#### PATCH/CARS 
#### Body pattern

```
{
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Card brand updated",
    "year": 2022,
    "km": 20000
}
```
All fields are optional

#### Response pattern
```
{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Card brand updated",
    "year": 2022,
    "km": 20000
}
```

#### Possible errors
STATUS (404) car not found, STATUS (400) body is not compatible

```
{
    "message": "Car not found."
}
```

#### DELETE/CARS 
This route does not have a response body, if successful, the Status returned should be 204.
#### Possible errors
STATUS (400) car not found

```
{
    "message": "Car not found."
}
```
