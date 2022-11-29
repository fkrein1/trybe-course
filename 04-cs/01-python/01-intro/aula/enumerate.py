languages = ["Python", "Java", "JavaScript"]

enumerate_prime = enumerate(languages)

print(list(enumerate_prime))


languages = ["Python", "Java", "JavaScript"]

for index, language in enumerate(["Python", "Java"]):
    print(f"{index} - {language}")
