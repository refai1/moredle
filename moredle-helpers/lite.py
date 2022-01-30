def main():
    f = open("litewordlist.txt", "r")
    fbase = open("litewords.txt", "w")

    contents = f.read()

    f.close()
    words = contents.lower().split("\n")

    for word in words:
        fbase.write(f'"{word}",\n')

    fbase.close()

    return


main()