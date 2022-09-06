#!/usr/bin/env bash
###################
# Config kubectl with certificate on the local user computer
# Date 31-07-18
# https://github.com/VATBox/Blackbeard/wiki/kubernetes
##################

DIRECTORY="/usr/local/bin"

# create /usr/local/bin  dir if doesn't exist.
if [[ ! -d "$DIRECTORY" ]]; then
   echo $DIRECTORY does not exist
   echo "I will create $DIRECTORY"
   sudo mkdir -p -m 775 /usr/local/bin
fi

if [[ "$OSTYPE" == *"darwin"* ]]; then
  echo "Downloading kubectl for Mac"
  curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/darwin/amd64/kubectl
  whichshell=`dscl . -read ~/ UserShell| sed 's/UserShell: //'`
else
  echo "Downloading kubectl for Linux"
  curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
  whichshell=`echo $SHELL`
fi
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

# Find  return the exit code of a command
ec() { [[ "$1" == "-h" ]] && { shift && eval $* > /dev/null 2>&1; ec=$?; echo $ec; } || eval $*; ec=$?; }

mkdir $HOME/.kube
echo "Moving k8s certificate and configuration to \$HOME/.kube/"
find . -name  "k8s-*" ! -name "k8s-set*" -exec mv {} $HOME/.kube/ \;

# Define which profile according to which shell
echo "Your Shell was determine to be: ${whichshell}"
if [ "`echo ${whichshell} | grep zsh`" != "" ]; then
     userprofile=".zprofile"
   else
    if [ "`echo ${whichshell} | grep bash`" != "" ]; then
        userprofile=".bash_profile"
      else
        userprofile=".profile"
        echo "WARNING:Your shell is not BASH or ZSH, aliases will appended to ~/.profile file - make sure to add them to your start env file if its something else"
    fi
fi

COM1="'^alias kubectl-prod' $HOME/${userprofile}"
COM2="'^alias kubectl-staging' $HOME/${userprofile}"
COM3="'^alias kubectl-dev' $HOME/${userprofile}"

# Add alias if doesn't exist.
if [[ "$(ec -h grep $COM1)" != "0" ]]; then
    echo "alias kubectl-prod='kubectl config use-context production.k8s.vatbox.com'" >> $HOME/${userprofile}
fi

# Add alias if doesn't exist.
if [[ "$(ec -h grep $COM2)" != "0" ]]; then
    echo "alias kubectl-staging='kubectl config use-context staging.k8s.vatbox.com'" >> $HOME/${userprofile}
fi

# Add alias if doesn't exist.
if [[ "$(ec -h grep $COM3)" != "0" ]]; then
    echo "alias kubectl-dev='kubectl config use-context development.k8s.vatbox.com'" >> $HOME/${userprofile}
fi


PROD=$(find $HOME/.kube -name  "k8s-*-production-config.conf")
STAGE=$(find $HOME/.kube -name  "k8s-*-staging-config.conf")
DEV=$(find $HOME/.kube -name  "k8s-*-development-config.conf")

#export  KUBECONFIG=$PROD:$STAGE
KUB1="'^export KUBECONFIG=$PROD:$STAGE:$DEV' $HOME/${userprofile}"
KUB2="KUBECONFIG=$PROD:$STAGE:$DEV"


# Add alias if doesn't exist.
if [[ "$(ec -h grep $KUB1)" != "0" ]]; then
    echo "export $KUB2" >> $HOME/${userprofile}
fi

echo "Setting 600 permission on files"
find $HOME/.kube -name "k8s-*" -exec chmod 600 '{}' \;
echo "All done use kubectl-prod, kubectl-staging or kubectl-dev to set context"
echo "*** Please remove from your Downloaded directory all k8s* files if all working ***"
