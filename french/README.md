# French Flashcards

A small static Progressive Web App for French flashcards. It runs without a build step and can be installed to a phone from a hosted URL.

## Run Locally

From this folder:

```sh
python3 -m http.server 5174
```

Then open:

```text
http://localhost:5174
```

## Put It On A Phone

The phone install path needs a public or local-network HTTPS URL. The simplest durable option is GitHub Pages:

1. Create a GitHub repo named `french-flashcards`.
2. Push this folder to that repo.
3. In GitHub, open `Settings -> Pages`.
4. Set the source to the main branch and the root folder.
5. Open the Pages URL on the phone.
6. On iPhone, tap Share, then `Add to Home Screen`. On Android Chrome, use `Install app` or `Add to Home screen`.

After the first load, the service worker caches the app for offline study.

## Edit The Cards

Cards live in `app.js` inside the `decks` array. Each card uses:

```js
{ front: 'bonjour', back: 'hello / good morning', note: 'bohn-ZHOOR' }
```

Replace or expand the starter deck with the final French curriculum.
