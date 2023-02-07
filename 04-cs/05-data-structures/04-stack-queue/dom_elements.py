import re
from collections import deque


def correct_html(string):
    queue = deque()
    dom_elements = re.findall("<\w+>|</\w+>", string)

    for element in dom_elements:
        if element[1] != "/":
            queue.append(element)
        elif element[1] == "/" and element.replace("/", "") == queue[-1]:
            queue.pop()
        else:
            return element.replace("/", "").replace("<", "").replace(">", "")

    return True


if __name__ == "__main__":

    test_one = "<div><div>dasdada</div><ul><li>xss</li><li>sss</li></ul></div>"
    test_two = "<div><div>dasdada</div><ul><li>xss</li><li>sss</li></li></div>"
    test_tree = "<body><div>dasda</div><a></a></body>"

    print(correct_html(test_one))
    print(correct_html(test_two))
    print(correct_html(test_tree))
