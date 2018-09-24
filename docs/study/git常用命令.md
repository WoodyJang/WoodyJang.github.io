
# git 常用命令
##  1、设置Git的user name和email，查看公钥，生成公钥

> git config --global user.name "test"

> git config --global user.email "test@a.com"

> cd ~/.ssh

> ssh-keygen -t rsa -C "test@a.com"


##  2、克隆代码，拉取更新，添加，提交，推送，拉取更新，切换分支，合并分支

> git clone 【url】 //克隆指定url地址的代码到本地

> git clone -b 【分支名】 【url】//克隆指定分支下的代码

> git clone 【url】【本地目录名】 //克隆到指定文件夹

> git add . 或 git add --all  //添加所有文件

> git commit -m "提交" //提交代码

> git pull //拉取代码（简写，默认都一致）

> git pull origin mybranch//获取远程分支的新提交

> git pull origin mybranch:master //获取origin主机的mybranch分支，与本地的master分支合并

> git push -u origin master // 推送到主分支

> git push -u origin mybranch //推送到自己的分支

> git checkout -b newbranch //新建分支

> git checkout oldbranch //切换分支

> git branch //查看分支状态

> git branch -a //查看所有分支

> git branch -v //查看远程分支

> git status //查看代码提交的情况

> git merge origin/otherbranch //将其他分支合并到当前分支

##### pull=fetch+merge,一般只需使用pull即可

参考文档: https://segmentfault.com/a/1190000002442065