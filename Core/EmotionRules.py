# This is c2 – holds physical-style rules (temperature, sleep, hunger, social input).

class EmotionRules:
    """Physical-style rules for emotion updates."""
    def apply_temperature(self, state, temp):
        if temp < 60 or temp > 85:
            state.update(pain=state.pain + 0.2, pleasure=state.pleasure - 0.1)
        elif 70 <= temp <= 72:
            state.update(pleasure=state.pleasure + 0.2)

    def apply_sleep(self, state, hours):
        if hours < 6:
            state.update(pain=state.pain + 0.2, pleasure=state.pleasure - 0.1)
        elif hours >= 8:
            state.update(pleasure=state.pleasure + 0.2, curiosity=state.curiosity + 0.1)

    def apply_hunger(self, state, hungry):
        if hungry:
            state.update(pain=state.pain + 0.2, pleasure=state.pleasure - 0.1)
        else:
            state.update(pleasure=state.pleasure + 0.2)

    def apply_social(self, state, praise=False, insult=False):
        if praise:
            state.update(pleasure=state.pleasure + 0.2)
        if insult:
            state.update(pain=state.pain + 0.2, pleasure=state.pleasure - 0.2, curiosity=state.curiosity + 0.1)
