# type: ignore

value = request.args.get("value")

try:
    value = float(value)
except (TypeError, ValueError):
    return "Invalid value", 400

result = value * 2
return str(result)