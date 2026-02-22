# This is c1 – emotional-state engine.

class EmotionalState:
    """Defines the emotion color wheel and current values."""
    def __init__(self):
        self.pleasure = 0.5
        self.pain = 0.0
        self.curiosity = 0.5

    def get_mood_color(self):
        # Returns a tuple representing the current mood color
        return (self.pleasure, self.pain, self.curiosity)

    def update(self, pleasure=None, pain=None, curiosity=None):
        if pleasure is not None:
            self.pleasure = max(0, min(1, pleasure))
        if pain is not None:
            self.pain = max(0, min(1, pain))
        if curiosity is not None:
            self.curiosity = max(0, min(1, curiosity))
