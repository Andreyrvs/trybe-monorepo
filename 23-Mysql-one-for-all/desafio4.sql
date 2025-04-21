SELECT 
    usu.nome AS usuario,
    IF(YEAR(MAX(his.data_reproducao)) = 2021,
        'Usuário ativo',
        'Usuário inativo') AS condicao_usuario
FROM
    SpotifyClone.historico_usuario AS his
        INNER JOIN
    SpotifyClone.usuario AS usu ON usu.usuario_id = his.usuario_id
GROUP BY usu.nome
ORDER BY usu.nome