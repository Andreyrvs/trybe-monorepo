from challenges.challenge_encrypt_message import encrypt_message
import pytest


def test_encrypt_message():
    with pytest.raises(TypeError):
        encrypt_message(5, 4)
        encrypt_message(3, "🔥⛱🍷🗿🍷⛱")
        encrypt_message("🔥⛱🍷🗿🍷⛱", "🔥⛱🍷🗿🍷⛱")
    assert encrypt_message("🔥🌊⛱🗿⛱🌊", 4) == "🌊⛱_🗿⛱🌊🔥"
    assert encrypt_message("🔥🌊⛱🗿⛱🌊", 0) == "🌊⛱🗿⛱🌊🔥"
    assert encrypt_message("🌊⛱🍷🗿🍷⛱", 9) == "⛱🍷🗿🍷⛱🌊"
