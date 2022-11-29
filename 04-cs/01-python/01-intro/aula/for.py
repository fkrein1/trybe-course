restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


filtered_restaurants = [restaurant
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D 

filtered_restaurants = [restaurant["name"]
                       for restaurant in restaurants
                       if restaurant["nota"] > min_rating]
print(filtered_restaurants)

names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]
print(new_names_list)


quadrados = [x*x for x in range(11)]
print(quadrados)


ratings = [6, 8, 5, 9, 10]

new_ratings = [rating * 10
              for rating in ratings
    ]

print(new_ratings)

new_ratings = []
for rating in ratings:
    new_ratings.append(rating * 10)

print(new_ratings)

for rating in new_ratings:
    if rating % 3 == 0:
        print(rating)

number = 5
result = 1
for factor in range(1, number+1):
    result *= factor
result