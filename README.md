
# GUROS ADN

A brief description of what this project does and who it's for


## Requiriements

Node 18.15.0

NPM

PostgresSQL 
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file we have the .env.example file

`PORT`

`DB_HOST`
`DB_NAME`
`DB_USERNAME`
`DB_PASSWORD`


## Run Locally

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run start
```


## API Reference

#### Post all items

```http
  Post /mutation
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `dna` | `string []` |Cadena de adn |

#### Get main page

```http
  GET /stats
```