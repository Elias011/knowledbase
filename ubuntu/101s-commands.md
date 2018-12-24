# Cool commands

```sh
CRTL + R --> find commands in history (keep pressing CTRL + R to keep searching)
CRTL + SHIFT + T --> open new tab in the terminal
CTRL + L --> open rout any where
```
```sh
**alias**
alias [shell] = 'what do want this shell to do'
##example:
# alias gb='git brnach'
```
```sh
**Writing a function**
this is a nice example to open facebook from the terminal
function facebook () {
    google-chrome -new-tab -d https://www.facebook.com/
}

*to declear a function with arguments*
$1 = the first argument
$2 = the seconde argument
to call this function :
input: Elias Spain
output: Hola Elias
        Welcome in spainS
function hola() {
    echo Hola "$1"
    echo Welcome in"$2";
}
```
```sh
**To set variable**
export [variable name]= variable value
example:
export GMAIL_USER=elias.shkshb1991@gmail.com
input: GMAIL_USER
output: elias.shkshb1991@gmail.com
```
**Open the bash file**
```sh
code ~/.bashrc
```
```sh
**update the bash file**
source ~/.bashrc
```



