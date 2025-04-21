#!/usr/bin/env bash
set -euo pipefail

# 1) coleta só os repos que começam com dois dígitos e “-”
repos=$(gh repo list Andreyrvs \
  --visibility public --limit 1000 \
  --json name \
  --jq '.[] | select(.name | test("^[0-9]{2}-")) | .name')

# 2) para cada repo, adiciona como subtree
for repo in $repos; do
  echo "➡️  Adicionando $repo…"
  git remote add "$repo" "https://github.com/Andreyrvs/$repo.git"
  git fetch "$repo"
  git subtree add \
    --prefix="$repo" \
    "$repo" main \
    --squash
  git remote remove "$repo"
done

echo "✅ Todos os repos numéricos foram importados em numeric/*"
