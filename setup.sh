command -v brew >/dev/null 2>&1 || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
command -v git >/dev/null 2>&1 || brew install git
command -v heroku >/dev/null 2>&1 || brew install heroku
command -v npm >/dev/null 2>&1 || brew install npm
command -v yarn >/dev/null 2>&1 || npm install -g yarn
command -v npx >/dev/null 2>&1 || npm install -g npx
heroku login
