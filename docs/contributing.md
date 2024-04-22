# How to contriubte

This document is for the team, that is to say:
* Théo BACCAM
* Chaima BEKHAOUDA
* Tarek ADAM

Based on:
* https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4
* https://www.conventionalcommits.org/fr/v1.0.0/

## What is a branch, what is commit?

* A branch is for working towards an objective, like adding a feature.
* A commit is a step towards that goal.

## Branch conventions

main: The branch should be the stable starting point for all other branches

### Branche naming conventions

* category/english-description

* Branch categories:
    * feature: adding, refactoring, deleting a feature
    * bugfix: fixing bugs
    * hotfix: for temporary, band-aid, solutions
    * test: experimenting
    * docs: documentation
* feature/shop-interface

## Commit conventions
* type(optional scope): short english description
* types:
    * fix
    * feat: for adding features
    * refactor: changes to code that doesn't change its external behaviour
    * style: making the code more readable
    * docs: documentation
    * chore: miscellaneous tasks
* exemples:
    * fix(shop-interface): fixed text overflow
    * refactor: simplified verifcation functions