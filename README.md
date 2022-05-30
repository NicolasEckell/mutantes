# Mutants

Repository for testing purposes. This app consists in an API rest that checks if an array is mutant or not

## How to install locally

1. Clone the repository: ```git clone https://github.com/NicolasEckell/mutantes.git```

2. Install dependancies: ```npm install```

2. Run the app: ```npm start```

3. Use the API REST

## How to use the API REST in the heroku-deployed environment:

- Use GET or "/health" for Health Check
- Use POST "/mutant" for checking if an array is a mutant or not. You should get http status code 200 if data array it's mutant or 403 if it's not a mutant array.
    - Example of OK json:
    {
        "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    }
    - Example of bad json:
    {
        "dna":["ATGCAA", "CAGTGC", "TTATGT", "AGATGG", "CCCATA", "TCACTG"]
    }

- Use GET "/stats" for getting stats of the app.
