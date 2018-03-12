# Make Me Acro

Randomly generate an acroyoga pose to jam with!

# Tasks

#### Goals/Fixes

[ ] Functionality works on Heroku
[ ] Can add pose
[ ] Log in
[ ] Profile
[ ] Filter shows only one copy of option


# Deploying to Heroku!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

`npm run h:deploy` will push your local master branch to your heroku app

`npm run h:migrate` will run your knex migrations on your deployed heroku app

`npm run h:seed` will run your seeds on your deployed app

If ever you need to rollback, you can also just use `npm run h:rollback`
