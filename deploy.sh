rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Liuyanpenga/Qingt-ui.git &&
git push -f -u origin master &&
cd -
echo https://liuyanpenga.github.io/Qingt-ui/index.html