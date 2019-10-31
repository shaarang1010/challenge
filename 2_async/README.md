This folder [contains a script](async.js) that does the following:

1. Reads in a list of search terms from `search.txt`.
2. Runs searches for people matching these terms in parallel using the Star Wars API.
3. Saves a `names.txt` file when complete that contains the first matching character name in the results for the search query, or `No results` if none are found.

The functions in `async.js` are currently using callbacks. Convert the functions to use Promises instead of callbacks, and use async/await in `main()`. Clean up the code where possible.

The console output for the success path should remain the same after the refactor.

Do not add any external dependencies.
