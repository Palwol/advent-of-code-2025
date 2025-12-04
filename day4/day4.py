# convert.py

# txt 파일 읽기
with open("input.txt", "r", encoding="utf-8") as f:
    lines = f.read().splitlines()

# 각 줄을 문자별로 쪼개서 2차원 배열 만들기
matrix = []
for line in lines:
    line = line.strip()
    if line:  # 비어있는 줄은 무시
        matrix.append(list(line))

# JS 배열 문자열 만들기
js_array = "[\n"
for row in matrix:
    js_array += "  [" + ", ".join(f'"{ch}"' for ch in row) + "],\n"
js_array += "]"

# output.js 파일로 저장
with open("output.js", "w", encoding="utf-8") as f:
    f.write(f"export const data = {js_array};\n")
