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
        return self.insert_rec(node, new_val)

    def insert_rec(self, node: Node, new_val):
        if new_val > node.value:
            if node.right:
                return self.insert_rec(node.right, new_val)
            else:
                node.right = Node(new_val)
        if new_val < node.value:
            if node.left:
                return self.insert_rec(node.left, new_val)
            else:
                node.left = Node(new_val)

    def search(self, find_val):
        node = self.root
        return self.search_rec(node, find_val)

    def search_rec(self, node: Node, find_val):
        if node == None:
            return False
        if find_val == node.value:
            return True
        if find_val > node.value:
            return self.search_rec(node.right, find_val)
        if find_val < node.value:
            return self.search_rec(node.left, find_val)


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
