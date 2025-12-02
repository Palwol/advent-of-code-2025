with open('./input.txt', 'r', encoding="utf-8") as f:
  text = f.read().strip()

items = [item.strip() for item in text.split(",") if item.strip()]

js_array = "[" + ", ".join(f'"{item}"' for item in items) + "]"

with open("./input.js", "w", encoding="utf-8") as f:
  f.write(f"export const data = {js_array};")