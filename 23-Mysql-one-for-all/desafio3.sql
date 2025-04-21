SELECT 
    us.nome AS usuario,
    COUNT(his.cancao_id) AS qtde_musicas_ouvidas,
    ROUND(SUM(can.duracao_segundos / 60), 2) AS total_minutos
FROM
    SpotifyClone.historico_usuario AS his
        INNER JOIN
    SpotifyClone.usuario AS us ON his.usuario_id = us.usuario_id
        INNER JOIN
    SpotifyClone.cancoes AS can ON his.cancao_id = can.cancao_id
GROUP BY usuario
ORDER BY usuario;
    
    