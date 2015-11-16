# How to contribute

If you would like to contribute to the project please follow the guidelines set out below. Keep in mind that they are not here to make your contribution a painful experience, but to simplify our jobs looking through hundreds of issues and pull requests (making it a 30 minute task instead of a 4 hour job!)

## Pull Request

Pull Request for new features, bugs or translations are often appreciated. However please follow the following guidelines to save as much time as possible for the maintainer.

- __Make your commit message as descriptive as possible.__ Include as much information as you can. Explain anything that the file diffs themselves won’t make apparent.
- __Document your pull request__. Explain your fix, link to the relevant issue. A pull request without any comment will get closed.
- __Consolidate multiple commits into a single commit when you rebase.__ If you’ve got several commits in your local repository that all have to do with a single change, you can squash multiple commits into a single, clean, descriptive commit when using git-rebase. When you do, good karma is yours.
- __Make sure the target of your pull request is the relevant dev branch__. Most of bugfix or new feature should go to the `master` branch.
- __Include only commits fixing a specific issue__. If your pull request has unrelated commit, it will get closed.

## Report a bug

Before reporting any issues, please use the search tools to see if someone filed the same bug before.

When creating a new issue make sure to include the following:
- Version of Node in use. Are you running from source? Which revision? Are you using a released build? Which release?
- Your environment. What is your operating system? 32 or 64 bits?
- Step to reproduce. Even if the step is only to run the app, __include it!__ Include the actual result and what you expected.
- Messages you get when running from console with the `--debug` parameter.
- A screenshot of any visual bug.
