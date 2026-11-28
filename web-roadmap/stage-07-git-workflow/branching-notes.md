# Git Branching and Merging Notes

## Common Branch Commands
- `git branch`: list local branches
- `git switch -c feat/xyz`: create and switch to a new branch
- `git switch main`: switch back to `main`
- `git branch -d feat/xyz`: delete a merged branch

## Merging
- **Fast-forward merge:** `main` has no new commits since the branch was created, so Git simply moves the `main` pointer forward.
- **3-way merge:** Both `main` and the feature branch have new commits, so Git creates a merge commit combining both histories.
- **Resolving conflicts:** Open conflicted files, keep the intended changes between `<<<<<<<` and `>>>>>>>`, stage with `git add`, and finish with `git commit`.
