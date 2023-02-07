def num_students(friends):
    unique_student = set()

    for person1, person2 in friends:
        unique_student.add(person1)
        unique_student.add(person2)
    return len(unique_student)


if __name__ == "__main__":
    friends = [
        ("Dani", "Ali"),
        ("Fabi", "Zizu"),
        ("Gabi", "Ito"),
        ("Fabi", "Rafa"),
        ("Ali", "Fabi"),
        ("Rafa", "Lulu"),
        ("Gabi", "Hos"),
        ("Eli", "Hos"),
        ("Hos", "Dani"),
        ("Zizu", "Gabi"),
        ("Fabi", "Gabi"),
    ]
    print(num_students(friends))
