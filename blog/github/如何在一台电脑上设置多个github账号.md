---
title: 如何在一套电脑上设置多个github账号
date: 2023-07-12
description: 如何在一套电脑上设置多个github账号
disabled: false
readMins: 8
tags:
  - Github
---

## 1 生成秘钥

首先需要对自己的多个不同账户生成对应的秘钥，比如我有两个账户分别为`a`(公司账号)和`b`(github 账号)，这时候对两个账户分别生成对应账户

### 1.1 生成 a 的秘钥

```bash
ssh-keygen -t rsa -C a@163.com”
```

这时候会在`~/.ssh/`文件夹下自动生成两个文件，分别是`id_rsa`和`id_rsa.pub`

### 1.2 生成 b 账户的秘钥

注意一定要重命名，我们这边将其命名为`id_rsa_github`

```bash
ssh-keygen -t rsa -f ~/.ssh/id_rsa_github -C "b@163.com"
```

这时候会在`~/.ssh/`文件夹下生成新的秘钥文件，分别是 `id_rsa_github`(私钥)和 `id_rsa_github.pub`(公钥).

## 2 将两个公钥分别添加到自己对应的 github 账户中

然后需要将两个秘钥(公钥文件)分别添加到自己对应的账户当中.

使用 vi 打开公钥文件即可.

```bash
vi ~/.ssh/id_rsa.pud # a账户
vi ~/.ssh/id_rsa_github.pud # b账户
```

## 3 编辑配置文件

先确认在`~/.ssh/`文件夹中是否存在`config`文件，如果不存在，首先创建一个，然后对其进行编辑。内容如下:

```bash
# a
Host github_a
HostName ssh.github.com
User git
IdentityFile ~/.ssh/id_rsa

# b

Host github_b # 前缀名可以任意设置
HostName ssh.github.com
User git
IdentityFile ~/.ssh/id_rsa_github
```

需要更改的地方是`Host`和`IdentityFile`，修改为自己能够识别的内容，以及自己生成的秘钥即可。

注意，`HostName`一定要是`ssh.github.com`，不然可能会失败。

修改完之后，保存退出，然后在`terminal`下命令以下命令，看是否正常：

```bash
ssh -T git@github_a
ssh -T git@github_b
```

如果出现下面结果，说明已经正常工作:

```bash
# Hi a! You've successfully authenticated， but GitHub does not provide shell access.
```

## 4 配置仓库设置

首先需要删除`git`配置的全局用户名和邮箱.接着在自己每个项目的仓库中按照需要设置不同的`user.name`和`user.email`

### 4.1 删除全局配置

```bash
git config --global --unset 'user.name'
git config --global --unset 'user.email'
```

### 4.2 设置 local 配置

在自己的每个文件夹(repo 仓库)下，打开`terminal`，然后进行设置.

```bash
git config user.name `xxx`
git config user.email `xxx@xxx.com`
```

注意，在设置结束之后，创建 git repo(git init)的时候，一定要再次检查一下用户名和用户邮箱，如果不对， 需要再次设置.

## 5 将本地仓库推送到远程仓库(github)

之后再添加远程仓库的时候，就不能直接使用 http 的方式了，只能使用 ssh 方式.

```bash
git remote add origin git@github_a:a/example.git # a account
git remote add origin git@github_b:b/example.git # b account
```

其中`github_a`或者`github_b`就是在配置文件中设置的`Host`

然后使用`git remote -v`确认是否连接上

最后进行推送

```bash
git push origin master
```

其实，上面的配置文件的意思就是，按照你设置远程仓库时使用不同的`Host`名称，查找`~/.ssh/config`文件使用不同的`SSH`文件连接到`GitHub`。这样你就将是以不同的身份访问`GitHub`仓库。
