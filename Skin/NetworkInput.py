# This is a2 – network-request skin.

class NetworkInput:
    """Handles network requests as the AI's skin."""
    def __init__(self):
        self.last_request = None
        self.damage = 0

    def receive(self, request):
        self.last_request = request
        # Example: overload increases damage
        if self.is_overload(request):
            self.damage += 0.3
            # DAMAGE: a2 hit – overload stress increased, pleasure decreased.
        return self.last_request

    def is_overload(self, request):
        return request.get("load", 0) > 100
