
# Merge local branches

### 1st merge branches

``
    # Check out the main branch
    git checkout main

    # Merge the feature-branch into main
    git merge feature-branch

    # If there are conflicts, resolve them and stage the resolved files
    git add [file-name]

    # Commit the merge if it was not automatically committed
    git commit -m "Merge feature-branch into main"

    # Push the main branch to the remote repository
    git push origin main // now add that files in remote main branch.
``

### 2nd delete the merge branches

``

        # Ensure you're not on the branch you want to delete
        git checkout main

        # List local branches
        git branch

        # Delete the local branch
        git branch -d feature-branch

        # Force delete if necessary
        git branch -D feature-branch


``

---

# Merge remo branches

``

        #### Fetch the latest changes from the remote repository

        git fetch origin // this is used get the remote branches list.

        #### Switch to the main branch

        git checkout main // 1st navigate to main branch.

        #### Merge the feature-branch into main

        git merge feature-branch // merge the remote branch to our local main branch.

        #### If there are conflicts, resolve them and stage the resolved files

        git add [file-name] // add the new files are come from the new branch in main branch.

        #### Commit the merge if it was not automatically committed

        git commit -m "Merge feature-branch into main" // commit to store that files in local repo.

        #### Push the main branch to the remote repository

        git push origin main // now add that files in remote main branch.

``


### After successful merge delete that remote repo

``

    #### Ensure you're not on the branch you want to delete
    git checkout main

    #### List remote branches
    git branch -r

    #### Delete the remote branch
    git push origin --delete feature-branch

    #### Verify the deletion
    git branch -r

``