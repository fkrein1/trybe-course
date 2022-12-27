import pytest
from letter_to_number import letter_to_number


def test_error_when_char_greater_than_30():
    with pytest.raises(ValueError, match="Expression with invalid length"):
        letter_to_number("SADJAAKJDA-DASDADASDA-DASDADADA-DASDADA")


def test_error_when__any_char_is_invalid():
    with pytest.raises(ValueError, match="Invalid character"):
        letter_to_number("1-HOME-*DA-HOME")


def test_abc_should_return_111():
    assert letter_to_number("ABC") == "222"


def test_xpto_should_return_9786():
    assert letter_to_number("XPTO") == "9786"


def test_longer_text_should_return_correct_number():
    assert letter_to_number("1-HOME-SWEET-HOME") == "1-4663-79338-4663"
