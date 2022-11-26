great_chess_players = ["Magnus Carlsen", "Garry Kasparov", "Bobby Fischer", "Alberto"]
print(great_chess_players[0])
print(great_chess_players[1])
great_chess_players.append("Anatoly Karpov")
great_chess_players.remove("Alberto")

streamer_chess_players = ["Hikaru Nakamura", "Alexandra Botez", "Andrea Botez"]

great_chess_players.extend(streamer_chess_players)

print(great_chess_players)
print(great_chess_players.index("Hikaru Nakamura"))

great_chess_players.sort()
print(great_chess_players)

