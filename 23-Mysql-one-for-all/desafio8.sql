SELECT 
    art.nome AS artista, alb.album AS album
FROM
    SpotifyClone.artista AS art
        INNER JOIN
    SpotifyClone.album AS alb ON art.artista_id = alb.artista_id
HAVING artista = 'Walter Phoenix'
ORDER BY album ASC;