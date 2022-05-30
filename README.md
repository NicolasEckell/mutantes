# Mutants

Repository for testing purposes. This app consists in an API rest that checks if an array is mutant or not

## How to install locally

1. Clone the repository: ```git clone https://github.com/NicolasEckell/mutantes.git```

2. Run the app: ```npm start```

3. Use the API REST

## How to use the API REST in the heroku-deployed environment:

- Use GET https://niceckell-mutante.herokuapp.com/ for Health Check
- Use POST https://niceckell-mutante.herokuapp.com/mutant for posting a mutant.
Example of OK json:
    {
        "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    }
Example of bad json:
    {
        "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    }

- Use GET https://niceckell-mutante.herokuapp.com/stats for getting stats of the app.