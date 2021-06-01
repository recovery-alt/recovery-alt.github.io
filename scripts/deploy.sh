#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git config --global user.name "cq360767996"
git config --global user.mail "360767996@qq.com"

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名
git push -f git@github.com:cq360767996/cq360767996.github.io.git master

git config --global user.name "cq360"
git config --global user.email "360767996@qq.com"

rm -rf .git
git init
git add -A
git commit -m 'deploy'
git push -f git@gitee.com:cq360/cq360.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
