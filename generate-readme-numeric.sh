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
    | .createdMonth = (.createdAt | split("-")[1])
    | .createdYear = (.createdAt | split("-")[0])
    | "| [" + .name + "](https://github.com/'"$OWNER"'/'"$MONOREPO"'/tree/main/" + .name + ")" 
      + " | " + ( .description // "Sem descrição" )
      + " | " + ( .primaryLanguage.name // "Desconhecida" )
      + " | " + .createdMonth + "/" + .createdYear + " |"
  ' >> "$OUTPUT"

echo "✅ README.md com data formatada como MM/AAAA gerado com sucesso!"
