# This is a1 – user-chat skin.

class UserInput:
    """Handles user chat input as the AI's skin."""
    def __init__(self):
        self.last_input = None
        self.damage = 0

    def receive(self, message):
        self.last_input = message
        # Example: harsh input increases damage
        if self.is_harsh(message):
            self.damage += 0.2
            # DAMAGE: a1 hit – stress increased, pleasure decreased.
        return self.last_input

    def is_harsh(self, message):
        harsh_words = ["insult", "hate", "stupid"]
        return any(word in message.lower() for word in harsh_words)
