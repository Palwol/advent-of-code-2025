with open('input.txt', 'r', encoding="utf-8") as f:
  lines = f.read().splitlines()

js_array = "[" + ", ".join(f'"{line}"' for line in lines if line.strip()) + "]"

with open("input.js", "w", encoding="utf-8") as f:
  f.write(f"export const data = {js_array};\n")