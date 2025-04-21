#!/usr/bin/env bash
set -euo pipefail

OWNER="Andreyrvs"
MONOREPO="trybe-monorepo"
OUTPUT="README.md"

# Cabeçalho
cat > "$OUTPUT" <<EOF
# Repositórios Numéricos

Este README foi gerado automaticamente pelo script \`generate-readme-numeric.sh\`.

| Nome | Descrição | Linguagem | Criado em |
|------|-----------|-----------|-----------|
EOF

# Gera linhas da tabela
gh repo list "$OWNER" \
  --limit 1000 \
  --json name,description,createdAt,primaryLanguage \
  --jq '
    [ .[]
      | select(.name | test("^[0-9]{2}-"))
    ]
    | sort_by(.name)
    | .[]
    | "| [" + .name + "](https://github.com/'"$OWNER"'/'"$MONOREPO"'/tree/main/" + .name + ")" 
      + " | " + ( .description // "Sem descrição" )
      + " | " + ( .primaryLanguage.name // "Desconhecida" )
      + " | " + (.createdAt | split("T")[0]) + " |"
  ' >> "$OUTPUT"

echo "✅ README.md com linguagem e links ajustados gerado com sucesso!"
