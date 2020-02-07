# Github Commands

### to fitch all the branches localy**

```
git fetch
```
### Cache your password**
Turn on the credential helper so that Git will save your password in memory for some time. By default, Git will cache your password for 15 minutes.
```
git config --global credential.helper 'cache –timeout=3600'
```

### To know the local path of the git repository
```
git rev-parse --show-toplevel
```

### To find the git repository url
```
 git remote show origin
```

### Reset your global password 
```
git config --global credential.helper store
``` 
thee git pull and git will ask you to type your password 

### To reset the two-factor authuntication in case losing the phone 
```
ssh git@gitlab.com 2fa_recovery_codes
```
Then say yes, and you will get a new list of codes, use one of them 