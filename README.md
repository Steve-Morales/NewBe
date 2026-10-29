# NewBe

An AI Assistant to help introduce new developers to a codebase.

# Tech Stack
Backend: FastAPI, PostgresSQL, pgvector
Frontend: ReactJS, Tailwind
CI/CD: pytest, Docker

# FrontEnd
Takes a github URL and asks the backend to process the codebase using an LLM.

The next page takes you to a 3 panel page which has the files, LLM Chat, and code.

# Backend
## API
GET: Repo, Files, File Contents, Call Graph
POST: Repo URL, User Question to LLM

## Database
PostgreSQL will save the repo's files, contents, and symbolic graph.
pgvector will add another column to create the relations between the lines of code and symbolic graph
Python's ast will create the symbolic graph. 

## LLM 
From the result of the Database, the LLM converts what is just a bunch of numbers and letters into understandable english for the user