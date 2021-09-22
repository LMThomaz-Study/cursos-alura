from abc import ABC  # abstract base class
from collections.abc import MutableSequence
from number import Complex


class Playlist(MutableSequence):
    pass


filmes = Playlist()

num = Complex(1, 2)
