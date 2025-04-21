SELECT 
    can.nome AS cancao, COUNT(his.cancao_id) AS reproducoes
FROM
    SpotifyClone.cancoes AS can
        INNER JOIN
    SpotifyClone.historico_usuario AS his ON can.cancao_id = his.cancao_id
GROUP BY can.nome
ORDER BY reproducoes DESC , can.nome ASC
LIMIT 2;