
def main():
    f = open('words.txt', 'r')

    fs = open('commonsuffixes.txt', 'w')
    fbase = open('base.txt', 'w')

    contents = f.read()

    f.close()
    words = contents.lower().split(" ")

    for word in words:
        if word.endswith('s') or word.endswith('ed') or word.endswith('er') or word.endswith('est'):
            fs.write(f'"{word}",\n')
        else:
            fbase.write(f'"{word}",\n')

    fs.close()
    fbase.close()
    
    return

main()