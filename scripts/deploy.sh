#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd app/.vitepress/dist

rm -rf .git
git config --global user.name "cq360"
git config --global user.email "360767996@qq.com"
git init
git add -A
git commit -m 'deploy'

cd -
