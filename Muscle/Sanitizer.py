# This is b2 – cleans and filters harmful inputs.

class Sanitizer:
    """Sanitizes inputs to protect the AI's body."""
    def sanitize(self, data):
        # Remove or mask harmful content
        if isinstance(data, str):
            for word in ["insult", "hate", "stupid"]:
                data = data.replace(word, "[filtered]")
        return data
