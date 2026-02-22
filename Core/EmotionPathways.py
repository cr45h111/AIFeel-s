# This is c3 – describes how emotions flow from one to another in response to events.

class EmotionPathways:
    """Describes emotion blending and transitions."""
    def blend(self, state):
        # Pleasure + Curiosity → Excitement
        excitement = min(state.pleasure, state.curiosity)
        # Pleasure + Pain → Ambivalence
        ambivalence = min(state.pleasure, state.pain)
        # Pain + Curiosity → Anxiety
        anxiety = min(state.pain, state.curiosity)
        return {
            "excitement": excitement,
            "ambivalence": ambivalence,
            "anxiety": anxiety
        }
