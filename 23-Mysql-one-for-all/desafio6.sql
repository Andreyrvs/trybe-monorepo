SELECT 
    MIN(P.preco) AS faturamento_minimo,
    MAX(P.preco) AS faturamento_maximo,
    FORMAT(AVG(P.preco), 2) AS faturamento_medio,
    SUM(P.preco) AS faturamento_total
FROM
    SpotifyClone.usuario AS U
        INNER JOIN
    SpotifyClone.planos AS P ON P.plano_id = U.plano_id