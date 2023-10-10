# Openclassrooms Project 6
Develop a user interface for a Python web application.  
[Instructions from the OpenClassrooms repository](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR#readme)

## Just Streamt It
![Just Sreamt It](https://github.com/Mathieusc/OCMovies-UI/assets/62360534/2ce9eea7-a1dc-4c0a-8de9-5076445cc567)  
Display movies in real time sorted by their imdb scores.

Movies categories :
- Top Rated
- Animation
- Horror
- Musical

## Installing

1. Clone my repository or download it [here](https://github.com/Mathieusc/OCMovies-UI/archive/refs/heads/main.zip) as a zip file.
```
git clone https://github.com/Mathieusc/OCMovies-UI.git
```
2. Move to the OCMovies-UI folder:
```
cd OCMovies-UI
```
3. Clone the OpenClassrooms repository or download it [here](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip) as a zip file.
```
git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git
```
4. Move to the OCMovies-API folder:
```
cd OCMovies-API-EN-FR
```
5. Create a virtual environment for the project on Windows:
```
py -m venv env
```
On Linux/Mac:
```
python3 -m venv env
```
6. Activate the virtual environment on Windows:
```
env\Scripts\activate
```
On Linux/Mac:
```
source env/bin/activate
```
7. Install project dependencies:
```
pip install -r requirements.txt
```
8. Create and populate the project database:
```
python manage.py create_db
```
9. Run the server:
```
python manage.py runserver
```
## Using the local website

Open the index.html file with your favorite browser.


## Front-end built with

HTM5L/CSS3 & Vanilla JavaScript
* [Visual Studio Code](https://code.visualstudio.com/) 
