servidores = [[1, 0, 0], [1, 0, 0], [0, 0, 1], [0, 0, 1]]


def connected_servers(matrix: list[list[int]]) -> int:
    servers = 0
    for y in range(len(matrix)):
        for x in range(len(matrix[0])):
            if matrix[y][x] == 1:
                servers += find_one_pair(matrix, y, x)

    print(servers)


def find_one_pair(matrix, y, x):
    servers_y = 0
    servers_x = 0
    for value in range(len(matrix)):
        if matrix[value][x] == 1:
            servers_y += 1
            if servers_y > 1:
                return 1

    for value in range(len(matrix[0])):
        if matrix[y][value] == 1:
            servers_x += 1
            if servers_x > 1:
                return 1

    return 0


connected_servers(servidores)
