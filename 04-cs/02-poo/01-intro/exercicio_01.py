class Television:
    def __init__(self):
        self._volume = 50
        self._channel = 1
        self._size = TelevisionSize.MEDIUM
        self._turned_on = False

    def increase_volume(self):
        if self._volume < 99:
            self._volume += 1

    def decrease_volume(self):
        if self._volume > 0:
            self._volume -= 1

    def change_change(self, channel: int):
        if 1 <= channel <= 99:
            self._channel = channel
        else:
            raise ValueError("Channel doesn't exist")
    
    def on_off(self):
      self._turned_on = not self._turned_on


class TelevisionSize:
    SMALL = 0
    MEDIUM = 1
    BIG = 2

televison = Television()