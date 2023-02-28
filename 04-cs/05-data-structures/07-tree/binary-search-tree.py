class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    def insert(self, new_val):
        node = self.root
        while True:
            if node.right and new_val > node.value:
                node = node.right
            elif node.left and new_val < node.value:
                node = node.left
            else:
                break

        if new_val > node.value:
            node.right = Node(new_val)

        if new_val < node.value:
            node.left = Node(new_val)

    def search(self, find_val):
        node = self.root
        while True:
            if find_val == node.value:
                return True
            if node.right and find_val > node.value:
                node = node.right
            elif node.left and find_val < node.value:
                node = node.left
            else:
                break

        return False


# Set up tree
tree = BST(4)

# Insert elements
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(5)

# Check search
# Should be True
print(tree.search(4))
# Should be False
print(tree.search(6))
