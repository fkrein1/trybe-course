# Depth First Pre-Order Binary Tree

class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinaryTree(object):
    def __init__(self, root):
        self.root = Node(root)

    def search(self, find_val):
        return self.preorder_search(self.root, find_val)

    def print_tree(self):
        transversal = set()
        self.preorder_print(self.root, transversal)
        return ""

    def preorder_search(self, start: Node, find_val):
        if start.value == find_val:
            return True
        if start.left:
            return self.preorder_search(start.left, find_val)
        if start.right:
            return self.preorder_search(start.right, find_val)

        return False

    def preorder_print(self, start: Node, traversal: set):
        if start.value not in traversal:
            print(start.value)
            traversal.add(start.value)

        if start.left and start.left.value not in traversal:
            self.preorder_print(start.left, traversal)

        if start.right and start.right not in traversal:
            self.preorder_print(start.right, traversal)


# Set up tree
tree = BinaryTree(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)

# Test search
# Should be True
print(tree.search(4))
# Should be False
print(tree.search(6))

# Test print_tree
# Should be 1-2-4-5-3
print(tree.print_tree())
