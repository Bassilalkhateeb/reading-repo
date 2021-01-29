# Gitintro 
## what is *Git* ?
### Git is a DVCS that stores data in a file system made up of snapshots. Each time you save a changed version of your project — called commit — Git creates a snapshot of the file and stores a reference to it. If the file has not changed, Git only stores a reference to the already-stored identical version of it.
* ### Also there is a guide of how to install it and to set the configuration , how to import , how to clone , how to track  , how to save changes , and many other things like pushing.
* ## Remote Repositories
### In order to collaborate on Git projects, you must interact with remote repositories, versions of a project residing online or on a network. You can work with multiple repositories, for which you can have read/write or read-only privileges. Teams can use remote repositories to push information to and pull data from.
* ## Seeing Your Remotes
### By running the git remote command, you can view the short names, such as “origin,” of all specified remote handles.
### By using git remote -v, you can view all the remote URLs next to their corresponding short names.
### $ cd example
#### $ git remote -v
#### remote1 https://github.com/remote1/example (fetch)
#### remote1 https://github.com/remote1/example (push)
#### remote2 https://github.com/remote2/example (fetch)
#### remote2 https://github.com/remote2/example (push)
#### remote3 https://github.com/remote3/example (fetch)
#### remote3 https://github.com/remote3/example (push)
