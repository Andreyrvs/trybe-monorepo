SELECT 
    art.nome AS artista,
    alb.album AS album,
    COUNT(usu.usuario_id) AS seguidores
FROM
    SpotifyClone.artista AS art
        INNER JOIN
    SpotifyClone.album AS alb ON art.artista_id = alb.artista_id
        INNER JOIN
    SpotifyClone.usuario_segue_artista AS usu ON art.artista_id = usu.artista_id
GROUP BY usu.artista_id , album
ORDER BY seguidores DESC , artista ASC , album ASC;