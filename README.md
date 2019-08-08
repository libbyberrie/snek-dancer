# 🐍💃 snek-dancer

### `Are we snek? or are we dancer?` -- A python based incrementer game for meme and learning purposes

## 🤠 Herding Sneks for a Definite and Real Purpose

**Snek herding** is tough work, but it's honest work. As a young aspiring herder, you've moved out to your new home in sunny **insert_quippy_town_name_here**, to herd yourself some sneks, feed them some bugs, update your pythons, and grow and nurture them into wonderful, glorious Curly Bois.

## ⚙️ Getting Started

Copy the environment variables file:
- `cp .env.example .env`

### Accessing the virtual environment

The virtual environment is set up with Python3 and Django in the /snekvenv/ directory. You may need to create this for your own machine's settings and python PATH, if so you can do so with:

`python3 -m venv snekenv`

To activate the virtual environment, run:

`. snekvenv/bin/activate`

Typing `deactivate` will exit you out of the environment.

### Creating and migrating databases

To migrate your `SQLite` db, run: `python manage.py migrate`

### Starting the server / frontend build

In development mode, you'll need the backend django server running...

Backend server: `python manage.py runserver`

If you only need to "build" the JS once (for example, for deployment), run:

Frontend build: `npm run build`

If you're actively developing frontend and would like the server to "watch" for changes, you can have webpack run a dev server, to watch for changes and recompile as you go!

Frontend dev server: `npm run dev`

## 🎉 Attributions / Acknowledgements

- Inspiration for this game was taken from the fantastic [Kitten Clicker](http://bloodrizer.ru/games/kittens/), which made us all giggle at a hackathon and got us moving, and from the original (& arguably the best game comprised of Clicking On Things to Get More Things), [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/)
- The Curlyboi is a [PyconAU](https://2019.pycon-au.org) friend. Thanks to Katie McLaughlin for the [SVGs](https://github.com/glasnt/curlyboi) ✨

## 👯‍♂️ Key Contributors

- [Merrin Macleod](http://www.github.com/mermop)
- [Libby Berrie](http://www.github.com/libbyberrie)
- [Drew Noll](http://www.github.com/oheydrew)
