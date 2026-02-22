# This is b1 – routes user messages to emotional engine.

class InputRouter:
    """Routes inputs from Skin to Core."""
    def __init__(self, core):
        self.core = core

    def route(self, input_type, data):
        # Route to Core based on input type
        if input_type == "user":
            self.core.process_user(data)
        elif input_type == "network":
            self.core.process_network(data)
        elif input_type == "sensor":
            self.core.process_sensor(data)
