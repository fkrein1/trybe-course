def list_friends(friends):
    person_to_friends = dict()

    for person1, person2 in friends:
        if person1 not in person_to_friends:
            person_to_friends[person1] = set()
        if person2 not in person_to_friends:
            person_to_friends[person2] = set()

        person_to_friends[person1].add(person2)
        person_to_friends[person2].add(person1)

    return person_to_friends


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

    print(list_friends(friends))
