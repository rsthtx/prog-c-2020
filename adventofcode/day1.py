# https://adventofcode.com/2020/day/1

lines = [
    '1721',
    '979',
    '366',
    '299',
    '675',
    '1456',
]


def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()

def problemOne():
    global lines
    print(lines)

def problemTwo():
    pass



# load_data("day1-input.txt")
problemOne()
# problemTwo()
