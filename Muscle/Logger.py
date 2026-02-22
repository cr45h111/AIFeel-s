# This is b3 – records experiences and damage.

class Logger:
    """Logs experiences and damage for the AI."""
    def __init__(self):
        self.log = []

    def record(self, event):
        self.log.append(event)

    def get_log(self):
        return self.log
