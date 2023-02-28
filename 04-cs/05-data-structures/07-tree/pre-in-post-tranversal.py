class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def traversal(self, root: TreeNode) -> list[int]:
        res = []
        self.inorder(root, res)
        return res

    def preorder(self, root, res):
        if root:
            res.append(root.val)
            self.inorder(root.left, res)
            self.inorder(root.right, res)

    def inorder(self, root, res):
        if root:
            self.inorder(root.left, res)
            res.append(root.val)
            self.inorder(root.right, res)

    def postorder(self, root, res):
        if root:
            self.inorder(root.left, res)
            self.inorder(root.right, res)
            res.append(root.val)
