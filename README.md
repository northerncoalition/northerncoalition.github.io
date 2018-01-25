# Northern Coalition website

## requirements

- node >= v9.4.0
- npm >= 5.6.0
- ruby >= 2.4.0
- rubygems >= 2.6.8

## developement

Install dependencies:

```shell
npm install
```

## usage

Update the writeups from the https://ctftime.org/:

```shell
bin/update
```

## Use Travis CI to update the writeups

[Enable Travis CI for your repo](https://travis-ci.org/profile/).

[Creating a GitHub access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

Install the [gem travis](https://rubygems.org/gems/travis/):

```shell
gem install travis
```

Encrypt your GitHub access token and account name in the Travis environment:

```shell
travis encrypt GH_TOKEN=<your access token> --add
travis encrypt GH_USERNAME=<your account name> --add
```

[Enable CRON Job on Travis CI](https://docs.travis-ci.com/user/cron-jobs/).

Once Travis CI build is complete it will run `bin/update` which update `data/writeups.json`.

Then it'll run `.travis/push.sh` wich commit and push the new writeups on the current branch only if the branch is `master`.
