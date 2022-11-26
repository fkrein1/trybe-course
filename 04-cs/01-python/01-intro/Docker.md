
## Docker Container
docker build -t my-python-app .
docker run -it --rm --name my-running-app my-python-app
docker run -it --rm --name nome-do-seu-script -v "$PWD":/usr/src/myapp -w /usr/src/myapp python:3 python seu-arquivo.py
